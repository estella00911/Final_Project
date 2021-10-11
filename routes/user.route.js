
const userController = require("../controllers/user.controller.js");
const {checkToken} = require("../middlewares/auth.js");
var express =  require('express');  
var router = express.Router();  

// Create a new Tutorial
router.post("/register", userController.createUser);
router.post("/login", userController.login);
>>>>>>> fad9e51741efe71327848a2ef78bcb5efb615e4a
router.get("/me",checkToken, userController.getUserMe);
>>>>>>> cf4cefd98c56aa7e726be38bfbac131314c26ac8
router.get("/",checkToken, userController.getUsers);
router.get("/:id",checkToken, userController.getUserById);
router.put("/:id",checkToken, userController.updateUser);
router.delete("/:id",checkToken, userController.deleteUser);
module.exports = router;
