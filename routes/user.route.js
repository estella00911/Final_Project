
const userController = require("../controllers/user.controller.js");
const {checkToken} = require("../middlewares/auth.js");
var express =  require('express');  
var router = express.Router();  

// Create a new Tutorial

// router.post("/register", userController.createUser);
<<<<<<< HEAD
// router.get("/me",checkToken, userController.getUserMe);
=======
// router.post("/login", userController.login);

router.get("/me",checkToken, userController.getUserMe);
>>>>>>> cf4cefd98c56aa7e726be38bfbac131314c26ac8
router.get("/",checkToken, userController.getUsers);
router.get("/:id",checkToken, userController.getUserById);
router.put("/:id",checkToken, userController.updateUser);
router.delete("/:id",checkToken, userController.deleteUser);
<<<<<<< HEAD
// router.post("/login", userController.login);
=======
>>>>>>> cf4cefd98c56aa7e726be38bfbac131314c26ac8

module.exports = router;
