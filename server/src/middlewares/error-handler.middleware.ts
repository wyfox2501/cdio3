import { error } from "console";
import { NextFunction, Request, Response } from "express";


export const errHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack); // Log error
    res.status(500).json({ message: "Internal Server Error", error: err.message });
}

export const notFoundHandler = (req: Request, res: Response) => {
    console.log("Route Not Found");
    res.status(404).json({ message: "Route Not Found" });
};
  