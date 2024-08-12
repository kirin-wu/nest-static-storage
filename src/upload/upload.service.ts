import { Injectable } from '@nestjs/common';
import { extname } from 'path';

@Injectable()
export class UploadService {
  // 文件存储路径
  private readonly uploadPath = './uploadFiles';

  getHello(): string {
    return 'This is Upload';
  }
  saveFile(file: Express.Multer.File): string {
    // 生成唯一的文件名
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExt = extname(file.originalname);
    const filename = `${file.fieldname}-${uniqueSuffix}${fileExt}`;

    // 文件的完整路径
    const filePath = `${this.uploadPath}/${filename}`;

    // 将文件内容写入指定路径
    const fs = require('fs');
    if (!fs.existsSync(this.uploadPath)) {
      fs.mkdirSync(this.uploadPath);
    }
    fs.writeFileSync(filePath, file.buffer);

    return filePath;
  }
}
