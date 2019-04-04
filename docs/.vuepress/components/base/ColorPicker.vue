<template>
  <transition name="w-transition-fade">
    <div class="w-color-picker" :style="{'background-color': bgc}">
      <div class="w-saturation-wrapper">
        <Saturation v-model="colors" @change="updateValue"/>
      </div>
      <div class="w-color-picker__body"></div>
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
  .w-saturation-wrapper {
    width: 100%;
    padding-bottom: 55%;
    position: relative;
    border-radius: 2px 2px 0 0;
    overflow: hidden;
  }
</style>