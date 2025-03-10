import { model, Schema } from "mongoose";

export interface IUser{
    Username: string;
    Email: string;
    PasswordHash: string;
    First: string;
    Last: string;
    Lockend: Date;
}

const UserSchema = new Schema<IUser>({
    Username: {type: String, required: true, unique: true},
    Email: {type: String, required: true, unique: true},
    PasswordHash: {type: String, required: true},
    First: {type: String, required: true},
    Last: {type: String, required: true},
    Lockend: {type: Date}
});

const User = model<IUser>("User", UserSchema);
export default User;