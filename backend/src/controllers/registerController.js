import { registerService } from '../services';

export const registerController = {
    async post(req, res) {
        let data = await registerService.postRegister(req.body.username, req.body.passwordhash);
        res.status(200).json(data);
    },
};