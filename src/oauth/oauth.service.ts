import { Injectable } from '@nestjs/common';

@Injectable()
export class OauthService {
  getHello(): object {
    const jsonData = {
      name: 'hello my friend jiyun',
      age: 10,
    };
    return jsonData;
  }
}
