// reverse array or string without extra space and pre defined method --//


let str = "meshv";
let arr = str.split('')

let f = 0;
let l = arr.length-1;

for(let i=0; i<arr.length/2; i++){
    let temp = arr[f]
    arr[f] = arr[l]
    arr[l] = temp
    f++
    l--
}

str = arr.join('').toString()
console.log(str)