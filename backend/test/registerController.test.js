import request from 'supertest';
import app from '../src/app';
import { userRepository } from '../src/repositories/user'
import { kingdomRepository } from '../src/repositories/kingdom'

jest.mock('../src/repositories/user');
jest.mock('../src/repositories/kingdom');

const userTableData = [{
  id: 1,
  username: 'Mate',
  password: 'password123'
}]

const kingdomTableData = [{
  kingdomId: 2,
  kingdomname: 'MateKiralysaga',
  userId: 1
}]

const responseData = {
  status: 200,
  username: 'Mate',
  kingdomId: 2
}

userRepository.getUserByUsername.mockResolvedValue(userTableData[0].id);
userRepository.insertNewUser.mockResolvedValue(userTableData[0].kingdomId);
kingdomRepository.getKingdomByKingdomName.mockResolvedValue(kingdomTableData[0].id);
kingdomRepository.insertKingdom.mockResolvedValue(kingdomTableData[0].kingdomId);



test('should respond with 400 in case of empty request body', done => {
    const registerData = {}

    request(app)
      .post('/register')
      .send(registerData)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(400)
      .end((err, data) => {
          if (err) return done(err);
          expect (data.body).toEqual('Please fill out the input fields');
          return done();
      })
    })

    test('should respond with 400 in case of only username sent', done => {
    const registerData = {
      username: "Mate"
    }

    request(app)
      .post('/register')
      .send(registerData)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(400)
      .end((err, data) => {
          if (err) return done(err);
          expect (data.body).toEqual('Please fill out the input fields');
          return done();
      })
    })

  test('should respond with 200', done => {
    const registerData = {
      username: 'Mate',
      password: 'password123',
      kingdom_name: 'MateKiralysaga'
    }

    userRepository.getUserByUsername.mockResolvedValue(undefined);
    kingdomRepository.getKingdomByKingdomName.mockResolvedValue(undefined);

    request(app)
      .post('/register')
      .send(registerData)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, data) => {
          if (err) return done(err);
          expect (data.body).toEqual(responseData);
          return done();
      })
    })