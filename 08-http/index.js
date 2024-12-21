const http = require("http");
const {
    getHTML,
    getComments,
    getTEXT,
    handleNotFound,
    postComment,
    getHome,
} = require("./handlers");

const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        return getHome(req, res);
    }
    if (req.url === "/html ") {
        return getHTML(req, res);
    }
    if (req.url == "/text") {
        return getTEXT(req, res);
    }
    if (req.method === "GET" && req.url === "/comments") {
        return getComments(req, res);
    }
    if (req.method === "POST" && req.url === "/comments") {
        return postComment(req, res);
    }
    handleNotFound(req, res);
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
