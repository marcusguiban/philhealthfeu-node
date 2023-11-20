const Admin = require("../Models/Admin");

//GET
const getAllAdmin = async (req, res) =>{
    try {
        const admin = await Admin.find({});
        res.json(admin);
    } catch (error) {
        throw err;
    } 
};

const getAdmin = async (req, res) => {
    let id = req.params.id;
    try {
        const admin = await Admin.findById(id);

        if (admin) {
            res.json(admin);
        } else {
            res.status(400).json({ msg: `Admin with adminID ${id} does not exist` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createAdmin = async (req, res) => {
    const { 
        UserName,
        Password,
        lastname,
        firstName, 
        middleName, 
        prefix, 
        Businessemail,
        ContactNumber,  
        Occuption,
        Sector,
        Officeaddress,
        Barangay,
        City,
        Province, 
        Region,
        Postalcode,
        } = req.body;
        

    try {

        const admin = await Admin.create({
            UserName: UserName,
            Password: Password,
            lastname: lastname,
            firstName:firstName,
            middleName:middleName,
           Businessemail:Businessemail,
            prefix:prefix,
            ContactNumber:ContactNumber,
            Occuption: Occuption,
            Sector: Sector,
            Officeaddress: Officeaddress,
            Barangay:Barangay,
            City:City,
            Province: Province,
            Region:Region,
            Postalcode:Postalcode,

        });

        if(admin){
            res.status(201).json({ msg: `Data inserted with id ${admin.AdminID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updateAdmin = async (req, res) => {
    const {  id, UserName, 
        Password,
        lastname,
        firstName, 
        middleName, 
        prefix, 
        Businessemail,
        ContactNumber,  
        Occuption,
        Sector,
        Officeaddress,
        Barangay,
        City,
        Province, 
        Region,
        Postalcode,

         } = req.body;
        try {
            const admin = await Admin.findById(id);
            if (!admin) {
                return res.status(404).json({ error: `admin not found`  });
            }
            admin.UserName = UserName;
            admin.Password = Password;
            admin.lastname = lastname;
            admin.firstName = firstName;
            admin.middleName = middleName;
            admin.firstName = firstName;
            admin.middleName = middleName;
            admin.prefix = prefix;
            admin.Businessemail = Businessemail;
            admin.ContactNumber = ContactNumber;
            admin.Occuption = Occuption;
            admin.Sector = Sector;
            admin.Officeaddress = Officeaddress;
            admin.Barangay = Barangay;
            admin.City = City;
            admin.Province = Province;
            admin.Region = Region;
            admin.Postalcode = Postalcode;

            
            await admin.save();
            res.status(200).json({ msg: "Data updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};


const deleteAdmin = async (req, res) => {
    const { id } = req.body;
    try {
        await Admin.findByIdAndDelete(id);
        res.status(200).json({msg: "Data Deleted successfully"});
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllAdmin,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    
};