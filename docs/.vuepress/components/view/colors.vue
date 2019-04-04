<template>
  <div class="container">
    <Panel type="bordered">
      <h3 slot="header">Button Examples</h3>
      <h5>Default Buttons</h5>
      <Button
        :type="item"
        v-for="(item, index) of btns"
        :key="'default' + index"
        v-text="item"
      ></Button>

      <h5>Outline Buttons</h5>
      <Button
        :outline="item"
        v-for="(item, index) of btns"
        :key="'outline' + index"
        v-text="item"
      ></Button>
    </Panel>

    <Panel type="bordered">
      <h3 slot="header">ColorPicker Examples</h3>
      <ColorPicker />
    </Panel>

  </div>
</template>

<script>
  import Panel from "../base/Panel";
  import Button from "../base/Button";
  import ColorPicker from "../base/ColorPicker";

  export default {
    name: "v-colors",
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
        ]
      };
    },
    components: {
      Panel,
      Button,
      ColorPicker
    }
  };
</script>