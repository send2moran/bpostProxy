import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    
    axios.get(`https://track.bpost.cloud/track/items?itemIdentifier=91316070&postalCode=6810733`).then((res) => {
      console.log(res.data);
    });
    return 'Hello NestJS!';
  }
}
