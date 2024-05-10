const express = require("express")
const { connectToDatabase } = require("./config/dbconfig")
const cors = require("cors")
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import Routes


const postData = require("./routes/main");



app.use("/api/v1", postData);

connectToDatabase()
app.listen(3000, () => {
    console.log(`Server started on 3000`)
})