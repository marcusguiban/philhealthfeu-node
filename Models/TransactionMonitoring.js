const mongoose = require("mongoose");
const Schema = mongoose.Schema


const TransactionSchema = new Schema({
    TransactionID: {
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
    Amount: {
        type: Number,
        required: true,
    },
    ORnumber: {
        type: String,
        required: true,
      },

    ModeOfPayment: {
        type: String,
        required: true,
    },
    ReceivedBy: {
        type: String,
        required: true,
    },    
    PaidBy: {
        type: String,
        required: true,
    },

    HospitalName: {
        type: String,
        required: true,
        },
    Date: {
        type: Date,
        required: true,
        },
    Address: {
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
    PostalCode: {
        type: String,
        required: true,
    },
    DescriptionOfVisit: {
        type: String,
        required: true,
    },
    PatientID: {
        type: String,
        required: true,
    },
    DoctorID: {
        type: String,
        required: true,
    },
},{timestamps:true});

TransactionSchema.pre("save", function (next) {
  const currentYear = new Date().getFullYear().toString();
  const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
  const generatedID = currentYear + randomDigits;
  this.TransactionID = 'T-' + generatedID; 
  next();
});

module.exports = mongoose.model("Transaction", TransactionSchema);