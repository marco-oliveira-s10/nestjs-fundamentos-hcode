import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) { }

    async create({ email, name, password }: CreateUserDTO) {

        return await this.prisma.user.create({
            data: {
                email,
                name,
                password
            },
            select: {
                id: true,
                email: true,
                name: true,
                password: false,
                createdAt: true,
                updatedAt: false
            }
        });
    }

    async list() {

        return this.prisma.user.findMany();
    }

    async show(id: number) {

        return this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }

    async update({ email, name, password, birthAt }: UpdatePutUserDTO, id: number) {

        return this.prisma.user.update({
            data: { email, name, password, birthAt: birthAt ? new Date(birthAt) : null },
            where: {
                id
            }
        })
    }

    async updatePartial({ email, name, password, birthAt }: UpdatePatchUserDTO, id: number) {

        const data: any = {};

        if (birthAt) {
            data.birthAt = new Date(birthAt);
        }

        if (email) {
            data.email = email;
        }

        if (name) {
            data.name = name;
        }

        if (password) {
            data.password = password;
        }

        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })

    }
}