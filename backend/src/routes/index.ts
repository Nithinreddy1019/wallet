import express, { Router } from 'express';
import userRoutes from "./user";
import accountRoutes from "./account";


const router: Router = express.Router();
router.use("/user", userRoutes);
router.use("/account", accountRoutes);


export default router;