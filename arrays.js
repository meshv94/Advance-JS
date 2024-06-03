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

