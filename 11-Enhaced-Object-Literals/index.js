// apply
// call: func.call (this, param1, param2,....);
// apply: func.apply(this, [param1, param2,....]);

function Mouse(name) {
    this.name = name;
}

Mouse.prototype.run = function() {
    console.log(`${this.name} is running`);
}

const mickey = new Mouse('Mickey');
mickey.run();

// object literals
const cat = {
    name: 'Cat',
    run: function() {
        console.log(`${this.name} is running`);
    }
};

cat.run();


//enhanced object litterals
const name = 'Tom';
const Tom = {
    // name: name //Nếu key và biên chứa value trùng tên thì có thể sử dụng 1 key vừa là biến truyền giá trị vào object vừa là key
    name,
    run() {
        console.log(`${this.name} is running`); 
    }
}

Tom.run();
