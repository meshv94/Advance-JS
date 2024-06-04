// maps are iterable
// store key value pair
// keys are of any data type

const users = new Map()
users.set("name" , "meshv")
users.set(12 , "12")
users.set([1,2,3] , [1,2,3]),
console.log(users)

console.log(users.get('name'))

for(let items of users){
    // console.log(items)
}

console.log(users.keys())