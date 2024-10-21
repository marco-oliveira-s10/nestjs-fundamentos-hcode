import { INestApplication, Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        await this.$connect();  // Conecta ao banco de dados
    }

    async onModuleDestroy() {
        await this.$disconnect();  // Desconecta quando o módulo é destruído (ao encerrar o app)
    }

    async enableShutdownHooks(app: INestApplication) {
        app.enableShutdownHooks();  // Habilita os hooks de shutdown no NestJS
    }
}
