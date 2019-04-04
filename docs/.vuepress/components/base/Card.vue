<template>
  <div class="w-card" :class="[cardType]">
    <div class="w-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="w-card__body">
      <slot />
    </div>
  </div>
</template>
<script>
  export default {
    name: "Card",
    props: {
      header: {},
      type: {
        type: String
      }
    },
    computed: {
        cardType() {
            return this.type ? `w-card-${this.type}` : '';
        }
    }
  };
</script>

<style lang="stylus">
  $theme-color = #2ecc71;

  .w-card {
    margin-bottom: 2.2rem;
    box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
    background-color: #fff;

    .w-card__body {
      padding: 2.2rem 2.2rem;
      color: #575962;
    }
  }
</style>

