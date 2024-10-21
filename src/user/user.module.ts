import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserIdCheckMiddlewares } from "src/middlewares/user-id-check-middlewares";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService],
    exports: []
})

export class UserModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {

        consumer.apply(UserIdCheckMiddlewares).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL
        })
    }
}

