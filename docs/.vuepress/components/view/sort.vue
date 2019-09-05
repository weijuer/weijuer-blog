<template>
  <div class="sort-container">
    <Panel type="bordered">
      <h3 slot="header">Sort Examples</h3>

      <div class="sort-container">
        <div class="btn-group">
          <a @click="start" href="javascript:;">go</a>
          <a @click="shuffle" href="javascript:;">shuffle</a>
          <a @click="add" href="javascript:;">add</a>
          <a @click="remove" href="javascript:;">remove</a>
        </div>

        <transition-group class="methods-nav" name="methods-nav" tag="ul">
          <li v-for="(method, index) in methods" :key="method" class="methods-nav-item">
            <a class="nav-btn" @click="toggleMethods(method)" href="javascript:;">{{ method }}</a>
          </li>
        </transition-group>

        <transition-group class="numbers" name="numbers" tag="ul">
          <li
            v-for="(number, index) in numbers"
            :key="`number-${index}`"
            class="numbers-item"
            :style="numberStyle(number)"
          >{{ number }}</li>
        </transition-group>
      </div>
    </Panel>
  </div>
</template>

<script>
  import { shuffle } from "lodash";
  import Panel from "../base/Panel";

  export default {
    name: "v-sort",
    components: {
      Panel
    },
    data() {
      return {
        activeMethod: "bubble",
        methods: ["bubble", "selection"],
        numbers: Array.from({ length: 10 }, (number, index) => ++index),
        nextNum: 11
      };
    },
    computed: {
      sortedNumbers() {
        // 当前排序方法
        return this[`${this.activeMethod}Sort`](this.numbers);
      }
    },
    updated() {
      this.log();
    },
    methods: {
      /**
       * 随机位置
       */
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length);
      },
      /**
       * 添加
       */
      add() {
        this.numbers.splice(this.randomIndex(), 0, this.nextNum++);
      },
      /**
       * 删除
       */
      remove() {
        this.numbers.splice(this.randomIndex(), 1);
      },
      start() {
        // 当前排序方法
        this[`${this.activeMethod}Sort`]();
      },
      /**
       * 混序数组
       */
      shuffle: function() {
        this.numbers = shuffle(this.numbers);
      },
      toggleMethods(name) {
        this.activeMethod = name;
      },
      numberStyle(number) {
        return {
          height: `${number * 8}px`
        };
      },
      bubbleSort() {
        for (let i = 0; i < this.numbers.length - 1; i++) {
          for (let j = 0; j < this.numbers.length - 1 - i; j++) {
            if (this.numbers[j] > this.numbers[j + 1]) {
              setInterval(() => {
                this.swap3(j, j + 1);
                console.log(this.numbers[j]);
              }, 500);
            }
          }
          // log
          console.log(`sorting numbers: [${this.numbers}]`);
        }
      },
      swap(array, index1, index2) {
        // splice方法
        array.splice(index2, 1, ...array.splice(index1, 1, array[index2]));
      },
      swap2(arr, index1, index2) {
        // 解构赋值
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
      },
      swap3(index1, index2) {
        // splice方法
        this.numbers.splice(
          index2,
          1,
          ...this.numbers.splice(index1, 1, this.numbers[index2])
        );
      },
      log() {
        console.log(
          "%c %s",
          "color: #3eaf7c;",
          `---[log] ${this.activeMethod} numbers: [${this.numbers}]---`
        );
      }
    }
  };
</script>

<style lang="stylus" scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sort-container {
    position: relative;

    .methods-nav {
      margin-bottom: 0.5rem;

      .methods-nav-item {
        display: inline-block;
        margin: 0 1rem;

        .nav-btn {
          &.active {
            text-decoration: underline;
          }
        }
      }
    }

    .numbers {
      display: flex;
      width: 100%;
      height: 300px;
      background: #eee;
      border-radius: 4px;
      justify-content: space-evenly;
      align-items: flex-end;

      .numbers-item {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-weight: bold;
        line-height: 1.5;
        background: #add6e6;

        &.active {
          background: #0d8000;
        }

        &.finished {
          background: #fda800;
        }
      }
    }
  }

  .numbers-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }

  .numbers-enter, .numbers-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .numbers-leave-active {
    position: absolute;
  }

  .numbers-move {
    transition: transform 1s;
  }
</style>
