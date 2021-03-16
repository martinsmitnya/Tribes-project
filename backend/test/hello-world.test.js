import request from 'supertest';

import app from '../src/app';

test('HEllo-word-test', done => {
  request(app)
    .get('/api/hello')
    .set('Accept', 'application/json')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(404)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body.message).toEqual(undefined);
      return done();
    });
});
