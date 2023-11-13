const express = require("express");
const router = express.Router();
const DoctorMongoDBController = require("../controllers/DoctorsController");



//get request or read

router.get("/", DoctorMongoDBController.getAllDoctors );

// Get request parametarized

router.get("/:id", DoctorMongoDBController.getDoctors);

// Post Request

router.post("/", DoctorMongoDBController.createDoctor);

//update


router.put("/",  DoctorMongoDBController.updateDoctor);

// delete

router.delete("/:id",DoctorMongoDBController.deleteDoctor);

module.exports = router;