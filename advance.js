function info(n ,m){
    console.log(this , n , m)
}

const user1 = {
    name : "meshv",
    age : 20,
    getInfo : info
}

const user2 = {
    name : "hetsi",
    age : 18
}

user1.getInfo(5 , 10)
user1.getInfo.call(user2, "hello" , 10)

