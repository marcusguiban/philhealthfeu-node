const express = require("express");
const router = express.Router();
const AppointmentMongoDBController = require("../controllers/AppointmenControllers");



//get request or read

router.get("/",AppointmentMongoDBController.getAllAppointment );

// Get request parametarized

router.get("/:id", AppointmentMongoDBController.getAppointment);

// Post Request

router.post("/", AppointmentMongoDBController.createAppointment);

//update


router.put("/",  AppointmentMongoDBController.updateAppontment);

// delete

router.delete("/", AppointmentMongoDBController.deleteAppointment);

module.exports = router;