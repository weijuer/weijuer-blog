<template>
  <transition name="w-transition-fade">
    <div class="w-color-picker" :style="{background: activeColor}">
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
        <div class="w-color-info"></div>
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
      return {};
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
        return "rgba(" + [rgba.r, rgba.g, rgba.b, rgba.a].join(",") + ")";
      },
      hasAlpha() {
        return this.colors.a < 1;
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
        if (this.fieldsIndex >= 2) {
          this.fieldsIndex = 0;
          return;
        }
        this.fieldsIndex++;
      },
      showHighlight() {
        this.highlight = true;
      },
      hideHighlight() {
        this.highlight = false;
      }
    }
  };
</script>

<style lang="stylus">
  .w-color-picker {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);
    box-sizing: initial;
    width: 225px;
    font-family: Menlo;
    background-color: #fff;

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
</style>