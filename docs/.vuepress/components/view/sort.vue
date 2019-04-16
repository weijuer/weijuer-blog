<template>
  <div class="sort-container">
    <Panel type="bordered">
      <h3 slot="header">Sort Examples</h3>

      <div class="sort-container">
        <div class="btn-group">
          <a @click="start" href="javascript:;">go</a>
          <a @click="shuffle" href="javascript:;">shuffle</a>
        </div>

        <transition-group class="methods-nav" name="methods-nav" tag="ul">
          <li v-for="(method, index) in methods" :key="method" class="methods-nav-item">
            <a class="nav-btn" @click="toggleMethods(method)" href="javascript:;">{{ method }}</a>
          </li>
        </transition-group>

        <transition-group class="numbers" name="numbers" tag="ul">
          <li
            v-for="(number, index) in sortedNumbers"
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
        numbers: Array.from({ length: 10 }, (number, index) => ++index)
      };
    },
    computed: {
      sortedNumbers() {
        let that = this;
        return this.numbers.map((item, index, arr)=>{
          for (let j = 0; j < arr.length - 1 - index; j++) {
            if (arr[j] > arr[j + 1]) {
              that.swap(arr, j, j + 1);
            }
          }
          // log
          console.log(`sorting numbers: [${this.numbers}]`);
        })
      }
    },
    updated() {
      this.log();
    },
    methods: {
      start() {
        // 当前排序方法
        let methodName = `${this.activeMethod}Sort`;
        this[methodName]();
      },
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
      bubbleSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
              this.swap(arr, j, j + 1);
            }
          }
          // log
          console.log(`sorting numbers: [${this.numbers}]`);
        }

        return arr;
      },
      swap(arr, n, m) {
        // 解构赋值
        [arr[n], arr[m]] = [arr[m], arr[n]];
      },
      log() {
        console.log(
          "%c %s",
          "color: #3eaf7c;",
          `---[log] numbers: [${this.numbers}]---`
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
</style>
