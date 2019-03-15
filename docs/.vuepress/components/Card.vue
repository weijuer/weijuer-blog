<template>
    <div :class="['w-card', type]" :style="">
        <div class="w-card__body">
            <slot />
        </div>
    </div>
</template>
<script>
    export default {
        name: "Card",
        props: ["type", "color"]
    };
</script>

<style lang="less">
    @theme-color: #2ecc71;

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

