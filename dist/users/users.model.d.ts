import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { Posts } from "../posts/posts.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    posts: Posts[];
}
export {};
