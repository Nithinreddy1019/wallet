import express, { Router } from 'express';
import zod from 'zod';
import * as jwt  from 'jsonwebtoken';
import prisma from '../index';
import JWT_PASS from '../config';
import bcrypt from 'bcrypt';

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

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        const res = await prisma.user.create({
            data: {
                username: username,
                password: hashedPassword,
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
});


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
});
router.post("/signin", async (req, res) => {
    const parsed = signinSchema.safeParse(req.body);
    if(!parsed.success){
        return res.json({message:"Invalid credentials"});
    }

    const {username, password} = req.body;

    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    if(!user){
        return res.status(411).json({message:"User doesn't exist"});
    };

    const isvalidPassword = await bcrypt.compare(password, user.password);
    if(!isvalidPassword){
        return res.status(411).json({message:"Invalid password"})
    };

    const token = await jwt.sign(username, JWT_PASS);
    res.status(200).json({token: "token"});
});


router.get("/bulk", async (req, res) => {
    
})

export default router;