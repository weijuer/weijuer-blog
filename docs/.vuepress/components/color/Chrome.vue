<template>
  <transition name="w-transition-fade">
    <div class="w-color-picker">
      <div class="w-color-picker__head">
        <Saturation v-model="colors" @change="childChange"/>
      </div>
      <div class="w-color-picker__body">
        <div class="w-color-controls">
          <div class="w-color-preview">
            <div class="w-active-color" :style="{background: activeColor}"></div>
          </div>
          <div class="w-color-sliders">
            <div class="w-color-slider-item">
              <Hue v-model="colors" @change="childChange"/>
            </div>
            <div class="w-color-slider-item">
              <Alpha v-model="colors" @change="childChange"/>
            </div>
          </div>
        </div>
        <div class="w-color-types">
          <div class="w-color-type-item">
            <input
              class="w-color-input"
              v-model="toggledColor.color"
              @change="inputChange"
              type="text"
            >
            <span class="w-color-desc">{{ toggledColor.desc }}</span>
          </div>
          <div class="w-color-toggle-btn" role="button" @click="toggleViews">
            <svg class="w-color-toggle-icon" viewBox="0 0 24 24">
              <path
                fill="#333"
                d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import colorMixin from "../../mixin/color";
  import Saturation from "../color/Saturation";
  import Hue from "../color/Hue";
  import Alpha from "../color/Alpha";

  export default {
    name: "Chrome-picker",
    mixins: [colorMixin],
    props: {
      disableAlpha: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Alpha,
      Hue,
      Saturation
    },
    data() {
      return {
        // 0:hex, 1:rgba, 2:hsl
        colorType: 0
      };
    },
    computed: {
      hsl() {
        const { h, s, l } = this.colors.hsl;
        return {
          h: h.toFixed(),
          s: `${(s * 100).toFixed()}%`,
          l: `${(l * 100).toFixed()}%`
        };
      },
      activeColor() {
        const rgba = this.colors.rgba;
        return `rgba(${Object.values(rgba).join(",")})`;
      },
      hasAlpha() {
        return this.colors.a < 1;
      },
      toggledColor() {
        let color, desc, _toggledColor;
        switch (this.colorType) {
          case 1:
            const rgba = this.colors.rgba;
            color = `rgba(${Object.values(rgba).join(",")})`;
            desc = "rgba";
            break;
          case 2:
            const hsl = this.hsl;
            color = `hsl(${Object.values(hsl).join(",")})`;
            desc = "hsl";
            break;
          default:
            color = this.hasAlpha ? this.colors.hex8 : this.colors.hex;
            desc = "hex";
            break;
        }

        // 结构赋值
        _toggledColor = { color, desc };

        return _toggledColor;
      }
    },
    methods: {
      childChange(data) {
        this.colorChange(data);
      },
      inputChange(data) {
        if (!data) {
          return;
        }
        if (data.hex) {
          this.isValidHex(data.hex) &&
            this.colorChange({
              hex: data.hex,
              source: "hex"
            });
        } else if (data.r || data.g || data.b || data.a) {
          this.colorChange({
            r: data.r || this.colors.rgba.r,
            g: data.g || this.colors.rgba.g,
            b: data.b || this.colors.rgba.b,
            a: data.a || this.colors.rgba.a,
            source: "rgba"
          });
        } else if (data.h || data.s || data.l) {
          const s = data.s ? data.s.replace("%", "") / 100 : this.colors.hsl.s;
          const l = data.l ? data.l.replace("%", "") / 100 : this.colors.hsl.l;
          this.colorChange({
            h: data.h || this.colors.hsl.h,
            s,
            l,
            source: "hsl"
          });
        }
      },
      toggleViews() {
        if (this.colorType >= 2) {
          this.colorType = 0;
          return;
        }
        this.colorType++;
      }
    }
  };
</script>

<style lang="stylus">
  .w-color-picker {
    width: 225px;
    position: relative;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);
    font-family: Menlo;
    background: #fff;

    &__head {
      width: 100%;
      padding-bottom: 55%;
      position: relative;
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    &__body {
      padding: 16px 16px 12px;
      background-color: #fff;

      .w-color-controls {
        display: flex;

        .w-color-preview {
          position: relative;
          width: 36px;

          .w-active-color {
            position: relative;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            overflow: hidden;
            z-index: 110;
            background: rgb(21, 64, 42);

            &:before {
              content: '';
              display: inline-block;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 100;
              border-radius: 4px;
              background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.25) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.25) 0);
              background-color: transparent;
              background-size: 10px 10px;
              background-position: 0 0, 15px 15px;
            }
          }
        }

        .w-color-sliders {
          flex: 1;

          .w-color-slider-item {
            position: relative;
            height: 10px;

            &:first-of-type {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }

  .w-color-types {
    display: flex;
    padding-top: 1.25rem;

    .w-color-type-item {
      flex: 1;

      .w-color-input {
        width: 100%;
        height: 22px;
        line-height: 1.5;
        font-size: 12px;
        color: #333;
        border-radius: 2px;
        border: none;
        box-shadow: inset 0 0 0 1px #dadada;
        text-align: center;
        outline: none;
      }

      .w-color-desc {
        display: block;
        margin-top: 12px;
        font-size: 12px;
        text-transform: uppercase;
        text-align: center;
        color: #969696;
      }
    }

    .w-color-toggle-btn {
      margin-left: 1rem;
      align-self: center;

      .w-color-toggle-icon {
        padding: 4px 0;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background: #eee;
        }
      }
    }
  }
</style>