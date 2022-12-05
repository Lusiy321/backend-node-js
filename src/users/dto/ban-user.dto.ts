import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
    @ApiProperty({example: '1', description: 'User Id'})
    @IsNumber({}, { message: "Moust be number" })
    readonly userId: number;

    @ApiProperty({example: 'Some text for user bloking', description: 'Reason for blocking'})
    @IsString({message: "Moust be string"})
    readonly banReason: string;
}
