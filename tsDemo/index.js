// const calcPerson = (mat, k) => {
//     const arr = []
//     mat.map((i, index) => {
//         const ll = i.filter(item => item === 1)
//         arr.push({
//             key: index,
//             value: ll.length
//         })
//     })
//     const newList = arr.sort(function (a, b) {
//         return a.value - b.value
//     }).slice(0, k)
//     console.log('arr', arr, newList);
//     const keys = newList.map(i => i.key);


//     return keys
// }

// const source =
//     [[1, 0, 0, 0],
//     [1, 1, 1, 1],
//     [1, 0, 0, 0],
//     [1, 0, 0, 0]]
// calcPerson(source, 2)

const power = (str) => {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            

        }

    }
    // for (let i = 0; i < str.length; i++) {
    //     const k = str[i]
    //     if (obj[k]) {
    //         obj[k]++
    //     } else {
    //         obj[k] = 1
    //     }
    // }

    // let num = 0
    // let val;
    // for (const key in obj) {
    //     if (obj[key] > num) {
    //         num = obj[key]
    //         val = key
    //     }
    // }
    // console.log('obj', obj);
    // console.log('val', val);
    // console.log('num', num);
    // return val

}
console.log('power("leetcode")', power("leetcode"));
