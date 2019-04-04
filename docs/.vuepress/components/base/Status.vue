<script>
  export default {
    functional: true,
    name: "Status",
    props: {
      type: {
        type: String,
        default: "primary"
      }
    },
    render(h, { props }) {
      return h("span", {
        class: ["w-status", props.type]
      });
    }
  };
</script>

<style lang="stylus" scoped>
  @import '../../styles/_variables.styl';

  .w-status {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    background-color: #42b983;
    border-radius: 50%;

    for theme in $themes {
      &.{theme} {
        background-color: $themes[theme];
      }
    }
  }
</style>
