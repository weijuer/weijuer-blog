<template>
  <div class="w-panel" :class="[panelType]">
    <div class="w-panel__head" v-if="$slots.header || header">
      <slot name="header"/>
    </div>
    <div class="w-panel__body">
      <slot/>
    </div>
    <div class="w-panel__footer" v-if="$slots.footer || footer">
      <slot name="footer"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Panel",
    props: {
      type: {
        type: String
      },
      header: {},
      footer: {}
    },
    computed: {
      panelType() {
        return this.type ? `w-panel--${this.type}` : "";
      }
    }
  };
</script>

<style lang="stylus">
  $theme-color = #2ecc71;

  .w-panel {
    margin-bottom: 2.2rem;
    box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
    background-color: #fff;

    .w-panel__head {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      padding: 0 2rem;
      height: 4.2rem;
      position: relative;
      border-bottom: 1px solid #ebedf2;

      .w-panel__head-caption {
        display: flex;
        align-items: center;
        align-content: flex-start;

        .w-panel__head-title {
          display: flex;
          align-items: center;

          .w-panel__head-text {
            display: flex;
            align-items: center;
            font-size: 1.125rem;
            font-weight: 500;
            font-family: Roboto;
            margin: 0;
            padding: 0;
            color: #575962;
          }
        }
      }
    }

    .w-panel__body {
      padding: 2rem 2rem;
      color: #575962;
    }

    &.w-panel--bordered {
      box-shadow: none;
      border: 1px solid #ebedf2;
    }
  }
</style>

