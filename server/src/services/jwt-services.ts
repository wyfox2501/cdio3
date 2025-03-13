import { IUser } from "../models/user.model";

require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION_TIME;

const generateToken = (user: IUser) => {
    try {
        const payload = {
            email: user.Email,
            Role: user.Role
        };
        console.log(payload);
        const options = {
            expiresIn: expiration ? expiration : "1h"
        };
        return jwt.sign(payload, secret, options);
    } catch (error) {
        console.error(error);
        return null;
    }
}

const validateToken = (token: string) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { generateToken, validateToken };