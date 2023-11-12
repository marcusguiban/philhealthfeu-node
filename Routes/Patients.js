const express = require("express");
const router = express.Router();
const PatientMongoDBController = require("../controllers/PatientController");



//get request or read

router.get("/", PatientMongoDBController.getAllPatients );

// Get request parametarized

router.get("/:id", PatientMongoDBController.getPatients);

// Post Request

router.post("/", PatientMongoDBController.createPatient);

//update


router.put("/:id",  PatientMongoDBController.updatePatient);

// delete

router.delete("/",PatientMongoDBController.deletePatient);

module.exports = router;