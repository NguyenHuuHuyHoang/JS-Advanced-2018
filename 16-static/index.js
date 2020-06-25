class Foo {
    static someMethod() {
        console.log('some method');
    }

    anotherMethod() {
        console.log('another method');
    }
}

// Foo.someMethod(); //Không cần phải tạo object vẫn sử dụng được.
let foo = new Foo();
foo.anotherMethod(); //Lỗi bắt buộc phải new rồi mới được sử dụng