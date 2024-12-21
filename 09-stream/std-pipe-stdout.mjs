import stream from "stream";
import fs from "fs";

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        cb(null, upperCased);
    },
});
const reverseString = new stream.Transform({
    transform(chunk, encoding, cb) {
        const arrayOfChars = chunk.toString().split("");
        const lastChar = arrayOfChars.pop();
        const reversedString = arrayOfChars.reverse().concat(lastChar).join("");
        cb(null, reversedString);
    },
});

process.stdin.pipe(reverseString).pipe(upperCaseStream).pipe(process.stdout);

// const filePath = ".//files//stdin-dump.txt";
// const writeStream = fs.createWriteStream(filePath);

// process.stdin.pipe(writeStream);
