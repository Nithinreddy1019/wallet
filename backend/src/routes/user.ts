import express, { Router } from 'express';
import zod from 'zod';
import * as jwt  from 'jsonwebtoken';
import prisma from '../index';
import JWT_PASS from '../config';
import bcrypt from 'bcrypt';
import authMiddleware from '../middlewares/authmiddleware';
import { requestWithUsername } from "../middlewares/authmiddleware";

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

    const token = await jwt.sign({username: username}, JWT_PASS, {expiresIn: 60 * 60});
    res.status(200).json({token: token});
});


router.get("/bulk", authMiddleware, async (req: requestWithUsername, res) => {

    const filter = req.query.filter || "";

    try {
        const users = await prisma.user.findMany({
            where: {
                OR: [
                    {firstName: {
                        contains: filter as string
                    }},
                    {lastName : {
                        contains : filter as string
                    }}
                ]
            }
        });
        console.log(users);

        res.status(200).json({
            user: users.map(user => ({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName
            }))
        })    
    } catch (error) {
        res.status(411).json({message: "Error occures"})
    }
});


const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})
interface ReqBody {
    password?: string,
    firstName?: string,
    lastName?: string
}
function filterNonNullValues(body: ReqBody): Partial<ReqBody> {
    let result: Partial<ReqBody> = {}
    for (let key in body){
        if (body[key as keyof ReqBody] !== undefined && body[key as keyof ReqBody] !== null){
            result[key as keyof ReqBody] = body[key as keyof ReqBody]
        };
    }
    return result
};
router.put("/update", authMiddleware, async (req: requestWithUsername, res) => {
    const parsed = updateSchema.safeParse(req.body);
    if(!parsed.success){
        return res.status(411).json({message:"Invalid inputs"});
    }

    const passedValues = filterNonNullValues(req.body)

    if(passedValues.password){
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(passedValues.password, saltRounds)
        passedValues.password = hashedPassword;
    }

    const username = req.username;
    try {
        const returnRes = await prisma.user.update({
            where: {
                username: username
            },
            data : {...passedValues}
        })
        res.status(200).json({message: "User updated successfully"});
    } catch (error) {
        console.log(error);
        return res.status(411).json({message: "An error occured"});
    }
});

export default router;