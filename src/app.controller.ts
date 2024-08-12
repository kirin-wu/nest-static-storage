import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 控制器 括号里面是路径
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // get请求 调用getHello方法
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
