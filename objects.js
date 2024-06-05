// objects are reference type

// const person = {
//     name: "Meshv",
//     age: 21,
//     "person hobbies": ["sleep, eat, code"]
// }

// console.log(typeof person)

// console.log(person)

// add properties in object
// person.phone = "94001311113"
// person["gender"] = "male"
// console.log(person)

// access data
// console.log(person.name)
// console.log(person["age"])

// console.log(personperson hobbies) // gives error
// console.log(person["person hobbies"]) // access this way

// let key = "email"
// person.key = "meshbvb@ndjej.com" // it will add key as key
// console.log(person)

// person[key] = "meshv@meshv.com"
// console.log(person)


// ------- iterate in objects
// for-in loop
// for(let key in person){
//     console.log(key)
//     console.log(person.key) // gives undefined every time
//     console.log(person[key])
// }

// using Object.keys
// let key = Object.keys(person)
// console.log(key) // gives array of keys of person object

// for(let item of Object.keys(person)){
//     console.log(item, " : ", person[item])
// }

// for(let item of person){
//     console.log(item) // error person is not iterable
// }


// let key1 = "name"
// let key2 = "age"

// let val1 = "meshv"
// let val2 = 21

// const obj = {
//     key1 : val1,
//     key2 : val2
// }
// console.log(obj) // { key1: 'meshv', key2: 21 }

// const obj2 = {
//     [key1] : val1,
//     [key2] : val2
// }
// console.log(obj2) // { name: 'meshv', age: 21 }

// const obj3 = {}
// obj3[key1] = val1
// obj3[key2] = val2
// console.log(obj3) // { name: 'meshv', age: 21 }



// -- spread operator

// const obj1 = {
//     k1 : "v1",
//     k2 : "v2"
// }

// const obj2 = {
//     k3 : "v3",
//     k4 : "v4"
// }

// let obj3 = { ...obj1, ...obj2}
// console.log(obj3)

// let str = "abcd"
// let obj4 = {...str}
// console.log(obj4) // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

// let arr = ["a1", "a2", "a3"]
// let obj5 = {...arr}
// console.log(obj5) // { '0': 'a1', '1': 'a2', '2': 'a3' }

// object destructuring

// const data = {
//     fName : "Meshv",
//     lName : "Patel"
// }

// const {fName , lName} = data;
// console.log("fname" , fName , " lname ", lName)

// const {fName: aa , lName: bb} = data;
// console.log("aa" , aa , " bb ", bb)


// const users = [
//     {
//         name:"meshv",
//         age:20,
//         gender:"male"
//     },
//     {
//         name:"mihir",
//         age:21,
//         gender:"male"
//     },
//     {
//         name:"taksh",
//         age:22,
//         gender:"male"
//     },
// ]

// const [user1 , user2, user3] = users;
// console.log(user1 , user2, user3) // { name: 'meshv', age: 20, gender: 'male' } { name: 'mihir', age: 21, gender: 'male' } { name: 'taksh', age: 22, gender: 'male' }


// const [{name: a1} , , {age: a2}] = users
// console.log(a1 , a2) // meshv 22


const user = {
    name : "meshv",
    age : 20
}

console.log(user?.name)
console.log(user?.email)
console.log(user?.email?.id)
// console.log(person?.name)
console.log(this)