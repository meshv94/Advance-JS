
// const myVar = 512;

// function app(){

//     // const myVar = 1

//     function made(){
//         // const myVar = 200
//         console.log("made", myVar)
//     }

//     made()
//     console.log("app", myVar)
// }

// app()
// console.log("out", myVar)

// --------- Default parameters
// function addNum(a = 1 , b = 1){
//     return a+b
// }

// console.log(addNum(2,5)); // 7
// console.log(addNum()) // 2



// ------ rest parameters
// function addNum(a,b,...c){
//     console.log(a) // 1
//     console.log(b) // 2
//     console.log(c) // [3,4,5,6,7]
// }

// addNum(1,2,3,4,5,6,7);


// function sumOfN(...n){
//     console.log(n)
//     console.log(typeof n)

//     let total = 0;
//     for(let num of n){
//         total += num
//     }
//     console.log("total is : ", total)
// }
// sumOfN(1);
// sumOfN(1,2,3,4,5,6,7);


// ------ callback function
// function myFunc2(){
//     console.log("hello")
// }

// function myFunc(n){
//     console.log(typeof n)
// }
// myFunc(myFunc)



// ---- function return function
// function myFunc(){
//     function hello(){ console.log("hello")}
//     return hello;
// }

// let abc = myFunc()
// abc()


