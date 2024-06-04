// array reference type

// let fruit = ["apple", "mango", "graph"]
// console.log(fruit)
// console.log(typeof fruit)
// console.log(Array.isArray(fruit))


// array methods

// Push -- add at last index
// fruit.push("meshv") 
// console.log(fruit)

// Pop -- remove at last index
// fruit.pop()
// console.log(fruit)

// unshift -- add at first index
// fruit.unshift("first")
// console.log(fruit)

// shift -- remove at first index
// fruit.shift()
// console.log(fruit)

// shift - unshift are slower then push - pop


// how to clone array 
// let arr1 = [1,2,3,4]
// let arr2 = [4,5,6]

// let arr3 = arr1.slice(0)
// console.log(arr3)

// let arr4 = [].concat(arr2)
// console.log(arr4)

// let arr5 = [...arr2]
// console.log(arr5)

// const arr1 = [1,2,3];
// console.log(arr1)
// arr1[1] = 10
// console.log(arr1)

// for-of loops in arrays
// let arr1 = [1,2,3,4]
// for(let item of arr1){
//     console.log(item)
// }

// for-in loop
// let arr1 = ["a", "b", "c", "d"]
// for(let i in arr1){
//     console.log(i)  // output - 0 1 2 3
//     console.log(arr1[i])
// }


// array destructuring 
// let arr1 = ["item1", "item2", "item3"]
// let [var1 , var2, var3, var4] = arr1;
// console.log(var1 , var2, var3, var4) // var4 = undefined 

// let[a1, ,a2] = arr1;
// console.log(a1,a2) // item1, item3

// let arr1 = [1,2,3,4,5,6]
// let [var1, var2, ...myNewVarArrr] = arr1;
// console.log(var1, var2, myNewVarArrr)




// let arr = ["123456789"]
// let newArr = [..."12345678"]
// console.log(newArr)

// let name = "meshv patel"
// let letters = [...name]
// console.log(letters)


// split - string into array
// join - array into string

// let name = 'my name is meshv patel'

// let words = name.split(" ")
// console.log(words)
// let abc = words.join(" ")
// console.log("abc", abc)

// let capWord  = words.map((item)=>{
//     return item.charAt(0).toUpperCase() + item.slice(1)
// })

// let newStr = capWord.join(' ')
// console.log(newStr)


//----------    map and foreach
// const arr = [1,2,3,4,5]

// const fech = arr.forEach((item,index) => {
//     return item
// })
// console.log(fech)  // undefined

// const mpp = arr.map((item,index) => {
//     return item
// })
// console.log(mpp) // [ 1, 2, 3, 4, 5 ]

// ----------- filter method
// const arr = [1,2,3,4,5];

// const abc = arr.filter((item,index) => {
//     // console.log(item, index)
//     return true
// })
// console.log(abc)

// ---------- reduce method
const arrr1 = [
    {product:"mobile" , price: 500},
    {product:"laptop" , price: 300},
    {product:"tv" , price: 200},
]

const totalPrice = arrr1.reduce((accmulator, currentValue) => {
    return currentValue.price + accmulator
} , 0) // here 0 is initial value for accumulator
console.log(totalPrice) // 1000


// ----------- sort method - sort based on ascii values
const arr = [10,3,52,25]
arr.sort()
console.log(arr) // [ 10, 25, 3, 52 ]

const arr2 = ["def" , "abc", "abb", "acb"]
arr2.sort()
console.log(arr2) // [ 'abb', 'abc', 'acb', 'def' ]

const arr3 = ["a", "B" , "d" ,"E"]
arr3.sort()
console.log(arr3) // [ 'B', 'E', 'a', 'd' ]

const arr4 = [ true , false , true , 20 , "hello"]
arr4.sort()
console.log(arr4) // [ 20, false, 'hello', true, true ]

// sort integers using sort method
const arr5 = [5000 , 2 , 350 , 10, 25];
arr5.sort((a,b) => {
    return a-b
})
console.log(arr5) // [ 2, 10, 25, 350, 5000 ]


// find method
const users = [
    { userId: 1, userName: "Meshv"},
    { userId: 2, userName: "Mihir"},
    { userId: 3, userName: "Hetsi"},
    { userId: 4, userName: "Mit"},
]

const myUser = users.find((item) => {
    return item.userName === "Hetsi"
})
console.log(myUser) // { userId: 3, userName: 'Hetsi' }  return only first object it finds