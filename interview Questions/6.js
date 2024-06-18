//--------------- fibbonaci series -------------- //

let arr = [0,1];
let n = 10
for(let i=2; i<n; i++){
    let result = arr[i-1] + arr[i-2]
    arr.push(result)
}
console.log(arr)