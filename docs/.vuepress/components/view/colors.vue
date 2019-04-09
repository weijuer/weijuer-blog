<template>
  <div class="container">
    <Panel type="bordered">
      <h3 slot="header">Button Examples</h3>
      <h5>Default Buttons</h5>
      <Button :type="item" v-for="(item, index) of btns" :key="'default' + index" v-text="item"></Button>

      <h5>Outline Buttons</h5>
      <Button :outline="item" v-for="(item, index) of btns" :key="'outline' + index" v-text="item"></Button>
    </Panel>

    <Panel type="bordered">
      <h3 slot="header" :style="{color: bgc}">ColorPicker Examples</h3>
      <chrome-picker :value="colors" @input="updateValue"/>
    </Panel>
  </div>
</template>

<script>
  import Panel from "../base/Panel";
  import Button from "../base/Button";
  import Chrome from "../color/Chrome";

  let defaultProps = {
    hex: "#2ecc71e6",
    hsl: {
      h: 145,
      s: 0.63,
      l: 0.49,
      a: 0.9
    },
    hsv: {
      h: 150,
      s: 0.66,
      v: 0.3,
      a: 0.9
    },
    rgba: {
      r: 46,
      g: 204,
      b: 113,
      a: 0.9
    },
    a: 0.9
  };

  export default {
    name: "v-colors",
    components: {
      Panel,
      Button,
      "chrome-picker": Chrome
    },
    data() {
      return {
        btns: [
          "primary",
          "success",
          "warning",
          "danger",
          "info",
          "metal",
          "brand",
          "focus",
          "dark"
        ],
        colors: defaultProps
      };
    },
    computed: {
      bgc() {
        const rgba = this.colors.rgba;
        return "rgba(" + [rgba.r, rgba.g, rgba.b, rgba.a].join(",") + ")";
      }
    },
    methods: {
      updateValue(value) {
        this.colors = value;
      }
    }
  };
</script>