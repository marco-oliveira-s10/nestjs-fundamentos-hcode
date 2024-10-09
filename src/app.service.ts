import { Injectable } from '@nestjs/common';

//No NestJS, Services (ou Serviços) são componentes que contêm a lógica de negócios da aplicação. Eles são responsáveis por realizar operações específicas, como acessar um banco de dados, manipular dados, executar cálculos ou interagir com APIs externas. Os serviços são frequentemente utilizados pelos controladores para processar requisições e fornecer respostas.
@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

}
