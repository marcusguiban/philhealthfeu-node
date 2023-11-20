const Hospital = require("../Models/Hospital");

//GET
const getAllHospital = async (req, res) =>{
    try {
        const hospital = await Hospital.find({});
        res.json(hospital);
    } catch (error) {
        throw err;
    }
};

const getHospital = async (req, res) => {
    let id = req.params.id;
    try {
        const hospital = await Hospital.findById(id);

        if (hospital) {
            res.json(hospital);
        } else {
            res.status(400).json({ msg: `Hospital with HospitalId ${id} does not exist` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createHospital = async (req, res) => {
    const { 
        UserName, 
        BusinessEmail,
        Password, 
        HospitalName, 
        EmployerName, 
        Sector, 
        Landline, 
        LicenseNumber, 
        HospitalAddress,
        Region, 
        Province, 
        City, 
        Barangay, 
        PostalCode} = req.body;

    try {

        const hospital = await Hospital.create({
            UserName: UserName,
            Password: Password,
            BusinessEmail: BusinessEmail,
            HospitalName:HospitalName,
            EmployerName:EmployerName,
            Sector:Sector,
            Landline:Landline,
            LicenseNumber:LicenseNumber,
            HospitalAddress:HospitalAddress,
            Region:Region,

            Province:Province,
            City:City,
            Barangay:Barangay,
            PostalCode:PostalCode,


        });

        if(hospital){
            res.status(201).json({ msg: `Data inserted with id ${Hospital.HospitalID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updateHospital = async (req, res) => {
    const {  
        id,  
        UserName, 
        BusinessEmail,
        Password, 
        HospitalName, 
        EmployerName, 
        Sector, 
        Landline, 
        LicenseNumber, 
        HospitalAddress,
        Region, 
        Province, 
        City, 
        Barangay, 
        PostalCode} = req.body;

        try {
            const hospital = await Hospital.findById(id);
            if (!hospital) {
                return res.status(404).json({ error: `Hospital not found`  });
            }
            hospital.UserName = UserName;
            hospital.BusinessEmail = BusinessEmail;
            hospital.Password = Password;
            hospital.HospitalName = HospitalName;
            hospital.EmployerName = EmployerName;
            hospital.Sector = Sector;
            hospital.Landline = Landline;
            hospital.LicenseNumber = LicenseNumber;
            hospital.HospitalAddress = HospitalAddress;
            hospital.Region = Region;
            hospital.Province = Province;
            hospital.City = City;
            hospital.Barangay = Barangay;
            hospital.PostalCode = PostalCode;
            
            await hospital.save();
            res.status(200).json({ msg: "Data updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};



const deleteHospital = async (req, res) => {
    const { id } = req.body;
    
    try {
        const deletedHospital = await Hospital.findByIdAndDelete(id);
        
        if (deletedHospital) {
            res.status(200).json({ msg: "Data Deleted successfully" });
        } else {
            res.status(404).json({ msg: "Hospital not found" });
        }
    } catch (error) {
        throw error;
    }
};



module.exports = {
    getAllHospital,
    getHospital,
    createHospital,
    updateHospital,
    deleteHospital,
    
};