
const userController = require("../controllers/user.controller.js");
const {checkToken} = require("../middlewares/auth.js");
var express =  require('express');  
var router = express.Router();  

// Create a new Tutorial
router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser)
router.post("/login", userController.login)
// // Retrieve all Tutorials
// router.get("/", userController.findAll);

// // Retrieve all published Tutorials
// router.get("/published", userController.findAllPublished);

// // Retrieve a single Tutorial with id
// router.get("/:id", userController.findOne);

// // Update a Tutorial with id
// router.put("/:id", userController.update);

// // Delete a Tutorial with id
// router.delete("/:id", userController.delete);

// // Delete all Tutorials
// router.delete("/", tutorials.deleteAll);

module.exports = router;