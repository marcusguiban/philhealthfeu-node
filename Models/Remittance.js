const mongoose = require("mongoose");
const Schema = mongoose.Schema


const RemittanceSchema = new Schema({
    RemmitanceID: {
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
    HospitalName: {
        type: String,
        required: true,
    },
    RangeofCompensationDate: {
        type: Date,
        required: true,
      },

    MonthlySalaryRange: {
        type: String,
        required: true,
    },
    AmmountClaimed: {
    type: String,
    },    
    
    HospitalEmail: {
        type: String,
        required: true,
      },
    HospitalAddress: {
        type: String,
        required: true,
      },
    HospitalId: {
        type: String,
        required: true,
    },
    Numberofphilhealthpatients: {
        type: String,
        required: true,
      },
    },{timestamps:true}); 
RemittanceSchema.pre("save", function (next) {
    const currentYear = new Date().getFullYear().toString();
    const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
    const generatedID = currentYear + randomDigits;
    this.PatientID = 'R-' + generatedID; 
    next();
  });
module.exports = mongoose.model("Remittance", RemittanceSchema);