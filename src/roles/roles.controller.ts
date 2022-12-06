import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Управление ролями пользователей / User role controll settings')
@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Создание роли пользователя / Create user role'})
    @ApiResponse({ status: 200, type: Role })
    // @ApiParam(ApiBearerAuth)
    // @Roles("ADMIN")
    // @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({ summary: 'Получение ролей пользователей / Get all user role' })
    // @ApiParam(ApiBearerAuth)
    // @Roles("ADMIN")
    // @UseGuards(RolesGuard)
    @Get()
    getAllRole() {
        return this.roleService.getAllRole();
    }
}
