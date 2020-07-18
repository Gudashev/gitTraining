const arr = new Array(10)

function newArr(arr) {
    return arr.fill('').map( el => el + 'hello')
}


console.log(newArr(arr))

