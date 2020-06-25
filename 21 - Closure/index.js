//closure // Trong js có garbage collector sẽ check những biến nào không được dùng nữa thì sẽ xóa ra khỏi bộ nhớ.

function sum(a, b) {
  const c = a + b;
  return function () {
    console.log(c);
  };
}

sum(1, 2)();//Do sum trả về một hàm thì chúng ta phải thực thi nó bằng ()

function debug(name) {
    return function(str) {
        console.log(`[${name}] ${str}`);
    }
}

const log = debug('Mouse'); //Trả về 1 mouse
log('Error happened'); //[Mouse] Error happened , khi log được gọi sẽ sử dụng string truyền vào ở str và name ở debug truyền vào name.