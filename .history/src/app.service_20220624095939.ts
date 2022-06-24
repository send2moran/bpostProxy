import { Injectable } from '@nestjs/common';
var Curl = require('node-libcurl').Curl;

@Injectable()
export class AppService {
  getHello(): string {


   
var curl = new Curl();
curl.setOpt( Curl.option.URL, 'http://www.httpbin.org');
curl.setOpt( Curl.option.FOLLOWLOCATION, true );
curl.setOpt( Curl.option.HTTPPOST, [
    { name: 'login', contents: 'username' }
]);
curl.perform();

    return 'Hello NestJS!';
  }
}
