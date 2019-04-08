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