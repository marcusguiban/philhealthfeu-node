require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

const doctorRoutes = require("./Routes/Doctors");
const patientRoutes = require("./Routes/Patients");

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


const PORT = process.env.PORT || 5000;


app.listen(PORT, () =>{
    console.log(`Express JS started in port ${PORT}...`);
});
