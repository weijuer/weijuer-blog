<template>
  <transition name="w-transition-fade">
    <div class="w-color-picker" :style="{'background-color': bgc}">
      <div class="w-color-picker__head">
        <Saturation v-model="colors" @change="updateValue"/>
      </div>
      <div class="w-color-picker__body">
        <div class="w-color-controls">
          <div class="w-color-preview">
            <div class="w-active-color"></div>
          </div>
          <div class="w-color-sliders">
            <div class="w-color-slider-item">
              <div class="w-hue-container">
                <div class="w-hue w-hue--horizontal"></div>
                <div class="w-hue-pointer"></div>
              </div>
            </div>
            <div class="w-color-slider-item">
              <div class="w-alpha-container">
                <div class="w-alpha"></div>
                <div class="w-alpha-pointer"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-color-info"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Saturation from "../color/Saturation";

  let defaultProps = {
    hex: "#194d33e6",
    hsl: {
      h: 150,
      s: 0.5,
      l: 0.2,
      a: 0.9
    },
    hsv: {
      h: 150,
      s: 0.66,
      v: 0.3,
      a: 0.9
    },
    rgba: {
      r: 25,
      g: 77,
      b: 51,
      a: 0.9
    },
    a: 0.9
  };

  export default {
    name: "Color-picker",
    props: {
      type: {
        type: String,
        default: "info"
      }
    },
    components: {
      Saturation
    },
    data() {
      return {
        colors: defaultProps
      };
    },

    computed: {
      bgc() {
        return this.colors.hex;
      }
    },
    methods: {
      onOk() {
        console.log("ok");
      },
      onCancel() {
        console.log("cancel");
      },
      updateValue(value) {
        this.colors = value;
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

  .w-hue-container {
    margin: 0 2px;
    position: relative;
    height: 100%;
    cursor: pointer;

    .w-hue {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 4px;

      &.w-hue--horizontal {
        background: linear-gradient(90deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
      }

      &.w-hue--vertical {
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
      }
    }

    .w-hue-pointer {
      display: inline-block;
      position: absolute;
      top: 50%;
      z-index: 112;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: pointer;
      background-color: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
    }
  }

  .w-alpha-container {
    margin: 0 2px;
    position: relative;
    height: 100%;
    cursor: pointer;

    .w-alpha {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 110;
      border-radius: 4px;
      background: linear-gradient(to right, rgba(25, 77, 51, 0) 0%, rgb(25, 77, 51) 100%);

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

    .w-alpha-pointer {
      display: inline-block;
      position: absolute;
      top: 50%;
      z-index: 112;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: pointer;
      background-color: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
    }
  }
</style>