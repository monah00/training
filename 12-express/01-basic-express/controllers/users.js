//users
const getUsersHandler = (req, res) => {
    res.send("Get user route");
};
const postUsersHandler = (req, res) => {
    res.send("Post user route");
};
const getSingleUserHandler = (req, res) => {
    res.send(`Get user route. UserID ${req.params.userId}`);
};

module.exports = {
    getUsersHandler,
    postUsersHandler,
    getSingleUserHandler,
};
