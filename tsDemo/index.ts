const calcPerson = (mat: any, k: any) => {
    let arr = []
    mat.map((i) => {
        let ll = i.filter(item => item === 1)
        arr.push(ll.length)
    })
    console.log('arr', arr);

}

const data: any =
    [[1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]]

calcPerson(data, 2)