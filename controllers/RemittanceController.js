const Remittances = require("../Models/Remittance");

//GET
const getAllRemittances = async (req, res) =>{
    try {
        const remittance = await Remittances.find({});
        res.json(remittance);
    } catch (error) {
        throw err;
    }
};

const getRemittances = async (req, res) => {
    let id = req.params.id;
    try {
        const remittance = await Remittances.findById(id);

        if (remittance) {
            res.json(remittance);
        } else {
            res.status(400).json({ msg: `patient with patient ${id} does not exist` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createRemittance = async (req, res) => {
    const { 
        UserName, 
        Password, 
        HospitalName, 
        RangeofCompensationDate, 
        MonthlySalaryRange, 
        AmmountClaimed, 
        HospitalEmail, 
        HospitalAddress,
        HospitalId, 
        Numberofphilhealthpatients, 

    } = req.body;
    try {

        const remittance = await Remittances.create({
            UserName: UserName,
            Password: Password,
            HospitalName: HospitalName,
            RangeofCompensationDate: RangeofCompensationDate,
            MonthlySalaryRange: MonthlySalaryRange,
            AmmountClaimed: AmmountClaimed,
            HospitalEmail: HospitalEmail,
            HospitalAddress: HospitalAddress,
            HospitalId: HospitalId,
            Numberofphilhealthpatients: Numberofphilhealthpatients,


        });

        if(remittance){
            res.status(201).json({ msg: `Data inserted with id ${Remittances.RemittanceID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updateRemittance = async (req, res) => {
    const {  id,  
        UserName, 
        Password, 
        HospitalName, 
        RangeofCompensationDate, 
        MonthlySalaryRange, 
        AmmountClaimed, 
        HospitalEmail, 
        HospitalAddress,
        HospitalId, 
        Numberofphilhealthpatients,
        } = req.body;

        try {
            const remittances = await Remittances.findById(id);
            if (!remittances) {
                return res.status(404).json({ error: `Patient not found`  });
            }
            remittances.UserName = UserName;
            remittances.Password = Password;
            remittances.HospitalName = HospitalName;
            remittances.RangeofCompensationDate = RangeofCompensationDate;
            remittances.MonthlySalaryRange = MonthlySalaryRange;
            remittances.AmmountClaimed = AmmountClaimed;
            remittances.middleName = middleName;
            remittances.HospitalEmail = HospitalEmail;
            remittances.HospitalAddress = HospitalAddress;
            remittances.HospitalId = HospitalId;
            patients.Numberofphilhealthpatients = Numberofphilhealthpatients;
            

            
            await remittances.save();
            res.status(200).json({ msg: "Data updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};



const deleteRemittance = async (req, res) => {
    const { id } = req.body;
    
    try {
        const deletedRemittance = await Patients.findByIdAndDelete(id);
        
        if (deletedRemittance) {
            res.status(200).json({ msg: "Data Deleted successfully" });
        } else {
            res.status(404).json({ msg: "Patient not found" });
        }
    } catch (error) {
        throw error;
    }
};



module.exports = {
    getAllRemittances,
    getRemittances,
    createRemittance,
    updateRemittance,
    deleteRemittance,
    
};