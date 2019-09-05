<template lang="html">
  <Panel type="bordered">
    <h3 slot="header" draggable>drop Examples</h3>
    <Dropzone message="drop here" />
  </Panel>
</template>

<script>
  import Panel from "../base/Panel";
  import Dropzone from "../base/Dropzone";

  export default {
    name: "v-drop",
    components: {
      Panel,
      Dropzone
    }
  };
</script>