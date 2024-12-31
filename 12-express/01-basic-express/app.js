const express = require("express");
const router = require("./routs/index");

const app = express();
app.use(router);

app.listen(5000, () => console.log("server was started on 5000"));
