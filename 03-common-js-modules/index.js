const exportedObject = require("./my-modules/multiple-exports");
const { myName, myFriendsName } = require("./import-export");
const { myHobbies } = require("./my-modules/multiple-exports");

console.log(exportedObject);
myHobbies.push("climbing");
