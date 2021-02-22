import { helloService } from '../services';

export const helloController = {
    asyncget(req, res) {
        let data = await helloService.getHelloWorld();

        res.status(200).json(data);
    },
};