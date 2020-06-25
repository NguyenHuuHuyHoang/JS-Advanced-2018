const a = [1,2,3];
const b = [0, ...a,4];
console.log(b);


//spread an object
const obj1 = {
    a:1,
    b:2,
    c:3
};

let obj2 = {};

for (let key in obj1) {
    obj2[key] = obj1[key];// Trường hợp obj1 có 1 key là obj nếu sử dụng phương pháp này (shallow-cloning) thì obj2 và obj1 sẽ cùng trỏ vào 1 biến key, nếu thay đổi key obj thì sẽ thay đổi giá trị key obj trên cả 2 obj2 và obj1 vì vậy phải sử dụng kỹ thuật deep clone
}
obj2.b = 5;
console.log({obj1, obj2});


let obj3 = {...obj2, z:3000};
console.log(obj3);