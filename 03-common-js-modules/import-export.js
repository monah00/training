const { myName } = require("./my-modules/multiple-exports");
const myFriendsName = "Alice";
module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
