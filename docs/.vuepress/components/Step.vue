<template>
    <div :class="['w-step', type]" :style>
        <ul class="w-step__bar">
            <li class="active">
                <a href>$</a>
            </li>
        </ul>
        <div class="w-step__body">
            <div class="w-step__pane">
                <slot/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Step",
        props: ["type", "color"]
    };
</script>

<style lang="stylus">
    $theme-color = #2ecc71;

    /*STEP*/
    .am-step {
        position: relative;
    }

    .am-step .am-step-content {
        border: 1px solid #eee;
        padding: 1rem;
    }

    .am-step .am-step-content .am-step-pane {
        display: none;
        transition: all 3ms 3ms ease-in-out;
    }

    .am-step .am-step-content .am-step-pane.active {
        display: block;
    }

    .am-step .am-step-bar {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        counter-reset: number;
    }

    .am-step .am-step-bar > li {
        display: inline-block;
        margin-left: 70px;
        position: relative;
    }

    .am-step .am-step-bar > li:first-child {
        margin-left: 0;
    }

    .am-step .am-step-bar > li:before {
        counter-increment: number;
        content: counter(number);
        margin-right: 6px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #666;
        color: inherit;
        border-radius: 100%;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        font-weight: bold;
    }

    .am-step .am-step-bar > li.active:before {
        border: 2px solid #5eb95e;
        color: #5eb95e;
    }

    .am-step .am-step-bar > li:after {
        content: "";
        display: inline-block;
        position: absolute;
        left: 100%;
        top: 50%;
        width: 60px;
        height: 1px;
        background: #666;
        transform: translate(10%, -50%);
    }

    .am-step .am-step-bar > li:last-child:after {
        display: none;
    }

    .am-step .am-step-bar > li > a {
        color: #666;
        text-decoration: none;
    }

    .am-step .am-step-bar > li.active > a {
        color: #5eb95e;
    }

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

