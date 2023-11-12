const Doctors = require("../Models/Doctors");

//GET
const getAllDoctors = async (req, res) =>{
    try {
        const doctors = await Doctors.find({});
        res.json(doctors);
    } catch (error) {
        throw err;
    } 
};

const getDoctors = async (req, res) => {
    let doctorId = req.params.id; // Assuming the parameter is named id
    try {
        const doctor = await Doctors.findOne({ DoctorID: doctorId });

        if (doctor) {
            res.json(doctor);
        } else {
            res.status(400).json({ msg: `Doctor with DoctorID ${doctorId} does not exist` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createDoctor = async (req, res) => {
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
        LicenseNumber, 
        Specialization, 
        Address} = req.body;
        

    try {

        const doctor = await Doctors.create({
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
            LicenseNumber:LicenseNumber,
            Specialization:Specialization,
            Address:Address,


        });

        if(doctor){
            res.status(201).json({ msg: `Data inserted with id ${Doctors.DoctorID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updateDoctor = async (req, res) => {
    const {  UserName, 
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
        LicenseNumber, 
        Specialization, 
        Address } = req.body;
        let doctorId = req.params.id;
        try {
            const doctors = await Doctors.findOne({ DoctorID: doctorId });
            if (!doctors) {
                return res.status(404).json({ error: "Doctor not found" });
            }
            doctors.UserName = UserName;
            doctors.email = email;
            doctors.Password = Password;
            doctors.lastname = lastname;
            doctors.firstName = firstName;
            doctors.firstName = firstName;
            doctors.middleName = middleName;
            doctors.prefix = prefix;
            doctors.gender = gender;
            doctors.birthday = birthday;
            doctors.contactNumber = contactNumber;
            doctors.MaritalStatus = MaritalStatus;
            doctors.LicenseNumber = LicenseNumber;
            doctors.Specialization = Specialization;
            doctors.Address = Address;
            
            await doctors.save();
            res.status(200).json({ msg: "Data updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};


const deleteDoctor = async (req, res) => {
    const { id } = req.body;
    try {
        await Doctors.findByIdAndDelete(id);
        res.status(200).json({msg: "Data Deleted successfully"});
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllDoctors,
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor,
    
};