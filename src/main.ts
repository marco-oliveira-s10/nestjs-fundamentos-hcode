import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// No NestJS, o termo bootstrap refere-se ao processo de inicialização da aplicação. Em um contexto mais amplo, é o momento em que a aplicação é configurada e todos os módulos, controladores e provedores são registrados e preparados para serem usados.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
