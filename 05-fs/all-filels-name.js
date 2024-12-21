const fs = require("fs/promises");
const folderPath = "D:\\downloads\\node.js-coorse";
const filePath = "./names.txt";

async function fetchFileNames(path) {
    const files = await fs.readdir(path);
    await fs.writeFile(filePath, files.join("\n"));
    console.log("done");
}

fetchFileNames(folderPath).catch((err) => console.log(err));
