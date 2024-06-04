// sets
// sets are iterable 
// can not access element through index
// it has own methods
// order is not gaurented
// duplicate elements are not allowed


const numbers = new Set([11,2])
numbers.add(1)
numbers.add(2)
numbers.add("hello")
numbers.add(true)
console.log(numbers)

const arr = ['item1', 'item2']
numbers.add(arr)
numbers.add(arr)
console.log(numbers)

numbers.add(['p1', 'p2'])
numbers.add(['p1', 'p2'])
console.log(numbers)

numbers.add({id:1, name:"meshv"})
numbers.add({id:1, name:"meshv"})
console.log(numbers)

for(let items of numbers){
    console.log("items : ", items)
}

// find unique elemnts in array
const arr1 = [1,3,4,5,3,5,7,2,1,4]
const uniqueNumbers = new Set(arr1)
console.log(uniqueNumbers)


if(numbers.has("hello")){
    console.log(" hello  is available in set")
}