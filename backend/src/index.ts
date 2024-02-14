import express from 'express';
import cors from 'cors';
import mainRouter from "./routes/index";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/v1", mainRouter);


export default prisma;
app.listen(3000);