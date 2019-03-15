<template>
    <table :class="['w-table', type]">
        <thead>
            <tr class="w-table__tr">
                <slot name="table-head" />
            </tr>
        </thead>
        <tbody>
            <tr class="w-table__tr">
                
            </tr>
        </tbody>
        <tfoot>

        </tfoot>
    </table>
</template>
<script>
    export default {
        name: "Table",
        props: ["type", "color"]
    };
</script>

<style lang="less">
    @theme-color: #2ecc71;

    .w-table {
        margin-bottom: 2.2rem;
        box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
        background-color: #fff;

        .w-table__body {
            padding: 2.2rem 2.2rem;
            color: #575962;
        }
    }
</style>

