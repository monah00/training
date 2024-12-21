let isRunning = true;

setTimeout(() => (isRunning = false), 100);
process.nextTick(() => console.log("next tick"));

function setImmediatPromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log("while loop is running...");
        await setImmediatPromise();
    }
}

whileLoop().then(() => console.log("while loop ended"));
