"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const create_post_dto_1 = require("./dto/create-post.dto");
const posts_service_1 = require("./posts.service");
const swagger_1 = require("@nestjs/swagger");
const posts_model_1 = require("./posts.model");
let PostsController = class PostsController {
    constructor(postService) {
        this.postService = postService;
    }
    createPost(dto) {
        return this.postService.create(dto);
    }
    getAll() {
        return this.postService.getAllPosts();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание поста / Create new post' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: posts_model_1.Posts }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все posts / Get all posts' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [posts_model_1.Posts] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getAll", null);
PostsController = __decorate([
    (0, swagger_1.ApiTags)('Добавление поста / Create new post'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map