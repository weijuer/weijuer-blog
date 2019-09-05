<template>
    <table :class="['w-table', type]">
        <thead>
            <tr class="w-table__tr">
                <slot name="table-head"/>
            </tr>
        </thead>
        <tbody>
            <tr class="w-table__tr"></tr>
        </tbody>
        <tfoot>
            
        </tfoot>
    </table>
</template>
<script>
    export default {
        name: "Table",
        data() {
            return {
                isAllChecked: false,
                checkedCode: []
            }
        },
        props: ["type", "color"],
        methods: {
            // 用户单选
            singleChecked() {
                //判断每一个CheckBox是否选中，全选中让全选按钮选中
                if (this.personList.length == this.checkedCode.length) {
                    this.isAllChecked = true;
                } else {
                    // 只要有一个checkbox不选中，让全选按钮不选中
                    this.isAllChecked = false;
                }
            },

            // 用户全选
            chooseAll(e) {
                var that = this;
                if (that.checkedCode.length !== 0) {
                    that.checkedCode = [];
                }
                if (that.isAllChecked) {
                    that.personList.forEach(function(singlePersonList) {
                        that.checkedCode.push(singlePersonList.code);
                    }, that);
                } else {
                    that.checkedCode = [];
                }
            }
        }
    };
</script>

<style lang="stylus">
    $theme-color = #2ecc71;

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

