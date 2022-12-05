import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'MANAGER', description: 'Role name'})
    @IsString({message: 'Moust be string'})
    readonly value: string;

    @ApiProperty({example: 'Manager role from exchange', description: 'Role description'})
    @IsString({message: 'Moust be string'})
    readonly description: string;
}
