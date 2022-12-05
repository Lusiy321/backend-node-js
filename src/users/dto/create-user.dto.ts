import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    @IsString({message: 'Moust be string'})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'пароль'})
    @IsString({message: 'Moust be string'})
    @Length(4, 16, {message: 'Not less than 4 and not more than 16'})
    readonly password: string;
}
