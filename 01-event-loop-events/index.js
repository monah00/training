const { time } = require("console");
const fs = require("fs");
const { normalize } = require("path");
const dns = require("dns");

function timestamp() {
  return performance.now().toFixed(2);
}
console.log("start");

setTimeout(() => console.log("timeout-1", timestamp()), 0);
setTimeout(() => {
  process.nextTick(() => console.log("next-tick-2", timestamp()));
  console.log("timeout-2", timestamp());
}, 100);

fs.writeFile("./test.txt", "hello monk", () =>
  console.log("file written", timestamp())
);

Promise.resolve().then(() => console.log("promise-1", timestamp()));

process.nextTick(() => console.log("next tick-1", timestamp()));

setImmediate(() => console.log("setImmediat-1", timestamp()));

dns.lookup("localhost", (err, address, family) => {
  console.log("DNS-1 localhost", address, timestamp());
  Promise.resolve().then(() => console.log("promise-2", timestamp()));
  process.nextTick(() => console.log("next-tick-3", timestamp()));
});

console.log("end");
