const express = require("express");
const router = express.Router();
const RemittanceMongoDBController = require("../controllers/RemittanceController");



//get request or read

router.get("/", RemittanceMongoDBController.getAllRemittances );

// Get request parametarized

router.get("/:id", RemittanceMongoDBController.getRemittances);

// Post Request

router.post("/", RemittanceMongoDBController.createRemittance);

//update


router.put("/",  RemittanceMongoDBController.updateRemittance);

// delete

router.delete("/",RemittanceMongoDBController.deleteRemittance);

module.exports = router;