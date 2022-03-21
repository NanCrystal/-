/**
 * 20
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) return false;
  const list = [['[', ']'], ['(', ')'], ['{', '}']];
  for (const key of s) {
    console.log('key', key);

  }
};

isValid('([{}](()))')
/**
 * 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log('[i, j]', [i, j]);

        return [i, j]
      }

    }

  }

};
twoSum([2, 7, 11, 15], 9)
/**
 * 540
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        res.push(nums[i])
      }
    }

  }
  const list = nums.filter(i => !res.includes(i))
  return list[0]


};
singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])

/**
 * 3
 * @param {string} s
 * @return {number}
 * 输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  const len = s.length;
  let rk = -1, ans = 0;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      // console.log('del-before', i, set);
      set.delete(s.charAt(i - 1))
      // console.log('del-after', i, set);

    }
    while (rk + 1 < len && !set.has(s.charAt(rk + 1))) {
      set.add(s.charAt(rk + 1));
      // console.log(new Date().getTime(), set);
      ++rk;
    }
    ans = Math.max(ans, rk - i + 1);
    // console.log(`ans${i} = ${ans}`, `rk=${rk}`);
  }
  // console.log('result', ans);
  return ans

};
lengthOfLongestSubstring("pwwkew")

/**
 * 1984
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 输入：nums = [90], k = 1
 * 输出：0
 * 
 */
var minimumDifference = function (nums, k) {
  const res = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < len - k + 1; i++) {
    ans = Math.min(ans, nums[i + k - 1] - nums[i])
    console.log('ans1', ans);
  }

  console.log('ans2', ans);
  return ans
};
minimumDifference([9, 4, 1, 7], 3)
/**
 * @param {number[]} nums
 * @return {number}
 * 输入：nums = [1,1,2]
输出：2, nums = [1,2]
 */
var removeDuplicates = function (nums) {

};
removeDuplicates([1, 1, 2])

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 输入：nums = [1,2,2,1], k = 1
 * 输出：4
 * 
 */
const countKDifference = function (nums, k) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        total += 1
      }
    }
  }

  console.log('total', total);
  return total;
};
countKDifference([1, 2, 2, 1], 1)

/**
*0 - false 1 - true
*输入：nums = [1,3]
*输出：6
 *
 *1^3 
 *                            
 *  // for (let i = 0; i < nums.length; i++) {
  //   const element = parseInt(nums[i]).toString(2);
  //   console.log('element', element);

  // } 
 * @param {*} nums
 */
const subsetXORSum = function (nums) {
  let res = [], subsets = [];
  let len = nums.length;
  function dfs(index) {
    // console.log('index1', index);
    // console.log('subsets1', subsets);
    res.push(subsets.slice());
    for (let i = index; i < len; i++) {
      // console.log('index2', index);
      subsets.push(nums[i]);
      // console.log('subsets2', subsets);
      dfs(i + 1);
      subsets.pop();
    }
  }
  dfs(0);
  // console.log('res', res);

};
subsetXORSum([1, 3])

/**
 *  数组串联
 * 输入：nums = [1,2,1]
 * 输出：[1,2,1,1,2,1]
 * 解释：数组 ans 按下述方式形成：
 * - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * - ans = [1,2,1,1,2,1] 
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i]);
  }
  const list = nums.concat(res)
  console.log('list', list);

  return list
};
getConcatenation([1, 2, 1])
/**
 *输入：nums = [0,2,1,5,3,4]
*输出：[0,1,2,4,5,3]
*解释：数组 ans 构建如下：
*ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
 *
 * @param {*} nums
 */
const buildArray = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i];
    result.push(nums[index])
  }
  console.log('result', result);
};
buildArray([0, 2, 1, 5, 3, 4])
/**
 *两数 之和
 *输入：l1 = [2,4,3], l2 = [5,6,4]
 *输出：[7,0,8]
 * @param {*} l1
 * @param {*} l2
 */
const addTowNumberNew = function (l1, l2) {
  let head = null, tail = null;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
}
/**
 *两数 之和
 *输入：l1 = [2,4,3], l2 = [5,6,4]
 *输出：[7,0,8]
 * @param {*} l1
 * @param {*} l2
 */
const addTowNumber = function (l1, l2) {
  if (!l1.length || !l2.length) return;
  const sumL1 = Number((l1.reverse()).join(''));
  const sumL2 = Number((l2.reverse()).join(''));
  const sum = ((String((sumL1 + sumL2))).split('')).reverse();
  return sum.map((i) => Number(i));
}
console.log('addTowNumber', addTowNumber([2, 4, 3], [5, 6, 4]))
/**
 *快捷键 ctrl + alt + D
 *一维数组动态和
 * @param {*} nums [1, 2, 3, 4]
 * @return {*} [1, 3, 6, 10]
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
const fragment = document.createDocumentFragment();
// window.alert(numIdenticalPairs([1, 2, 3, 4, 3, 3, 2, 1]));
for (let i = 0; i < 2; i++) {
  const element = document.createElement("li");
  element.innerHTML = "hello" + i;
  fragment.appendChild(element);
}
document.getElementById("app").appendChild(fragment);
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

class Person {
  constructor() {
    this.name = "aa";
    this.age = 12;
  }
  say() {
    console.log("person say");
  }
}
// let p1 = new Person();
// console.log("p1", p1);
// p1.say();

// 子继承父
class Teacher extends Person {
  // 复杂写法
  // constructor() {
  //   super()
  //   this.score = 100;
  //   this.name = "bb";
  // }
  // 简单写法
  name = "bb";
  score = 100;
  hello() {
    console.log("hello");
  }
}
const t = new Teacher();
console.log("t", t);
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
function axios(params) {
  let p1 = new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:8080/index.json",
      dataType: "json",
      jsonp: "callback()",
      jsonpCallback: "message",
      success: function (res) {
        console.log("结果1", res);
        resolve(res);
      },
      error: function () {
        console.log("fail");
      },
    });
  });
  return p1;
}

// let p1 = axios();
// p1.then((res) => {
//   console.log("axios", res);
// });

const handleChange = async () => {
  // axios().then((res)=>{
  //   console.log('click res',res);
  // })
  let res = await axios(); //等待成功才执行下面
  console.log("click await ", res);
};
// async 是 Generator + yield 函数的语法糖
function* helloGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}

const hw = helloGenerator();
console.log("hw", hw);
console.log("hello", hw.next());
console.log("world", hw.next());
console.log("ending", hw.next());
console.log("ending1", hw.next());

// ---------------------------------async await---------------------------------

// ---------------------------------es6 装饰器的作用---------------------------------


// ---------------------------------es6 装饰器的作用---------------------------------

// ---------------------------------构造函数---------------------------------
// ---------------------------------构造函数---------------------------------

// ------------------------------------------面试--------------------------------------------
/**
 *reduce--promise
 *
 * @param {*} arr
 * @param {*} input
 * @return {*} 
 */
function runPromise(arr, input) {
  return arr.reduce((acc, cur) => acc.then(cur), Promise.resolve(input));
}

function f1(a) {
  return new Promise((resolve, reject) =>
    resolve(a * 5)
  )
}
function f2(a) {
  return new Promise((resolve, reject) =>
    resolve(a - 12)
  )
}
function f3(a) {
  return a / 2
}
function f4(a) {
  return new Promise((resolve, reject) =>
    resolve(a + 10)
  )
}
const funs = [f1, f2, f3, f4]
runPromise(funs, 10).then(console.log)