
import { count } from "console";
import userModel from "../models/userModel.js";



const user = async(req, res) => {
    const demo = req.body;
    console.log("Your data is this:", demo);
        try {
          const result = await userModel.create({
                name: demo.name, 
                email: demo.email,
                age: demo.age
            })
            res.status(200).json({
                success: true,
                message: "Data send successfully",
                received: result
            });
        }
        catch(error) { 
            res.status(500).json({
                success: false,
                message: "Failed, data not sended"
            })
        }
};


export {user};