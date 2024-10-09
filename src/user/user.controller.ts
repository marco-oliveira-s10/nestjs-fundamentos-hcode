import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UpdateUserDTO } from "./dto/update.user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() { email, name, password }: CreateUserDTO) {

        return { email, name, password };
    }

    @Get()
    async list() {

        return { users: [] };
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