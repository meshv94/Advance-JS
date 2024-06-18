// ---------- find occurence of each element in array --------------- //


let arr = [1,"a","b",1,"b","a","a",1,4,3,1,"b","a"]

let obj = {}

for(let element of arr){
    if(obj[element]){
        obj[element]++
    }else{
        obj[element] = 1
    }
}
console.log(obj)