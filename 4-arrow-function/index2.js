var a = {
    name : 'AAA',
    run : function() {
        var run2 = function () {
            console.log(this.name);
        }
        run2();
    }
};

a.run(); //Undefined vì hàm run2 chỉ là một function, không có context truyền vào, nó sẽ lấy giá trị global context = undefined do nó không có thằng name nào cả. Để khắc phục thì mình có thể sử dụng method .bind

var a = {
    name : 'AAA',
    run : function() {
        // var that = this; Một số thư viện cũ sẽ sử dụng và truyền that vào.
        var run2 = function () {
            console.log(this.name);
        }.bind(this);
        // run2.bind(this)(); //hoặc có thể gắn bind ở lúc gọi function run2
        run2();
    }
};

a.run()

//Hoặc sử dụng arrow function.

var a = {
    name : 'AAA',
    run : function() {
        var run2 =  () => {
            console.log(this.name); //this này là this của cái hàm mà nó nằm trong
        }
        run2();
    }
};

a.run()

var a = {
  foo: "bar",
  run: function () {
    setTimeout(function () {
      console.log(this.foo);
    }, 2000);
  },
};

a.run();



var a = {
    foo: "bar",
    run: function () {
      setTimeout(() => {
        console.log(this.foo);
      }, 2000);
    },
  };
  
  a.run();