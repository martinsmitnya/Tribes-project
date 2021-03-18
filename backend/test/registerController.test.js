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

// beforeAll(() => {
//   registerService.postRegister.mockResolvedValue(registerServiceData)
// })


test('Should return correct insertion message:', done => {
  const registerData = {
    username: 'Janos',
    password: 'jelszo123',
    kingdom_name: 'JanosKiralysaga'
  }
  registerService.postRegister.mockResolvedValue(registerServiceData)
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

test('Should return error with missing both inputs:', done => {
  const registerData = {
    username: '',
    password: '',
    kingdom_name: 'JanosKiralysaga'
  }
  registerService.postRegister.mockResolvedValue({ message: 'Please fill out the input fields', status:400})

  request(app)
    .post('/register')
    .send(registerData)
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual({ message: 'Please fill out the input fields', status:400});
      return done();
    })
})

test('Should return error with missing input with one input missing:', done => {
  const registerData = {
    username: 'Janos',
    password: '',
    kingdom_name: 'JanosKiralysaga'
  }
  registerService.postRegister.mockResolvedValue({ message: 'Please fill out the input fields', status:400})

  request(app)
    .post('/register')
    .send(registerData)
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual({ message: 'Please fill out the input fields', status:400});
      return done();
    })
})

test('Should return error with already used username:', done => {
  const registerData = {
    username: 'Martinka',
    password: 'password123',
    kingdom_name: 'JanosKiralysaga'
  }
  registerService.postRegister.mockResolvedValue({ message: 'Username is already taken', status: 400})

  request(app)
    .post('/register')
    .send(registerData)
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual({ message: 'Username is already taken', status: 400});
      return done();
    })
})

test('Should return error with already used kingodmname:', done => {
  const registerData = {
    username: 'Janos',
    password: 'password123',
    kingdom_name: 'MartinKiralysaga'
  }
  registerService.postRegister.mockResolvedValue({ message: 'Kingdom name is already taken', status: 400})

  request(app)
    .post('/register')
    .send(registerData)
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body).toEqual({ message: 'Kingdom name is already taken', status: 400});
      return done();
    })
})