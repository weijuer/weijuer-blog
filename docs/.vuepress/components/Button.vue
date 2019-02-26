<template>
    <button :class="['w-btn', btnStyle]">{{ btnText }}</button>
</template>
<script>
    export default {
        name: "Button",
        data: function() {
            return {
                text: "默认按钮"
            };
        },
        props: ["btnStyle", "btnText"],
        methods: {}
    };
</script>

<style lang="sass">
    $theme-color: #F90
    .w-btn
        line-height: 1.499
        display: inline-block
        font-weight: 400
        text-align: center
        touch-action: manipulation
        cursor: pointer
        background-image: none
        border: 1px solid transparent
        white-space: nowrap
        text-transform: capitalize
        padding: 0 15px
        font-size: 14px
        border-radius: 4px
        height: 32px
        user-select: none
        transition: all .3s cubic-bezier(.645,.045,.355,1)
        position: relative
        box-shadow: 0 2px 0 rgba(0,0,0,.015)
        color: rgba(0,0,0,.65)
        background-color: #fff
        border-color: #d9d9d9
        &.w-btn-primary 
            background: #36bafb
            border-color: #36bafb
        &.w-btn-dashed
            color: rgba(0,0,0,.65)
            background-color: #fff
            border-color: #d9d9d9
            border-style: dashed
        &.w-btn-danger
            color: #f5222d
            background-color: #f5f5f5
            border-color: #d9d9d9  
        &.w-btn-red
            background: red
</style>

