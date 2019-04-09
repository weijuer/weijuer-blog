<template>
  <div
    class="w-hue-container"
    role="slider"
    :aria-valuenow="colors.hsl.h"
    aria-valuemin="0"
    aria-valuemax="360"
    ref="container"
    @mousedown="handleMouseDown"
    @touchmove="handleChange"
    @touchstart="handleChange"
  >
    <div class="w-hue" :class="directionClass"></div>
    <div class="w-hue-pointer" :style="{top: pointerTop, left: pointerLeft}" role="presentation"></div>
  </div>
</template>

<script>
  export default {
    name: "Hue",
    props: {
      value: Object,
      direction: {
        type: String,
        // [horizontal | vertical]
        default: "horizontal"
      }
    },
    data() {
      return {
        oldHue: 0,
        pullDirection: ""
      };
    },
    computed: {
      colors() {
        const h = this.value.hsl.h;
        if (h !== 0 && h - this.oldHue > 0) this.pullDirection = "right";
        if (h !== 0 && h - this.oldHue < 0) this.pullDirection = "left";
        this.oldHue = h;
        return this.value;
      },
      directionClass() {
        return {
          "w-hue--horizontal": this.direction === "horizontal",
          "w-hue--vertical": this.direction === "vertical"
        };
      },
      pointerTop() {
        if (this.direction === "vertical") {
          if (this.colors.hsl.h === 0 && this.pullDirection === "right") return 0;
          return 100 - ((this.colors.hsl.h * 100) / 360) + "%";
        } else {
          return "50%";
        }
      },
      pointerLeft() {
        if (this.direction === "vertical") {
          return 0;
        } else {
          if (this.colors.hsl.h === 0 && this.pullDirection === "right") return "100%";
          return (this.colors.hsl.h * 100) / 360 + "%";
        }
      }
    },
    methods: {
      handleChange(e, skip) {
        !skip && e.preventDefault();
        var container = this.$refs.container;
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;
        var xOffset = container.getBoundingClientRect().left + window.pageXOffset;
        var yOffset = container.getBoundingClientRect().top + window.pageYOffset;
        var pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        var pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
        var left = pageX - xOffset;
        var top = pageY - yOffset;
        var h;
        var percent;
        if (this.direction === "vertical") {
          if (top < 0) {
            h = 360;
          } else if (top > containerHeight) {
            h = 0;
          } else {
            percent = -((top * 100) / containerHeight) + 100;
            h = (360 * percent) / 100;
          }
          if (this.colors.hsl.h !== h) {
            this.$emit("change", {
              h: h,
              s: this.colors.hsl.s,
              l: this.colors.hsl.l,
              a: this.colors.hsl.a,
              source: "hsl"
            });
          }
        } else {
          if (left < 0) {
            h = 0;
          } else if (left > containerWidth) {
            h = 360;
          } else {
            percent = (left * 100) / containerWidth;
            h = (360 * percent) / 100;
          }
          if (this.colors.hsl.h !== h) {
            this.$emit("change", {
              h: h,
              s: this.colors.hsl.s,
              l: this.colors.hsl.l,
              a: this.colors.hsl.a,
              source: "hsl"
            });
          }
        }
      },
      handleMouseDown(e) {
        this.handleChange(e, true);
        window.addEventListener("mousemove", this.handleChange);
        window.addEventListener("mouseup", this.handleMouseUp);
      },
      handleMouseUp(e) {
        this.unbindEventListeners();
      },
      unbindEventListeners() {
        window.removeEventListener("mousemove", this.handleChange);
        window.removeEventListener("mouseup", this.handleMouseUp);
      }
    }
  };
</script>

<style lang="stylus">
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
      transform: translate(-6px, -50%);
    }
  }
</style>