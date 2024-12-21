import { EventEmitter } from "events";

const myEmitter = new EventEmitter();
const timeoutLisenerFn = (seconds) => {
    console.log(`Timeout event in ${seconds} seconds`);
};

myEmitter.on("timeout", () => timeoutLisenerFn(1));
myEmitter.on("timeout", () => timeoutLisenerFn(2));

myEmitter.emit("timeout");

myEmitter.setMaxListeners(25);
