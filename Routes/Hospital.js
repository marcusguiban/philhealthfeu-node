const express = require("express");
const router = express.Router();
const HospitalMongoDBController = require("../controllers/HospitalController");



//get request or read

router.get("/", HospitalMongoDBController.getAllHospital);

// Get request parametarized

router.get("/:id", HospitalMongoDBController.getHospital);

// Post Request

router.post("/", HospitalMongoDBController.createHospital);

//update


router.put("/",  HospitalMongoDBController.updateHospital);

// delete

router.delete("/:id",HospitalMongoDBController.deleteHospital);

module.exports = router;