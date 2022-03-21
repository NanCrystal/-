<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button id="expire1" v-click="setExpireKeys">设置过期</button>
    <div v-for="(item, index) in allKeys" :key="index">
      {{ item.value }} {{ item.expire ? "已过期" : "" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      allKeys: [],
      expireKeys: [],
    };
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.allKeys.push({ value: i, expire: false });
    }
  },
  methods: {
    setExpireKeys() {
      let _this = this;
      let keys = _this.getExpireKeys();
      console.log("keys", keys);
      for (let i = 0; i < _this.allKeys.length; i++) {
        if (keys.indexOf(_this.allKeys[i].value) !== -1) {
          _this.allKeys[i].expire = true;
        }
      }
    },
    getExpireKeys() {
      let keys = [];
      while (keys.length < 10) {
        let randomKey = Math.floor(Math.random() * 100);
        if (keys.indexOf(randomKey) !== -1) {
          keys.push(randomKey);
        } else {
          continue;
        }
      }
      return keys;
    },
  },
};

// -------------装饰器函数的复用-------
// function testable(target) {
//   console.log("testable11111", target);
//   target.isOk = true;
// }
// @testable
// class MyTestableClass {}
// console.log("MyTestableClass", MyTestableClass.isOk);

// @testable
// class Person {}
// console.log("Person", Person.isOk);
// -------------装饰器函数的复用-------

// -------------装饰器函数 -------
// function testable(isTestable) {
//   return function (target, ...rest) {
//     console.log("参数", rest);
//     target.isTestable = isTestable;
//   };
// }
// @testable(true)
// class MyTestableClass {}
// console.log("MyTestableClass", MyTestableClass.isTestable);

function readOnly(target, name, desc) {
  console.log("target", target);
  console.log("name", name);
  console.log("desc", desc);
  desc.writable = false; //不可改
  return desc;
}
class Person {
  @readOnly
  abc() {
    console.log("abc");
  }

  @readOnly
  xx = 123;
}
const p1 = new Person();
console.log("Person", p1);
console.log("Person", p1.xx);
// p1.xx = 456 //报错
// console.log('Person',p1);
document.cookie = "age=18";
// -------------装饰器函数 -------
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
