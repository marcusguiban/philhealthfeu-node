const express = require("express");
const router = express.Router();
const TransactionMongoDBController = require("../controllers/TransactionController");



//get request or read

router.get("/", TransactionMongoDBController.getAllTransactions);

// Get request parametarized

router.get("/:id", TransactionMongoDBController.getTransaction);

// Post Request

router.post("/", TransactionMongoDBController.createTransaction);

//update


router.put("/",  TransactionMongoDBController.updateTransaction);

// delete

router.delete("/",TransactionMongoDBController.deletetransaction);

module.exports = router;