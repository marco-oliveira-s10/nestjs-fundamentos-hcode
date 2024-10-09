import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create.user.dto";

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
    async show(@Param() params) {

        return { user: {}, params };
    }

    @Put(':id')
    async udpate(@Body() body, @Param() params) {

        return {
            body,
            params
        };
    }

    @Delete(':id')
    async delete(@Param() params) {

        return { params };
    }

}