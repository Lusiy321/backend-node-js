import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
}
export declare class Posts extends Model<Posts, PostCreationAttrs> {
    id: number;
    title: string;
    content: string;
    userId: number;
    author: User;
}
export {};
