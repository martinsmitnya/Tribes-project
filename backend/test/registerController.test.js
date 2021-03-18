import request from 'supertest';
import app from '../src/app';
import { registerService } from '../src/services/registerService'

//Here
jest.mock('../src/services/registerService');

//HERE
const registerServiceData = {
  status: 200, 
  id: 12, 
  username: 'Janos', 
  kingdomId: 12
}

const registerServiceResponse = {
  status: 200,
  id: 12,
  username: "Janos",
  kingdomId: 12
}

beforeAll(() => {
  registerService.postRegister.mockResolvedValue(registerServiceData)
})


test('RegisterController unit test, with mocked service value:', done => {
  const registerData = {
    username: 'Janos',
    password: 'jelszo123',
    kingdom_name: 'JanosKiralysaga'
  }

  request(app)
    .post('/register')
    .send(registerData)
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual(registerServiceResponse);
      return done();
    })
})