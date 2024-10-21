import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create.user.dto";

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

        return this.prisma.user.findMany({
            
            // Exemplo de filtro
            // where:{
            //     email:{
            //         contains: 'gmail.com'
            //     }
            // }
        });
    }

}