import { Request, Response } from "express";
import { getuid } from "process";
import bcrypt from "bcryptjs";
import { IUserSignUp } from "../dtos/user-sign-up.dto";
import User from "../models/user.model";
import { IUserSignIn } from "../dtos/user-sign-in.dto";



export const signUp = async (req: Request<{},{},IUserSignUp>, res: Response): Promise<any> => {
    try {
        const { Email, Password, ConfirmPassword, First, Last } = req.body;
        const newUser = { Email, Password, ConfirmPassword, First, Last };

        if (!Email || !Password || !ConfirmPassword || !First || !Last) {
            return res.status(400).json({ message: "Please fill all fields" });
        }

        if (Password !== ConfirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ Email });
        if (user){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await hashPassword(Password);
        
        const newUserDoc = new User({
            Email,
            PasswordHash: hashedPassword,
            First,
            Last,
            Username: Email
        });
        newUserDoc.save();
        res.status(201).json({ message: "User created", newUserDoc });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

export const signIn = async (req: Request<{},{},IUserSignIn>, res: Response): Promise<any> => {
    try {
        const { Email, Password } = req.body;
        const userAcc = await User.findOne( { Email } );
        if (!userAcc) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(Password, userAcc.PasswordHash);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const resValue = userAcc.Email;

        res.status(200).json({ message: "User signed in" , resValue});
    } catch (error) {
        res.status(500).json({ message: "Error signing in", error });
    }
};

const hashPassword = async (pass: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
}