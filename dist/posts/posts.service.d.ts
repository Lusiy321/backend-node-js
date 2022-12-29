import { CreatePostDto } from "./dto/create-post.dto";
import { Posts } from "./posts.model";
export declare class PostsService {
    private postRepository;
    constructor(postRepository: typeof Posts);
    create(dto: CreatePostDto): Promise<Posts>;
    getAllPosts(): Promise<Posts[]>;
}
