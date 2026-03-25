import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {
    success: boolean;
    data: {
      service: string,
      version: string
    };
    message: string;
  }
    {
      return {
      success: true,
      data: {
        service: "purchase-api",
        version: "1.0.0"
      },
      message: "Hello NestJS"
    }
  
}
}
