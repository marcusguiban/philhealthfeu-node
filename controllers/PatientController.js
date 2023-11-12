const Patients = require("../Models/Patients");

//GET
const getAllPatients = async (req, res) =>{
    try {
        const patient = await Patients.find({});
        res.json(patient);
    } catch (error) {
        throw err;
    }
};

const getPatients = async (req, res) => {
    let patinetId = req.params.id;
    try {
        const patient = await Patients.findOne({ PatientID: patinetId });

        if (patient) {
            res.json(patient);
        } else {
            res.status(400).json({ msg: `patient with patient ${PatientID} does not exist` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createPatient = async (req, res) => {
    const { 
        UserName, 
        email,
        Password, 
        lastname, 
        firstName, 
        middleName, 
        prefix, 
        gender, 
        birthday,
        contactNumber, 
        MaritalStatus, 

        Birthplace, 
        EmergencyContact, 
        Address} = req.body;

    try {

        const doctor = await Patients.create({
            UserName: UserName,
            Password: Password,
            lastname: lastname,
            firstName:firstName,
            middleName:middleName,
            email:email,
            prefix:prefix,
            gender:gender,
            contactNumber:contactNumber,
            MaritalStatus:MaritalStatus,

            birthday:birthday,
            Birthplace:Birthplace,
            EmergencyContact:EmergencyContact,
            Address:Address,


        });

        if(doctor){
            res.status(201).json({ msg: `Data inserted with id ${Patients.PatientID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updatePatient = async (req, res) => {
    const { id, UserName, 
        email,
        lastname, 
        firstName, 
        middleName, 
        prefix, 
        gender, 
        birthday,
        contactNumber, 
        MaritalStatus, 
        Birthplace, 
        EmergencyContact, 
        Address } = req.body;

    try {
        const updatedDoctor = await Patients.findOneAndUpdate(
            { PatientID: id },
            {
                $set: {
                    UserName,
                    email,
                    lastname,
                    firstName,
                    middleName,
                    prefix,
                    gender,
                    birthday,
                    contactNumber,
                    MaritalStatus,
                    
                    Birthplace, 
                    EmergencyContact, 
                    Address,
                }
            },
            { new: true } // Return the modified document
        );

        if (updatedPatient) {
            res.status(200).json({ msg: "Data updated successfully", updatedPatient });
        } else {
            res.status(404).json({ msg: `Doctor with DoctorID ${id} not found` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const deletePatient = async (req, res) => {
    const { id } = req.body;
    try {
        await Patients.findByIdAndDelete(id);
        res.status(200).json({msg: "Data Deleted successfully"});
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllPatients,
    getPatients,
    createPatient,
    updatePatient,
    deletePatient,
    
};