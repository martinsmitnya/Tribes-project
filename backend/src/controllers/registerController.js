import { registerService } from '../services';

export const registerController = {
  async post(req, res) {
    const { username, password, kingdom_name } = req.body;
   try{
    let data = await registerService.postRegister(username,password,kingdom_name);
    res.status(200).json(data);
  } catch (error){
    res.status(error.status).json({message: error.message})
  }
},
}
