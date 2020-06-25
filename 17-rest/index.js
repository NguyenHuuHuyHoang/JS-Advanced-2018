function log(a) {
    console.log(a);
}

log(1);

sum = (...numbs) => {
    return numbs.reduce((a,b) => a + b);
}

console.log(sum(1,2,3,4,5));

concat = (separator, ...strings) => strings.join(separator);

console.log(concat('.', 'a', 'b', 'c'));

