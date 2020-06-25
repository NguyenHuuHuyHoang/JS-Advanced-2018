// const arr = [10, 20, 30, 40, 50];

// const [a, , , d, e] = arr;

// const [f, ...g] = arr;

// console.log(a, d); //a = 10, d = 40....

// console.log(f, g);//10 [ 20, 30, 40, 50 ]

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// const {a: x, b:y, c:z} = obj;
// const { a: a, b: b, c: c } = obj;
const{a,b,c} = obj;

console.log(a, b, c);
