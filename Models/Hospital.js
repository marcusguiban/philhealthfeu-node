const mongoose = require("mongoose");
const Schema = mongoose.Schema


const hospitalSchema = new Schema({
    HospitalID: {
        type: String,
        unique: true,
    },
    UserName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    BusinessEmail: {
        type: String,
        required: true,
    },
    HospitalName: {
        type: String,
        required: true,
      },

    EmployerName: {
        type: String,
        required: true,
    },
    Sector: {
        type: String,
        required: true,
      },
    Landline: {
        type: String,
        required: true,
    },
    LicenseNumber: {
        type: String,
        required: true,
    },
    HospitalAddress: {
        type: String,
        required: true,
    },
    Region: {
        type: String,
        required: true,
    },
    Province: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Barangay: {
        type: String,
        required: true,
    },
    PostalCode: {
        type: String,
        required: true,
    },

},{timestamps:true});

hospitalSchema.pre("save", function (next) {
  const currentYear = new Date().getFullYear().toString();
  const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
  const generatedID = currentYear + randomDigits;
  this.HospitalID = 'H-' + generatedID; // Add 'D-' prefix to the generated ID
  next();
});

module.exports = mongoose.model("Hospital", hospitalSchema);