function sum(a, b) {
  return a + b;
}

sum(1, 2);

var sum2 = function (a, b) {
  return a + b;
};

sum2(3, 2);

sum3 = (a, b) => {
  return a + b;
};

sum4 = (a, b) => a + b;

square = (x) => x * x;

square2 = x => x * x; //Nếu có một tham số thì không cần phải viết ()

var doSomething = () => Date.now(); //Không có tham số thì bắt buộ phải có ()

var arr = [1, 2, 3];

arr.map(function () {
  return x * x;
});

arr.map((x) => x * x);
