const arr = [];
console.log(`현재 arr : ${arr}`)

setTimeout(() => {
    console.log("데이터를 1개 추가합니다. push()")
    arr.push("오은하");
    console.log(`현재 arr : ${arr}`)
}, 1000);

setTimeout(() => {
    console.log("데이터를 1개 추가합니다. push()")
    arr.push("정예림");
    console.log(`현재 arr : ${arr}`)
}, 2000);

setTimeout(() => {
    console.log("데이터를 1개 추가합니다. push()")
    arr.push("홍민기");
    console.log(`현재 arr : ${arr}`)
}, 3000);
