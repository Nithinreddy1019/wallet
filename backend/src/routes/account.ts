import express, { Router } from 'express';
import zod from 'zod';
import prisma from '../index';
import authMiddleware from '../middlewares/authmiddleware';
import { requestWithUsername } from '../middlewares/authmiddleware';


const router: Router = express.Router();


router.get("/balance", authMiddleware, async (req: requestWithUsername, res) => {
    const username = req.username;


    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            },
            include: {
                account: true
            }
        });   

        res.status(200).json({balance: user?.account?.balance})
    } catch (error) {
        console.log(error);
        return res.status(411).json({message: "An error occured"});
    }

})


export default router;