// How to run programm: node createfile.mjs <filename> <linesQty>
import fs from "fs";
import path from "path";

if (!process.argv[2] || !process.argv[3]) {
    //проверка на наличие аргументов
    console.log("need 2 arg");
    process.exit(0); //Выход из программы
}

const fileName = process.argv[2]; // передаем аргументы
const linesQty = parseInt(process.argv[3]); //если parseInt не смог конвертировать, тип будет - NaN

if (isNaN(linesQty)) {
    // проверка является ли linesQty числом
    console.log("line qty must be a number");
    process.exit(0);
}

const writeStream = fs.createWriteStream(path.join(".//files", fileName));
//создаем поток записи в файл

for (let i = 1; i <= linesQty; i++) {
    writeStream.write(`This is a line number ${i} in the file\n`);
}
//в цикле записываем в файл строки
writeStream.end(() => {
    console.log(`${fileName} was created!`);
});
