import request from 'supertest';
import app from '../src/app';
import { kingdomRepository } from '../src/repositories/kingdom';
import { userRepository } from '../src/repositories/user'

jest.mock('../src/repositories/user');
jest.mock('../src/repositories/kingdom');



test('should respond with 400 in case of missing password', done => {
  const loginData = {
    username: 'Mate'
  }
  
  request(app)
  .post('/login/login')
  .send(loginData)
  .set('Accept', 'application/json')
  .expect('Content-type', /json/)
  .expect(400)
  .end((err, data) => {
    if (err) return done(err);
    expect (data.body).toEqual('Password is required.');
    return done();
  })
})

test('should respond with 400 in case of missing username', done => {
  const loginData = {
    password: 'jelszo12345'
  }
  
  request(app)
  .post('/login/login')
  .send(loginData)
  .set('Accept', 'application/json')
  .expect('Content-type', /json/)
  .expect(400)
  .end((err, data) => {
    if (err) return done(err);
    expect (data.body).toEqual('Username is required.');
    return done();
  })
})

test('should respond with 400 in case of missing username and password', done => {
  const loginData = {
  }
  
  request(app)
  .post('/login/login')
  .send(loginData)
  .set('Accept', 'application/json')
  .expect('Content-type', /json/)
  .expect(400)
  .end((err, data) => {
    if (err) return done(err);
    expect (data.body).toEqual('All fields are required.');
    return done();
  })
})


test('should respond with 200 in case of correct username and password', done => {
  const userTableData = {
    user_id: 96,
    username: 'Teszt',
    passwordhash: '$2b$10$sWDQS9BWC2/l/Z9UC2Ajjum.Eujq.bZV1BUGCTIfyny6IoxCmXXEe'
  }
  
  const kingdomData = [{
    id: 66,
    kingdom_name: `Teszt's kingdom`,
    user_id: 96,
    location: null
  }]

  userRepository.getUserByUsername.mockResolvedValue(userTableData)
  kingdomRepository.getKingdomInfoByUserId.mockResolvedValue(kingdomData)
  
  const loginData = {
    username: 'Teszt',
    password: 'jelszo123'
  }
    
      request(app)
        .post('/login/login')
        .send(loginData)
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, data) => {
            if (err) return done(err);
            expect(data.body).toHaveProperty('token');
            return done();
        })
      })