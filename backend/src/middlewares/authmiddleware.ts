import JWT_PASS from "../config";
import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


export interface requestWithUsername extends Request {
    username?: string;
}

interface jwtPayload {
    username: string
}

const authMiddleware = async (req: requestWithUsername, res: Response, next: NextFunction) => {
    const tokenInput = req.headers.authorization;
    if(!tokenInput || !tokenInput.startsWith("Bearer ")){
        return res.status(403).json({message:"Unauthorized"})
    };

    const token = tokenInput?.split(" ")[1];
    try {
        const authenticated = jwt.verify(token, JWT_PASS) as jwtPayload;
        req.username = authenticated.username;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({message: "An error occured"})
    }

}

export default authMiddleware;