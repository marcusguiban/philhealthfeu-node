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
    let id = req.params.id;
    try {
        const patient = await Patients.findById(id);

        if (patient) {
            res.json(patient);
        } else {
            res.status(400).json({ msg: `patient with patient ${id} does not exist` });
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

        const patient = await Patients.create({
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

        if(patient){
            res.status(201).json({ msg: `Data inserted with id ${Patients.PatientID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updatePatient = async (req, res) => {
    const {  id,  UserName, 
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
        Address } = req.body;

        try {
            const patients = await Patients.findById(id);
            if (!patients) {
                return res.status(404).json({ error: `Patient not found`  });
            }
            patients.UserName = UserName;
            patients.email = email;
            patients.Password = Password;
            patients.lastname = lastname;
            patients.firstName = firstName;
            patients.firstName = firstName;
            patients.middleName = middleName;
            patients.prefix = prefix;
            patients.gender = gender;
            patients.birthday = birthday;
            patients.contactNumber = contactNumber;
            patients.MaritalStatus = MaritalStatus;
            patients.Birthplace = Birthplace;
            patients.EmergencyContact = EmergencyContact;
            patients.Address = Address;

            
            await patients.save();
            res.status(200).json({ msg: "Data updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};



const deletePatient = async (req, res) => {
    const { id } = req.body;
    
    try {
        const deletedPatient = await Patients.findByIdAndDelete(id);
        
        if (deletedPatient) {
            res.status(200).json({ msg: "Data Deleted successfully" });
        } else {
            res.status(404).json({ msg: "Patient not found" });
        }
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