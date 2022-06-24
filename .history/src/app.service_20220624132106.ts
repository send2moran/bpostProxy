import { Injectable } from '@nestjs/common';
import axios from 'axios';
var request = require('request');

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    


var headers = {
    'authority': 'track.bpost.cloud',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'no-cache',
    'dnt': '1',
    'origin': 'https://react-xgnkds.stackblitz.io',
    'pragma': 'no-cache',
    'referer': 'https://react-xgnkds.stackblitz.io/',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="103", "Chromium";v="103"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37'
};

var options = {
    url: 'https://track.bpost.cloud/track/items?itemIdentifier=91316070&postalCode=6810733',
    headers: headers
};


    await axios.get(options.url, {headers})
    
  }
}
