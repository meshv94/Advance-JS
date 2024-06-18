// reverse number ---
// armstrong number check ---


let n = 123;
let n1 = n;
let num = 0

while(n1>0){
    let last = n1%10;
    n1 = Math.floor(n1/10);
    num = (num*10)+last
}
