import { helloService } from '../services';
let jwt = require('jsonwebtoken');


export const helloController = {
  async get(req, res) {
    let data = await helloService.getHelloWorld();
    let token = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmZWxoYXN6bmFsb25ldmUiOiJzYW55aWthIiwiaWF0IjoxNjE0MTU5MDA4fQ.5Vl41PLcHMBf5UNSV6TpmZgOoOHROk0sT0aXYIenS_A')
    console.log(token.felhasznaloneve);
//console.log(jwt.sign({"userId":"1", "kingdomId":"2"}, 'sladjkaslhjdlsahdkslahfksahfksahfk'));
    res.status(200).json(data);
  },

};
