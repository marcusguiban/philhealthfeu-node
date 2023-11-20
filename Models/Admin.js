const mongoose = require("mongoose");
const Schema = mongoose.Schema


const adminSchema = new Schema({
    AdminID: {
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
    lastname: {
        type: String,
        required: true,
      },

    firstName: {
        type: String,
        required: true,
    },
    middleName: {
    type: String,
    },    
    prefix: {
    type: String,
    },


    
    Businessemail: {
        type: Date,
        required: true,
      },
    ContactNumber: {
        type: String,
        required: true,
    },
    
    Occuption: {
        type: String,
        required: true,
    },
    Sector: {
        type: String,
        required: true,
    },
    Officeaddress: {
        type: String,
        required: true,
    },
    Barangay: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Province: {
        type: String,
        required: true,
    },
    Region: {
        type: String,
        required: true,
    },
    Postalcode: {
        type: String,
        required: true,
    },

},{timestamps:true});

doctorsSchema.pre("save", function (next) {
  const currentYear = new Date().getFullYear().toString();
  const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
  const generatedID = currentYear + randomDigits;
  this.DoctorID = 'D-' + generatedID; // Add 'D-' prefix to the generated ID
  next();
});

module.exports = mongoose.model("Doctors", doctorsSchema);