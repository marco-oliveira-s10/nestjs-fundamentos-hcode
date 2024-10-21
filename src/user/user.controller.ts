import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create.user.dto";

import { ParamId } from "src/decorators/param-od.decorator";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UserService } from "./user.service";

//@UseInterceptors(LogInterceptor) // Interceptor apenas no controller.
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
    async show(@ParamId() id: number) {

        return await this.userService.show(id);
    }

    @Put(':id')
    async udpate(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {

        return await this.userService.update(data, id)
    }

    @Patch(':id')
    async udpatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {

        return await this.userService.updatePartial(data, id)
    }

    @Delete(':id')
    async delete(@ParamId() id: number) {

        return await this.userService.delete(id);
    }

}