import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString} from "class-validator";

export class FindUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    @IsString({message: 'Moust be string'})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;
}
