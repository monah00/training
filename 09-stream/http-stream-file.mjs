import http from "http";
import fs from "fs";
const filePath = "./09-stream/files/index.html";

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        const readStream = fs.createReadStream(filePath);

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        readStream.pipe(res);
    }
    if (req.url === "/no-stream" && req.method === "GET") {
        fs.readFile(filePath, (error, data) => {
            if (error) {
                res.statusCode = 500;
                res.end("Error reading file on server");
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        });
    }
});

server.listen(5000, () => console.log("PORT 5000"));
