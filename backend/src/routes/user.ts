import express, { Router } from 'express';
import zod from 'zod';
import * as jwt  from 'jsonwebtoken';
import prisma from '../index';
import JWT_PASS from '../config';

const router: Router = express.Router();


const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})
router.post("/signup", async (req,res) => {
    const parsed = signupSchema.safeParse(req.body);
    if(!parsed.success){
        return res.status(411).json({message: "Invalid inputs"});
    }
    const {username, password, firstName, lastName} = req.body;
    console.log(username, password, firstName, lastName);

    try {
        const res = await prisma.user.create({
            data: {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                account: {
                    create: {balance: Math.random() * 10000}
                }
            },
            include: {
                account: true
            }
        })
        console.log(res);
    } catch (error) {
        console.log(error);
        return res.status(411).json({message: "An error occured"});
    }

    try {
        const token = jwt.sign({username: username} , JWT_PASS, {expiresIn: 60* 60});
        res.status(200).json({token: token});
    } catch (error) {
        console.log(error);
        return
    }


})

export default router;