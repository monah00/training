const fs = require("fs");
const stream = require("stream");

const upperCaseStream = new stream.Transform({
    transform(chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase();
        callback(null, upperCased);
    },
});
process.stdin.pipe(upperCaseStream).pipe(process.stdout);

// const writeStream = fs.createWriteStream("./f.txt");
// const readStream = fs.createReadStream("./f_copy.txt", "utf-8");

// readStream.pipe(writeStream);
// writeStream.on("close", () => console.log("file copy complited"));

// writeStream.write("This is data");
// writeStream.end();

// readStream.on("data", (datachunk) => console.log(datachunk));
// readStream.on("end", () => console.log("file reading complite"));
// readStream.on("error", (err) => console.log(err));
