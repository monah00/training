setTimeout(() => {
    console.log("timeout");
}, 0);

function fib(n) {
    return new Promise((resolve, reject) => {
        if (n in [0, 1]) {
            return resolve(n);
        }
        setImmediate(() => {
            Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) => {
                resolve(fib1 + fib2);
            });
        });
    });
}

fib(10).then((res) => {
    console.log(res);
});
