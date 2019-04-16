/**
 * 替换数组位置
 * @param {原数组} arr 
 * @param {待替换位置} n 
 * @param {被代替换位置} m 
 */
function swap(arr, n, m) {
    [arr[n], arr[m]] = [arr[m], arr[n]];
}

export default {
    data() {
        return {
            message: 'Mixin'
        }
    },
    methods: {

    }
}