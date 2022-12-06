import {Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Posts } from './posts.model';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@ApiTags('Добавление поста / Create new post')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) { }
    
    @ApiOperation({summary: 'Создание поста / Create new post'})
    @ApiResponse({ status: 200, type: Posts })
    // @UsePipes(ValidationPipe)
    // @ApiParam(ApiBearerAuth)
    // @Roles("ADMIN")
    // @UseGuards(RolesGuard)
    @Post() 
    @UseInterceptors()
    createPost(@Body() dto: CreatePostDto) {
        return this.postService.create(dto)
    }

    @ApiOperation({ summary: 'Получить все posts / Get all posts' })
    @ApiResponse({ status: 200, type: [Posts] })
    @Get()
    getAll() {
        return this.postService.getAllPosts();
    }

}
