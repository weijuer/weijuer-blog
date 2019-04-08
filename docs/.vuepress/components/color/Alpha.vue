<template>
  <div
    class="w-alpha-container"
    ref="container"
    @mousedown="handleMouseDown"
    @touchmove="handleChange"
    @touchstart="handleChange"
  >
    <div class="w-alpha" :style="{background: gradientColor}"></div>
    <div class="w-alpha-pointer" :style="{left: colors.a * 100 + '%'}"></div>
  </div>
</template>

<script>
  export default {
    name: "Alpha",
    props: {
      value: Object,
      onChange: Function
    },
    components: {},
    computed: {
      colors() {
        return this.value;
      },
      gradientColor() {
        var rgba = this.colors.rgba;
        var rgbStr = [rgba.r, rgba.g, rgba.b].join(",");
        return (
          "linear-gradient(to right, rgba(" +
          rgbStr +
          ", 0) 0%, rgba(" +
          rgbStr +
          ", 1) 100%)"
        );
      }
    },
    methods: {
      handleChange(e, skip) {
        !skip && e.preventDefault();
        var container = this.$refs.container;
        var containerWidth = container.clientWidth;
        var xOffset = container.getBoundingClientRect().left + window.pageXOffset;
        var pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        var left = pageX - xOffset;
        var a;
        if (left < 0) {
          a = 0;
        } else if (left > containerWidth) {
          a = 1;
        } else {
          a = Math.round((left * 100) / containerWidth) / 100;
        }
        if (this.colors.a !== a) {
          this.$emit("change", {
            h: this.colors.hsl.h,
            s: this.colors.hsl.s,
            l: this.colors.hsl.l,
            a: a,
            source: "rgba"
          });
        }
      },
      handleMouseDown(e) {
        this.handleChange(e, true);
        window.addEventListener("mousemove", this.handleChange);
        window.addEventListener("mouseup", this.handleMouseUp);
      },
      handleMouseUp() {
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
      transform: translate(-6px, -50%);
    }
  }
</style>