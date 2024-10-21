import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UpdateUserDTO } from "./dto/update.user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() data: CreateUserDTO) {

        return await this.userService.create(data);
    }

    @Get()
    async list() {

        return await this.userService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id) {

        return { user: {}, id };
    }

    @Put(':id')
    async udpate(@Body() { email, name, password }: UpdateUserDTO, @Param('id', ParseIntPipe) id) {

        return {
            email, name, password, id
        };
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id) {

        return { id };
    }

}