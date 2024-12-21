setTimeout(() => {
    console.log("timeout");
}, 0);

const cache = new Map();
function fib(n) {
    return new Promise((resolve, reject) => {
        if (n in [0, 1]) {
            return resolve(n);
        }
        if (cache.has(n)) {
            return resolve(cache.get(n));
        }
        setImmediate(() => {
            Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) => {
                cache.set(n, fib1 + fib2);
                resolve(fib1 + fib2);
            });
        });
    });
}

fib(40).then((res) => {
    console.log(res);
});
