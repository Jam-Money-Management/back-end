import { expect, server, BASE_URL } from './setup';

describe('Test User Auth', () => {
  let userId;

  it('Sign up', (done) => {
    const data = {
      req: {
        username: 'test_username',
        email: 'test_email@gmail.com',
        password: 'test_password',
      },
      res: { result: 'result', token: 'token' },
    };
    server
      .post(`${BASE_URL}/signup`)
      .send(data.req)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property(data.res.result);
        expect(res.body).to.have.property(data.res.token);
        userId = res.body.result._id;
        done();
      });
  });

  it('Sign in', (done) => {
    const data = {
      req: {
        email: 'test_email@gmail.com',
        password: 'test_password',
      },
      res: { result: 'result', token: 'token' },
    };
    server
      .post(`${BASE_URL}/signin`)
      .send(data.req)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property(data.res.result);
        expect(res.body).to.have.property(data.res.token);
        done();
      });
  });
});
