const Appointments = require("../Models/Appointment");

//GET
const getAllAppointment = async (req, res) =>{
    try {
        const appointment = await Appointments.find({});
        res.json(appointment);
    } catch (error) {
        throw err;
    }
};

const getAppointment = async (req, res) => {
    let id = req.params.id;
    try {
        const appointment = await Appointments.findById(id);

        if (appointment) {
            res.json(appointment);
        } else {
            res.status(400).json({ msg: `appointment with appointment ${id} does not exist` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createAppointment = async (req, res) => {
    const { 
        Time, 
        Date,
        Sector, 
        PatientName, 
        Hospital, 
        Address, 
        DoctorsDiagnosis, 
        } = req.body;

    try {

        const appointment = await Appointments.create({
            Time: Time,
            Date: Date,
            Sector: Sector,
            PatientName:PatientName,
            Hospital:Hospital,
            Address:Address,
            DoctorsDiagnosis:DoctorsDiagnosis,
           


        });

        if(appointment){
            res.status(201).json({ msg: `Data inserted with id ${Appointments.AppointmentID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updateAppontment = async (req, res) => {
    const {  id,  
        Time, 
        Date,
        Sector, 
        PatientName, 
        Hospital, 
        Address, 
        DoctorsDiagnosis, 
        } = req.body;

        try {
            const appoitments = await Appointments.findById(id);
            if (!appointments) {
                return res.status(404).json({ error: `Appointment not found`  });
            }
            Appointments.Time = Time,
            Appointments.Date = Date,
            Appointments.Sector = Sector,
            Appointments.PatientName = PatientName,
            Appointments.Hospital = Hospital,
            Appointments.Address = Address,
            Appointments.DoctorsDiagnosis = DoctorsDiagnosis,
           

            
            await appointments.save();
            res.status(200).json({ msg: "Data updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};



const deleteAppointment = async (req, res) => {
    const { id } = req.body;
    
    try {
        const deletedAppointment = await Appointments.findByIdAndDelete(id);
        
        if (deletedAppointment) {
            res.status(200).json({ msg: "Data Deleted successfully" });
        } else {
            res.status(404).json({ msg: "Appointment not found" });
        }
    } catch (error) {
        throw error;
    }
};



module.exports = {
    getAllAppointment,
    getAppointment,
    createAppointment,
    updateAppontment,
    deleteAppointment,
    
};