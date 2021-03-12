import request from 'supertest';
import app from '../src/app';
import { userRepository } from '../src/repositories/user'
import { loginTokenCreator } from '../src/middlewares/loginTokenCreator'

jest.mock('../src/repositories/user');
jest.mock('../src/middlewares/loginTokenCreator');

const userTableData = {
  username: 'Mate',
}
userRepository.getUserByUsernameAndPassword.mockResolvedValue(userTableData.username);
loginTokenCreator.tokenCreator.mockResolvedValue(userTableData.username);

test('Username', done => {
  const inputData = {
    username: 'NOTMate12312321',
  }

  request(app)
    .post('/login/login')
    .send(inputData)
    .set('Accept', 'application/json')
    .expect('Content-type', 'application/json; charset=utf-8')
    .expect(400)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual('Password is required.');
      return done();
    })
})

test('Password', done => {
  const inputData = {
    password: 'NOTMate12312321',
  }

  request(app)
    .post('/login/login')
    .send(inputData)
    .set('Accept', 'application/json')
    .expect('Content-type', 'application/json; charset=utf-8')
    .expect(400)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual('Username is required.');
      return done();
    })
})

test('NO username OR password', done => {
  const inputData = {
    
  }

  request(app)
    .post('/login/login')
    .send(inputData)
    .set('Accept', 'application/json')
    .expect('Content-type', 'application/json; charset=utf-8')
    .expect(400)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual('All fields are required.');
      return done();
    })
})