<template>
    <div :class="['w-panel', panelStyle]">
        <div class="w-panel-header">
            <slot name="header" />
        </div>
        <div class="w-panel-body">
            <slot />
        </div>
        <div class="w-panel-footer">
            <slot name="footer" />
        </div>
    </div>
</template>
<script>
    export default {
        name: "Panel",
        data: function() {
            return {
                text: "默认按钮"
            };
        },
        props: ["panelStyle"],
        methods: {}
    };
</script>

<style lang="sass">
    $theme-color: #F90
    .w-panel
        font-size: 14px
        font-variant: tabular-nums
        line-height: 1.5
        color: rgba(0,0,0,.65)
        box-sizing: border-box
        margin: 0
        padding: 0
        list-style: none
        background: #fff
        border-radius: 2px
        position: relative
        transition: all .3s
</style>

