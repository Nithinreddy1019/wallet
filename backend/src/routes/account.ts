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

});


router.post("/transfer", authMiddleware, async (req: requestWithUsername, res) => {
    const {to_id, amount}  = req.body;
    const fromUsername = req.username;
    const fromUser = await prisma.user.findUnique({
        where: {username: fromUsername},
        include: {
            account: true
        }
    });

    if(fromUser && fromUser.account && typeof fromUser.account.balance === 'number'){
        if(amount > fromUser.account.balance || fromUser.account.balance <= 0){
            return res.status(411).json({message: "Insufficient balance"})
        }
    };

    const toUser = await prisma.user.findUnique({
        where: {
            id: to_id
        },
        include: {
            account: true
        }
    });

    if(!toUser){
        return res.status(411).json({message: "Account does not exist"})
    };
    
    try {
        const transactionResponse = await prisma.$transaction(async (tx) => {
            if( fromUser && toUser){
                const updatedFromAccount = await prisma.account.update({
                    where: {
                        id: fromUser.account?.id
                    },
                    data: {
                        balance: {
                            decrement : amount
                        }
                    }
                });
                const updatedToAccount = await prisma.account.update({
                    where: {
                        id: toUser.account?.id
                    },
                    data: {
                        balance: {
                            increment: amount
                        }
                    }
                });
                return res.status(200).json({message:"Transfer successfull"})
            };
        });
    } catch (error) {
        console.log(error);
        return res.status(411).json({message: "An error occured"})
    }

});


export default router;