const comments = require("./data");
const fs = require("fs");
const qs = require("querystring");

function getHome(req, res) {
    fs.readFile("08-http\\files\\comment-form.html", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("server err while louding html");
        } else {
            res.statuscode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
}
function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>hello</h1>");
    res.write("</div></body></html>");
    res.end();
}

function getTEXT(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("this is plain text");
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(comments));
}

function handleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>sry... page not found <-_-></h1>");
}
function postComment(req, res) {
    res.setHeader("Content-type", "application/json");
    //processing data form
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        let body = ""; //client sending
        //listener for data
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                const comment = qs.parse(body);
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write("<h1>");
                res.write("Comment data was received");
                res.write("</h1>");
                res.write("<a href='/'>Submit one more comment</a>");
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end("invalid form data");
            }
        });
        //processing json
    } else if (req.headers["content-type"] === "application/json") {
        let commentJSON = "";
        req.on("data", (chunk) => (commentJSON += chunk));
        req.on("end", () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end("Comment data was received");
            } catch (error) {
                res.statusCode = 400;
                res.end("invalid json");
            }
        });
        //not valid client request
    } else {
        res.statusCode = 400;
        res.end("data must be in the json format or as form");
    }
}
module.exports = {
    getHTML,
    getTEXT,
    getComments,
    handleNotFound,
    postComment,
    getHome,
};
