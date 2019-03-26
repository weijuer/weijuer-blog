<template>
    <div :class="['w-panel', panelStyle]">
        <div class="w-panel__head">
            <slot name="header"/>
        </div>
        <div class="w-panel__body">
            <slot/>
        </div>
        <!-- <div class="w-panel__footer">
            <slot name="footer"/>
        </div> -->
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
            padding: 0 2.2rem;
            height: 5.1rem;
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
                        font-size: 1.3rem;
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
            padding: 2.2rem 2.2rem;
            color: #575962;
        }
    }
</style>

