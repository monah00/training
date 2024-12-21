import { season, temperature } from "./named-exports.mjs";
import { isRunning, humidite } from "./inline-exports.mjs";
import getDatas from "./default-export.mjs";
import DEFAULT_SERVER, {
    USERNAME as MY_USERNAME,
    PASSWORD,
} from "./mixed-exports.mjs";

console.log(season);
console.log(temperature);
console.log(isRunning);
console.log(humidite);

getDatas("https://jsonplaceholder.typicode.com/posts/1")
    .then((post) => {
        console.log(post);
    })
    .catch((err) => {
        console.error(err);
    });

console.log(DEFAULT_SERVER);
console.log(MY_USERNAME);
