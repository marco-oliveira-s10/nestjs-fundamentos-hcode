import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body) {

        return { body };
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