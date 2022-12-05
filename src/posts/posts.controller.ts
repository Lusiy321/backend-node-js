import {Body, Controller, Post, UploadedFile, UseInterceptors, UsePipes} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Posts } from './posts.model';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('Добавление поста / Create new post')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) { }
    
    @ApiOperation({summary: 'Создание поста / Create new post'})
    @ApiResponse({ status: 200, type: Posts })
    @UsePipes(ValidationPipe)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
        return this.postService.create(dto, image)
    }

}
