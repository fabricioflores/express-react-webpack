import test from 'ava';
import { connectDB, dropDB } from './mocks/db';
import request from 'supertest';
import app from '../server/server';

test.beforeEach('connect with mongodb', t => {
  connectDB(t, (err) => {
    console.log(err)
  });
});

test.afterEach.always(t => {
  dropDB(t);
});

test.serial('Should get the user', async t => {
  t.plan(2)
  const res = await request(app)
    .get('/user')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.deepEqual(res.body, { name: 'tobi' });
});
