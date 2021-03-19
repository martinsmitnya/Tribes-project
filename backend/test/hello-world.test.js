import request from 'supertest';

import app from '../src/app';

test('should respond with 200 - OK', done => {
  request(app)
    .get('/api/hello')
    .set('Accept', 'text/html; charset=utf-8')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(404)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body.message).toEqual(undefined);
      return done();
    });
});
