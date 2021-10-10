
const userController = require("../controllers/user.controller.js");
const {checkToken} = require("../middlewares/auth.js");
var express =  require('express');  
var router = express.Router();  

// Create a new Tutorial
router.post("/register",checkToken, userController.createUser);
router.get("/me",checkToken, userController.getUserMe);
router.get("/",checkToken, userController.getUsers);
router.get("/:id",checkToken, userController.getUserById);
router.put("/:id",checkToken, userController.updateUser);
router.delete("/:id",checkToken, userController.deleteUser);
router.post("/login", userController.login);


module.exports = router;
