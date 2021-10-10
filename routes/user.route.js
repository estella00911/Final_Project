
const userController = require("../controllers/user.controller.js");
const {checkToken} = require("../middlewares/auth.js");
var express =  require('express');  
var router = express.Router();  

// Create a new Tutorial
router.post("/register", userController.createUser);
router.get("/me", userController.getUserMe);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/login", userController.login);


module.exports = router;