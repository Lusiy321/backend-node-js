import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@ApiTags('Авторизация и регистрация / Authorization and registration')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    @ApiOperation({summary: 'Авторизация пользователя / Authorization user'})
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }
    @ApiOperation({summary: 'Регистрация  пользователя / Registration user'})
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
}
