import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Posts} from "./posts.model";
import { User } from 'src/users/users.model';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Posts) private postRepository: typeof Posts) {}

    async create(dto: CreatePostDto) {
        
        const post = await this.postRepository.create({ ...dto })
        return post;
    }

    async getAllPosts() {
        const post = await this.postRepository.findAll({include: {all: true}});
        return post;
    }
}
