import { ApiProperty } from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {

    @ApiProperty({example: 'MANAGER', description: 'User role description'})
    @IsString({message: "Moust be string"})
    readonly value: string;

    @ApiProperty({example: '1', description: 'User Id'})
    @IsNumber({}, {message: "Moust be number"})
    readonly userId: number;
}
