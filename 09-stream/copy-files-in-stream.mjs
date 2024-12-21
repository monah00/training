import fs from "fs";

//создаем пути к файлам
const fileName = ".//files//fifth.txt";
const copiedFileName = ".//files//fifth-copy.txt";

//создаем потоки
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

//перенаправляем поток
readStream.pipe(writeStream);

//узнаем когда заканчивается копирование
readStream.on("end", () => console.log("readStream ended")); // 1 после этого события больше файлы не копируются
writeStream.on("finish", () => console.log("file was copied")); // 2 Возникает сразу после end
writeStream.on("close", () => console.log("writeStream ended")); // 3 Возникает после finish
