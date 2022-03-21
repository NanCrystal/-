/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  for (let i = 0; i < x.length; i++) {
    const e = x[i];
    

  }
};
isPalindrome(123)
/**
 *快捷键 ctrl + alt + D
 *一维数组动态和
 * @param {*} nums [1, 2, 3, 4]
 * @return {*} [1, 3, 6, 10]
 */
/**快捷键 ctrl + alt + t
 * @description: 
 * @param {*} nums
 * @return {*}
 */
const runningSum = function (nums) {
  const arr = [];
  nums.reduce((prev, curr) => {
    arr.push(prev + curr);
    return prev + curr;
  }, 0);
  return arr;
};
const runningSum2 = function (nums) {
  nums.reduce((pre, cur, i, arr) => {
    arr[i] = pre + cur;
    return pre + cur;
  }, 0);
  return nums;
};

/**
 *
 *左旋转字符串
 * @param {*} s
 * 输入: s = "abcdefg" n = 2
 * @param {*} n
 * 输出: "cdefgab"
 */
const reverseLeftWords = function (s, n) {
  const newList = (s + "").split("");
  const newCode = newList.splice(0, n);
  const arr = newList.concat(newCode);
  const list = arr.reduce((pre, cur) => {
    return pre + cur;
  });
  return list;
};
const reverseLeftWords2 = function (s, n) {
  const newList = s.slice(0, n);
  s = s.slice(n, s.length);
  return s + newList;
};

/**
 *
 *
 * @param {*} jewels
 * @param {*} stones
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 */
var numJewelsInStones = function (jewels, stones) {
  const jj = jewels.split("");
  const ss = stones.split("");

  const arr = [];
  ss.map((item) => {
    const index = jj.findIndex((i) => i === item);
    if (index !== -1) {
      arr.push(item);
    }
  });
  return arr.length;
};

var numJewelsInStones2 = function (J, S) {
  let count = 0;
  for (let i = 0; i < J.length; i++) {
    count += S.split(J[i]).length - 1;
  }
  return count;
};

/**
 *
 *
 * @param {*} accounts
 *
 * 输入：accounts = [[1,2,3],[3,2,1]]
 * 输出：6
 */
var maximumWealth = function (accounts) {
  const arr = [];
  accounts.map((item) => {
    const sum = item.reduce((pre, cur) => {
      return pre + cur;
    }, 0);
    arr.push(sum);
  });
  return Math.max(...arr);
};

/**
 *
 *
 * @param {*} nums
 * 输入：nums = [1,2,3,1,1,3]
 * 输出：4
 */
var numIdenticalPairs = function (nums) {
  const arr = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] === nums[j]) {
        arr.push(`(${i},${j})`);
      }
    }
  }
  return arr.length;
};

// ------------------------------------------面试--------------------------------------------

// ---------------------------------解决回流--------------------------------
// const fragment = document.createDocumentFragment();
// // window.alert(numIdenticalPairs([1, 2, 3, 4, 3, 3, 2, 1]));
// for (let i = 0; i < 2; i++) {
//   const element = document.createElement("li");
//   element.innerHTML = "hello" + i;
//   fragment.appendChild(element);
// }
// document.getElementById("app").appendChild(fragment);
// const handleChange = () => {
//   runningSum([1, 2, 3, 4]);
//   window.alert(runningSum([1, 2, 3, 4]));
// };
// ---------------------------------解决回流---------------------------------

// ---------------------------------构造函数---------------------------------
// function Person() {}
// let p = new Person();

// function Person() {
//   this.name = "aa";
//   this.age = 12;
//   this.say = function () {
//     console.log("person say");
//   };
// }
// let p = new Person();
// console.log("p", p);
// p.say();

// class Person {
//   constructor() {
//     this.name = "aa";
//     this.age = 12;
//   }
//   say() {
//     console.log("person say");
//   }
// }
// let p1 = new Person();
// console.log("p1", p1);
// p1.say();

// 子继承父
// class Teacher extends Person {
//   // 复杂写法
//   // constructor() {
//   //   super()
//   //   this.score = 100;
//   //   this.name = "bb";
//   // }
//   // 简单写法
//   name = "bb";
//   score = 100;
//   hello() {
//     console.log("hello");
//   }
// }
// const t = new Teacher();
// console.log("t", t);
// ---------------------------------构造函数---------------------------------

// ---------------------------------async await---------------------------------
// console.log("1");

// $.ajax({
//   type: "get",
//   url: "http://127.0.0.1:8080/index.json",
//   dataType: "json",
//   jsonp: "callback()",
//   jsonpCallback: "message",
//   success: function (res) {
//     console.log("结果1", res);
//     $.ajax({
//       type: "get",
//       url: "http://127.0.0.1:8080/index1.json",
//       dataType: "json",
//       jsonp: "callback()",
//       jsonpCallback: "message",
//       success: function (res) {
//         console.log("结果2", res);
//       },
//       error: function () {
//         console.log("fail");
//       },
//     });
//   },
//   error: function () {
//     console.log("fail");
//   },
// });
// console.log("3");
//  1，3，结果1，结果2

// let pp = Promise(function (resolve, reject) {});
// pp.then(
//   function () {}, //resolve 函数
//   function () {} //reject 函数
// );

// $.ajax({
//   type: "get",
//   url: "http://127.0.0.1:8080/index.json",
//   dataType: "json",
//   jsonp: "callback()",
//   jsonpCallback: "message",
//   success: function (res) {
//     console.log("结果2", res);
//   },
//   error: function () {
//     console.log("fail");
//   },
// });

// let pp = new Promise(function (resolve, reject) {
//   resolve(11);
//   reject("error");
// });
// pp.then(
//   function (res) {
//     console.log("success", res);
//   },
//   function (res) {
//     console.log("error", res);
//   }
// );

// let p1 = new Promise((resolve, reject) => {
//   $.ajax({
//     type: "get",
//     url: "http://127.0.0.1:8080/index.json",
//     dataType: "json",
//     jsonp: "callback()",
//     jsonpCallback: "message",
//     success: function (res) {
//       console.log("结果1", res);
//       resolve(res);
//     },
//     error: function () {
//       console.log("fail");
//     },
//   });
// });
// p1.then((res) => {
//   console.log("res", res);
//   let p2 = new Promise((resolve, reject) => {
//     $.ajax({
//       type: "get",
//       url: "http://127.0.0.1:8080/index1.json",
//       dataType: "json",
//       jsonp: "callback()",
//       jsonpCallback: "message",
//       success: function (res) {
//         console.log("结果2", res);
//         resolve(res);
//       },
//       error: function () {
//         console.log("fail");
//       },
//     });
//   });
//   return p2;
// }).then((res1) => {
//   console.log("res1", res1);
// });

// 封装ajax
// function axios() {
//   let p1 = new Promise((resolve, reject) => {
//     $.ajax({
//       type: "get",
//       url: "http://127.0.0.1:8080/index.json",
//       dataType: "json",
//       jsonp: "callback()",
//       jsonpCallback: "message",
//       success: function (res) {
//         console.log("结果1", res);
//         resolve(res);
//       },
//       error: function () {
//         console.log("fail");
//       },
//     });
//   });
//   return p1;
// }

// let p1 = axios();
// p1.then((res) => {
//   console.log("axios", res);
// });

// const handleChange = async () => {
//   // axios().then((res)=>{
//   //   console.log('click res',res);
//   // })
//   let res = await axios(); //等待成功才执行下面
//   console.log("click await ", res);
// };
// async 是 Generator + yield 函数的语法糖
// function* helloGenerator() {
//   yield "hello";
//   yield "world";
//   return "ending";
// }

// const hw = helloGenerator();
// console.log("hw", hw);
// console.log("hello", hw.next());
// console.log("world", hw.next());
// console.log("ending", hw.next());
// console.log("ending1", hw.next());

// ---------------------------------async await---------------------------------

// ---------------------------------es6 装饰器的作用---------------------------------
// 示例在vue  project项目中
// ---------------------------------es6 装饰器的作用---------------------------------

// ---------------------------------事件循环---------------------------------

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 0);
// console.log("3");

// 结果： 1 3 2
// 定时器  异步

// ---------------------------------

// new Promise 立即执行
// console.log("1");
// new Promise((res, rej) => {
//   console.log("2");
// });
// console.log("3");
// 结果： 1 2 3

// ------------------------------------

// new Promise立即执行，但是then是异步的
// console.log("1");

// const p1 = new Promise((res, rej) => {
//   console.log("2");
//   res();
// });
// p1.then((res) => {
//   console.log("3");
// });
// console.log("4");
// 结果： 1 2 4 3

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 0);
// new Promise((res, rej) => {
//   console.log("3");
//   res();
// }).then(() => {
//   console.log("4");
// });
// // 结果： 1 3 4 2

// console.log("1");
// setTimeout(() => {
//   console.log("2");
//   new Promise((resolve) => {
//     console.log("3");
//     resolve();
//   }).then(() => {
//     console.log("4");
//   });
// }, 0);
// new Promise((resolve) => {
//   console.log("5");
//   resolve();
// }).then(() => {
//   console.log("6");
// });
// setTimeout(() => {
//   console.log("7");
//   new Promise((resolve) => {
//     console.log("8");
//     resolve();
//   }).then(() => {
//     console.log("9");
//   });
//   console.log("10");
// }, 0);
// console.log("11");

// 结果：1 5 11 6 2 3 4 7 8 10 9
// ---------------------------------事件循环---------------------------------
// ---------------------------------websocket---------------------------------
// $(function () {
//   let websocket;
//   const i = 0;
//   if (window.WebSocket) {
//     websocket = new WebSocket("ws://127.0.0.1:8080");
//     // 建立链接
//     websocket.onopen = function (event) {
//       debugger;
//       $(".show-area").append(
//         `<p class="big-info" message><i class="info-item">${i}</i></p>`
//       );
//     };
//     // 接收到消息
//     websocket.onmessage = function (event) {
//       const msg = JSON.parse(event.data);
//       const type = msg.type;
//       const uname = msg.uname;
//       i++;
//       if (type === "userMsg") {
//         $(".show-area").append(
//           `<p class="big-success" message><i class="success-item">${i}</i></p>`
//         );
//       }
//       if (type === "system") {
//         $(".show-area").append(
//           `<p class="big-warning" message><i class="warning-item">${i}</i></p>`
//         );
//       }
//     };
//     // 链接出错
//     websocket.onerror = function (event) {
//       i++;
//       console.log("error");
//       debugger;
//       $(".show-area").append(
//         `<p class="big-danger" message><i class="danger-item">${i}</i></p>`
//       );
//       window.location.hash = `#+${i}`;
//     };
//     // 连接关闭
//     websocket.onclose = function (event) {
//       i++;
//       console.log("close");
//       $(".show-area").append(
//         `<p class="big-warning" message><i class="warning-item">${i}</i></p>`
//       );
//       window.location.hash = `#+${i}`;
//     };
//   } else {
//     alert("浏览器步支持");
//   }
// });

// ---------------------------------websocket---------------------------------
// ---------------------------------渲染list---------------------------------
// const ul = document.createElement("ul");
// let allKeys = [];
// let ul = document.getElementById("wrap");
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < 1000; i++) {
//   const li = document.createElement("li");
//   li.innerHTML = "列表" + i;
//   allKeys.push(i);
//   fragment.appendChild(li);
// }
// ul.appendChild(fragment);

// function getExpireKeys() {
//   let keys = [];
//   while (keys.length < 100) {
//     let randomKey = Math.floor(Math.random() * 1000);
//     console.log("randomKey2", randomKey);
//     if (keys.indexOf(randomKey) === -1) {
//       keys.push(randomKey);
//     } else {
//       continue;
//     }
//   }

//   return keys;
// }
// document.getElementById("expire2").onclick = function () {
//   let expireKeys = getExpireKeys();
//   const item = [];
//   for (let i = 0; i < allKeys.length; i++) {
//     item.push(
//       `<li>列表${allKeys[i]} ${
//         expireKeys.indexOf(allKeys[i]) !== -1 ? "已过期" : ""
//       }</li>`
//     );
//     ul.innerHTML = item.join("");
//   }
// };
// ---------------------------------渲染list---------------------------------
// ---------------------------------全屏---------------------------------


// var ww = document.documentElement.clientWidth;
// var hh = document.documentElement.clientHeight;
// console.log("ww:", ww, "hh:", hh);
// function requestFullScreen() {
//   var el = document.documentElement;
//   var rfs =
//     el.requestFullScreen ||
//     el.webkitRequestFullScreen ||
//     el.mozRequestFullScreen ||
//     el.msRequestFullScreen; //定义不同浏览器的全屏API //执行全屏
//   if (typeof rfs != "undefined" && rfs) {
//     rfs.call(el);
//   } else if (typeof window.ActiveXObject != "undefined") {
//     var wscript = new ActiveXObject("WScript.Shell");
//     if (wscript != null) {
//       wscript.SendKeys("{F11}");
//     }
//   }
// }
// setTimeout(() => {
//   requestFullScreen();
//   setTimeout(() => {
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;
//     console.log("w:", w, "h:", h);
//   }, 100);
// }, 500);

// alert(w + " " + h);
// ---------------------------------全屏---------------------------------

// ---------------------------------原型链---------------------------------
// function Person(params) {

// }
// const person = new Person();
// Person.prototype.name = 'protoXX'
// person.name = 'pp';
// const person1 = new Person()
// const person2 = new Person()
// console.log('person', person.name); //pp
// console.log('person1', person1.name); //protoXX
// console.log('person2', person2.name); //protoXX
// console.log('Person:person.__proto__ === Person.prototype', Person.prototype, person.__proto__);
// console.log('Person:Person === Person.prototype.constructor', Person, Person.prototype.constructor);
// console.log('Object.getPrototypeOf === Person.prototype ', Object.getPrototypeOf(person));


// function Student(params) {

// }
// Student.prototype.name = 'prototypeXX'
// const student = new Student();
// student.name = 'XX';
// console.log('student name', student.name); //XX
// delete student.name;
// console.log('student name2', student.name); //prototypeXX

// 当读取实例的属性，没有就找与对象关联的原型中的属性，如果还找不到原型的原型，就一直倒最顶层 
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ test: 1 })
//     resolve({ test: 2 })
//     reject({ test: 2 })
//   }, 1000)
// }).then((data) => {
//   console.log('result1', data)
// }, (data1) => {
//   console.log('result2', data1)
// }).then((data) => {
//   console.log('result3', data)
// })

// ---------------------------------原型链---------------------------------



// ---------------------------------JS执行---------------------------------
// print()
// console.log('str',str);
// var str = 'hello';
// function name() {
//   console.log('str1',str);
// }
// --------------------------------- new Set 去重---------------------------------

/**
 * @description: 
 * @param {*} nums
 * @return {*}
 */
var newSetArray = function (nums) {
  const newArr = Array.from(new Set(nums))
  console.log('newSetArray', newArr);
};
newSetArray([1, 2, 1, true, true, false, NaN, 'NaN', {}, {}, null, undefined, [], [], null, undefined]) //不能去重空对象和空数组,可以去重null和undefined
// --------------------------------- new Set 去重---------------------------------

// --------------------------------- for + splice 去重---------------------------------
/**
 * @description: 
 * @param {*} array
 * @return {*}
 */
var forSpliceArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  console.log('forSpliceArray', array);
  return array
}
forSpliceArray([1, 2, 1, true, true, false, NaN, 'NaN', {}, {}, null, undefined, null, undefined, [], []]) //不能去重空对象和空数组，可以去重null，undefined全部过滤
// --------------------------------- for + splice 去重---------------------------------


// --------------------------------- indexOf 去重---------------------------------
/**
 * @description: 
 * @param {*} arr
 * @return {*}
 */
var indexOfArray = (arr) => {
  var list = [];
  for (let i = 0; i < arr.length; i++) {
    if (list.indexOf(arr[i]) === -1) {
      list.push(arr[i]);
    }
  }
  console.log('indexOfArray', list);
  return list;
}
indexOfArray([1, 2, 1, true, true, false, NaN, 'NaN', {}, {}, null, undefined, null, undefined, [], []])//不能去重空对象和空数组 
// --------------------------------- indexOf 去重---------------------------------


// --------------------------------- sort() 去重---------------------------------
/**
 * @description: 
 * @param {*} arr
 * @return {*}
 */
var sortArray = (arr) => {
  arr = arr.sort()
  var list = []
  console.log('sortArray', arr); // [],[],1,1,2,{},{},null,null,undefined,undefined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      list.push(arr[i])
    }
  }
  console.log('sortArray', list);
  return list;
}
sortArray([1, 2, 1, true, true, false, NaN, 'NaN', {}, {}, null, undefined, null, undefined, [], []])//不能去重空对象和空数组 

// --------------------------------- sort() 去重---------------------------------

// --------------------------------- includes 去重---------------------------------
/**
 * @description: 
 * @param {*} arr
 * @return {*}
 */
var includesArray = (arr) => {
  var list = []

  for (let i = 0; i < arr.length; i++) {
    if (!list.includes(arr[i])) {
      list.push(arr[i])
    }
  }
  console.log('includesArray', list);
  return list;
}
includesArray([1, 2, 1, true, true, false, NaN, 'NaN', {}, {}, null, undefined, null, undefined, [], []])//不能去重空对象和空数组 

// --------------------------------- includes 去重---------------------------------

// --------------------------------- hasOwnProperty 去重---------------------------------
/**
 * @description: 
 * @param {*} arr
 * @return {*} 
 */
var hasOwnPropertyArray = (arr) => {
  const obj = {};
  return arr.filter((i) => {
    return obj.hasOwnProperty(typeof i + i) ? false : (obj[typeof i + i] = true)
  })

}
console.log('hasOwnPropertyArray', hasOwnPropertyArray([1, 2, 1, true, true, false, NaN, 'NaN', {}, {}, null, undefined, null, undefined, [], []]));
//不能去重空对象和空数组 

// --------------------------------- hasOwnProperty 去重---------------------------------


// --------------------------------- reduce includes 去重---------------------------------
var reduceArray = (arr) => {
  return arr.reduce((pre, cur) => pre.includes(cur) ? pre : [...pre, cur], [])
}
console.log('reduceArray', reduceArray([1, 2, 1, true, true, false, NaN, 'NaN', {}, {}, null, undefined, null, undefined, [], []]));

// --------------------------------- reduce includes 去重---------------------------------

// ---------------------------------   ---------------------------------
function debounce(func, wait) {
  let timeout;
  return () => {
    const _this = this;
    const args = arguments;
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(_this, args)
    }, wait);
  }
}
function handle() {
  document.getElementById('click').onclick = function () {
    console.log('1111111');

  }
}
debounce(handle(), 2000)
// ---------------------------------   ---------------------------------
// var fn = (function () {
//   var foo = 0;
//   function fn() { }
//   fn.prototype.bar = function bar() {
//     console.log('foo', foo);

//     return foo;
//   }
//   return fn
// }())
function get(source, path, defaultValue = undefined) {
  const paths = path.replace(/\[(\d+)\]/g, ".$1").splice
}
// ---------------------------------   ---------------------------------
// ---------------------------------   ---------------------------------
// ---------------------------------   ---------------------------------
// ---------------------------------   ---------------------------------

// ---------------------------------JS执行---------------------------------




// ------------------------------------------面试--------------------------------------------
