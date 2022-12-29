import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { Posts } from './posts.model';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(dto: CreatePostDto): Promise<Posts>;
    getAll(): Promise<Posts[]>;
}
