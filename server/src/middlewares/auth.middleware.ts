import { Request, Response, NextFunction } from "express";

require('dotenv').config();
const jwt = require('jsonwebtoken');

interface CustomRequest extends Request {
    user?: any;
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers['x-auth-token'] as string;
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        if (jwt.verify(token, process.env.JWT_SECRET)) {
            req.user = jwt.decode(token);
            next();
        }

        return res.status(400).json({ message: "Token is not valid" });
    } catch (error) {
        res.status(400).json({ message: "Token is not valid" });
    }
}

export default authMiddleware;