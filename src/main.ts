import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { LogInterceptor } from './interceptors/log.interceptor';

// No NestJS, o termo bootstrap refere-se ao processo de inicialização da aplicação. Em um contexto mais amplo, é o momento em que a aplicação é configurada e todos os módulos, controladores e provedores são registrados e preparados para serem usados.
// É a fase de inicialização da aplicação NestJS, onde a instância principal da aplicação é criada e configurada, permitindo que o framework comece a ouvir requisições e a interagir com os componentes definidos.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.useGlobalInterceptors(new LogInterceptor); //Interceptor Global

  await app.listen(3000);
}

bootstrap();
