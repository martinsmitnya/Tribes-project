import request from 'supertest';
import app from '../src/app';
import { userRepository } from '../src/data/user';
import { kingdomRepository } from '../src/data/kingdom';

jest.mock('../src/data/user');
jest.mock('../src/data/kingdom');

test('should respond with 400 - Unauthorized', done => {
  const registerData = {};

  request(app)
    .post('/api/register')
    .send(registerData)
    .set('Accept', 'text/html; charset=utf-8')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(400)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual({ error: 'Username and password are required.' });
      return done();
    });
});

test('should respond with 400 - Unauthorized', done => {
  const registerData = {
    password: 'Nyavogiur',
  };

  request(app)
    .post('/api/register')
    .send(registerData)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual({ error: 'Username is required.' });
      return done();
    });
});

// test('should respond with 400 - Unauthorized', done => {
//   const registerData = {
//     userName: 'Miau',
//   };

//   request(app)
//     .post('/api/register')
//     .send(registerData)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(400)
//     .end((err, data) => {
//       if (err) return done(err);
//       expect(data.body).toEqual({ error: 'Password is required.' });
//       return done();
//     });
// });

// test('should respond with 400 - Unauthorized', done => {
//   const registerData = {
//     userName: 'Miau',
//     password: 'Nyavogi',
//     kingdomName: 'Nyauvia',
//   };

//   request(app)
//     .post('/api/register')
//     .send(registerData)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(400)
//     .end((err, data) => {
//       if (err) return done(err);
//       expect(data.body).toEqual({ error: 'Password must be at least 8 characters.' });
//       return done();
//     });
// });

// test('should respond with 400 - Unauthorized', done => {
//   const registerData = {
//     userName: 'Miau',
//     password: 'Nyavogiur',
//     kingdomName: 'Nyauvia',
//   };

//   const dbUserData = [{
//     id: 1,
//     userName: 'Miau',
//     password: 'Nyavogiur',
//   }];

//   const dbKingdomData = [{
//     kingdomId: 2,
//     kingdomName: 'Nyauvia',
//     userId: 1
//   }];

//   userRepository.selectUserByUserName.mockResolvedValue({ results: dbUserData });
//   kingdomRepository.selectKingdomByKingdomName.mockResolvedValue({ results: dbKingdomData });

//   request(app)
//     .post('/api/register')
//     .send(registerData)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(400)
//     .end((err, data) => {
//       if (err) return done(err);
//       expect(data.body).toEqual({ error: 'Username and kingdom name are already taken.' });
//       return done();
//     });
// });

// test('should respond with 400 - Unauthorized', done => {
//   const registerData = {
//     userName: 'Miau',
//     password: 'Nyavogiur',
//     kingdomName: 'Nyauvia',
//   };

//   const dbUserData = [{
//     id: 1,
//     userName: 'Miau',
//     password: 'Nyavogiur',
//   }];

//   userRepository.selectUserByUserName.mockResolvedValue({ results: dbUserData });
//   kingdomRepository.selectKingdomByKingdomName.mockResolvedValue(undefined);

//   request(app)
//     .post('/api/register')
//     .send(registerData)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(400)
//     .end((err, data) => {
//       if (err) return done(err);
//       expect(data.body).toEqual({ error: 'Username is already taken.' });
//       return done();
//     });
// });

// test('should respond with 400 - Unauthorized', done => {
//   const registerData = {
//     userName: 'Miau',
//     password: 'Nyavogiur',
//     kingdomName: 'Nyauvia',
//   };

//   const dbKingdomData = [{
//     kingdomId: 2,
//     kingdomName: 'Nyauvia',
//     userId: 1
//   }];

//   userRepository.selectUserByUserName.mockResolvedValue(undefined);
//   kingdomRepository.selectKingdomByKingdomName.mockResolvedValue({ results: dbKingdomData });

//   request(app)
//     .post('/api/register')
//     .send(registerData)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(400)
//     .end((err, data) => {
//       if (err) return done(err);
//       expect(data.body).toEqual({ error: 'Kingdom name is already taken.' });
//       return done();
//     });
// });

// test('should respond with 200 - OK', done => {
//   const dbData = {
//     id: 1,
//     userName: 'Miau',
//     kingdomId: 2,
//   };

//   const registerData = {
//     userName: 'Miau',
//     password: 'Nyavogiur',
//     kingdomName: 'Nyauvia',
//   };

//   const dbUserData = [{
//     id: 1,
//     userName: 'Miau',
//     password: 'Nyavogiur',
//   }];

//   const dbKingdomData = [{
//     kingdomId: 2,
//     kingdomName: 'Nyauvia',
//     userId: 1
//   }];

//   userRepository.selectUserByUserName.mockResolvedValue(undefined);
//   kingdomRepository.selectKingdomByKingdomName.mockResolvedValue(undefined);
//   userRepository.insertUser.mockResolvedValue(dbUserData[0].id);
//   kingdomRepository.insertKingdom.mockResolvedValue(dbKingdomData[0].kingdomId);

//   request(app)
//     .post('/api/register')
//     .send(registerData)
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end((err, data) => {
//       if (err) return done(err);
//       expect(data.body).toEqual(dbData);
//       return done();
//     });
// });