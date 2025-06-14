import { Router } from "express";
import { user } from "../controllers/userController.js";
const userRoute = Router();



userRoute.post('/create', user)




export default userRoute;

