import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// No NestJS (e em TypeScript em geral), decorators são funções que permitem adicionar metadata ou modificar o comportamento de classes, métodos, propriedades ou parâmetros. Eles são uma característica poderosa da linguagem e são amplamente utilizados no NestJS para simplificar a criação de componentes e a configuração de rotas, serviços e injeção de dependências.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
