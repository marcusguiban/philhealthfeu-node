require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
// files
const doctorRoutes = require("./Routes/Doctors");
const patientRoutes = require("./Routes/Patients");
const hospitalRoutes = require("./Routes/Hospital");
const adminRoutes = require("./Routes/Admin");
const transactionRoutes = require("./Routes/Transaction");
const remittanceRoutes = require("./Routes/Remittance");
const AppointmentRoutes = require("./Routes/Appointment");

const cors = require("cors")
const connection = require("./database");


// database
connection();

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/hospital", hospitalRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/remittance", remittanceRoutes);
app.use("/api/appointment", AppointmentRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () =>{
    console.log(`Express JS started in port ${PORT}...`);
});
