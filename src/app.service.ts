import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async makeLongRun(): Promise<string> {
    const start = Date.now()
    for (let i = 0; i<1000000; i++) {
      for (let j = 0; j<100000; j++) {
      }
      await new Promise(resolve => setTimeout(() => resolve('ok'), 0))
    }
    const end = Date.now()
    return `${end - start}`
  }
}
