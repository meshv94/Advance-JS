function info(n, m) {
    console.log(this, n, m)
}

// const user1 = {
//     name: "meshv",
//     age: 20,
//     // getInfo : info
// }

// const user2 = {
//     name: "hetsi",
//     age: 18
// }

// user1.getInfo(5 , 10)
// user1.getInfo.call(user2, "hello" , 10)
// user1.info()
// info.call(user1)




// -------- PROTO VS PROTOTYPE --------------

// ----------- PROTO ----------------
// proto is reference 
// used to achive inheritance in objects

const deMethods = {
    sing: function () { console.log("la la ala") },
    is18 : function(age){ return age>18}
}

function createUsers1(name , age){
    const obj = Object.create(deMethods)
    obj.name = name;
    obj.age = age
    return obj;
}

const user1 = createUsers1("meshv" , 18)
console.log(user1)
console.log(user1.is18())


// ------------- PROTOTYPE ---------------
// prototype is free space that each function has in which function can store prperties and methods of its own



function createUsers(name , age){
    const obj = Object.create(createUsers.prototype)
    obj.name = name;
    obj.age = age
    return obj;
}
createUsers.prototype.work = " object create krna"
createUsers.prototype.info = function(){
    console.log(this.name) 
}

const user2 = createUsers("meshv" , 18)
console.log(user1)
console.log(user2)
console.log(user1.info())

