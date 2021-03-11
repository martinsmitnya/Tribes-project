import { registerController } from '../src/controllers/registerController';

test('Register controller returns registering response', async()=> {
  let input = {
    "username" : "Martinka",
    "password" : "jelszo123",
    "kingdom_name" : "jozsikakiralysaga"
  }
  let res = '';
  
  let response = await registerController.post(input, res);
  expect(response).toBe("Username is already taken");
});