import express from 'express';
import connectDB from './config/db.js';
import users from './models/userModel.js';
import userRoute from './routes/userRoute.js';
import path from 'path';

// console.log(path)


const app = express();
const PORT = 3000;
app.use(express.json());

//Connect database
connectDB();

app.use("/api/v1/user", userRoute);    //api v1


app.get('/server-status', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Hello, Currently Your server is Running"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error, Server is down, please check "
        });
    }

});


// Database check in Postman use this API's http://localhost:3000/connection-db

// app.get('/connection-db', (req, res) => {
//     try {
//         res.status(200).json({
//             success: true,
//             message: "MongoDB is connected successfully"
//         });
//     }
//     catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Error, MongoDB connection is failed..."
//         });
//     }

// })


//Server is Running
app.listen(PORT, async () => {
    // await connectDB();
    console.log("http://localhost:3000");
})

