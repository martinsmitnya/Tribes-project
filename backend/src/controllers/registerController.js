import { registerService } from '../services';

export const registerController = {
  async post(req, res) {
    let data = await registerService.postRegister(
      req.body.username,
      req.body.passwordhash,
      req.body.kingdom_name,
      req.body.user_id //ez kell egyáltalán?
    );
    res.status(data.status).json(data);
  },
};
