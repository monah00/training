import fs, { read, writeSync } from "fs";
import path from "path"; //для метода Join

//создаем пути к папкам
const sourseDir = ".//09-stream//files";
const destinationDir = ".//09-stream//copied-files";

// выход из программы если указанной папки нет
if (!fs.existsSync(sourseDir)) {
    console.warn(`sourse dir ${sourseDir} doesn't exist`);
    console.log("exiting");
    process.exit(0);
}

// удаление дериктории, если она уже создана
if (fs.existsSync(destinationDir)) {
    fs.rmSync(destinationDir, { recursive: true });
    console.log("destination Dir removed");
}

//Создание дериктории
fs.mkdirSync(destinationDir);

//Чтение всех файлов в дериктории
fs.readdir(sourseDir, (err, fileNames) => {
    //если ошибка
    if (err) {
        console.log(err);
        process.exit(1);
    }
    //В цикле для массива названий файлов
    fileNames.forEach((fileName, index) => {
        // Создаем пути используя join объеденяя названия файлов с папками
        const sourseFilePath = path.join(sourseDir, fileName);
        const destinationFilePath = path.join(destinationDir, `${index + 1}. ${fileName}`);

        // Создаем потоки
        const readFileStream = fs.createReadStream(sourseFilePath);
        const writeFileStream = fs.createWriteStream(destinationFilePath);

        // Перенаправляем потоки
        readFileStream.pipe(writeFileStream);

        // Реагируем на событие окончания записи в файл
        writeFileStream.on("finish", () => {
            console.log(`file ${fileName} was copied`);
        });
    });
});
