const Transactions = require("../Models/TransactionMonitoring");

//GET
const getAllTransactions = async (req, res) =>{
    try {
        const transaction = await Transactions.find({});
        res.json(transaction);
    } catch (error) {
        throw err;
    }
};

const getTransaction = async (req, res) => {
    let id = req.params.id;
    try {
        const transaction = await Transactions.findById(id);

        if (transaction) {
            res.json(transaction);
        } else {
            res.status(400).json({ msg: `transaction with transaction ${id} does not exist` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createTransaction = async (req, res) => {
    const { 
        UserName, 
        Password, 
        Amount,
        ORnumber,
        ModeOfPayment,
        ReceivedBy,
        PaidBy,
        HospitalName, 
        Date, 
        Address, 
        Barangay, 
        City, 
        Province,
        Region, 
        PostalCode, 
        DescriptionOfVisit, 
        PatientID, 
        DoctorID,
    } = req.body;

    try {

        const transaction = await Transactions.create({
            UserName: UserName,
            Password: Password,
            Amount: Amount,
            ORnumber:ORnumber,
            ModeOfPayment:ModeOfPayment,
            ReceivedBy:ReceivedBy,
            PaidBy:PaidBy,
            HospitalName:HospitalName,
            Date:Date,
            Address:Address,
            Barangay:Barangay,
            City:City,
            Province:Province,
            Region:Region,
            PostalCode:PostalCode,
            DescriptionOfVisit:DescriptionOfVisit,
            PatientID:PatientID,
            DoctorID:DoctorID,
        });

        if(transaction){
            res.status(201).json({ msg: `Data inserted with id ${Transactions.TransactionID}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};

const updateTransaction = async (req, res) => {
    const {  id,  
        UserName, 
        Password, 
        Amount,
        ORnumber,
        ModeOfPayment,
        ReceivedBy,
        PaidBy,
        HospitalName, 
        Date, 
        Address, 
        Barangay, 
        City, 
        Province,
        Region, 
        PostalCode, 
        DescriptionOfVisit, 
        PatientID, 
        DoctorID,
    } = req.body;

        try {
            const transaction = await Transactions.findById(id);
            if (!transaction) {
                return res.status(404).json({ error: `transaction not found`  });
            }
            transaction.UserName = UserName;
            transaction.Password = Password;
            transaction.Amount = Amount;
            transaction.ORnumber = ORnumber;
            transaction.ModeOfPayment = ModeOfPayment;
            transaction.ReceivedBy = ReceivedBy;
            transaction.PaidBy = PaidBy;
            transaction.HospitalName = HospitalName;
            transaction.Date = Date;
            transaction.Address = Address;
            transaction.Barangay = Barangay;
            transaction.City = City;
            transaction.Province = Province;
            transaction.Region = Region;
            transaction.PostalCode = PostalCode;
            transaction.DescriptionOfVisit = DescriptionOfVisit;
            transaction.PatientID = PatientID;
            transaction.DoctorID = DoctorID;

            await transaction.save();
            res.status(200).json({ msg: "Data updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};



const deletetransaction = async (req, res) => {
    const { id } = req.body;
    
    try {
        const deletedtransaction = await Transactions.findByIdAndDelete(id);
        
        if (deletedtransaction) {
            res.status(200).json({ msg: "Data Deleted successfully" });
        } else {
            res.status(404).json({ msg: "Transaction not found" });
        }
    } catch (error) {
        throw error;
    }
};



module.exports = {
    getAllTransactions,
    getTransaction,
    createTransaction,
    updateTransaction,
    deletetransaction,
    
};