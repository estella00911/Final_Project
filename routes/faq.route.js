
const faqController = require("../controllers/faq.controller.js");
const {checkToken} = require("../middlewares/auth.js");
var express =  require('express');  
var router = express.Router();  

// FAQ
router.post("/", faqController.createFaq);
router.get("/", faqController.getFaq);
router.get("/:id", faqController.getFaqById);
router.put("/:id", faqController.updateFaq);
router.delete("/:id", faqController.deleteFaq);


module.exports = router;