const fs = require("fs/promises");
const path = "./first.txt";

async function appendIntoTheFile(filePath) {
    await fs.writeFile(filePath, "first line");
    console.log("writeFile done");

    await fs.appendFile(filePath, "\nsecond line");
    console.log("appendFile done");

    await fs.rename(filePath, "./renamed.txt");
    console.log("rename done");
}

appendIntoTheFile(path).catch((err) => {
    console.log(err);
});
