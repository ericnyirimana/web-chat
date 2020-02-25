import UserController from '../controllers/user.controller';
import userMock from '../__mocks__/user';

describe('UserController', () => {
  const res = {
    status() {
      return this;
    },
    send() {
      return this;
    }
  };
  it('Signup authentication', async () => {
    jest.spyOn(res, 'status');
    jest.spyOn(res, 'send');
    jest.spyOn(UserController, 'socialAuth');
    await UserController.socialAuth(userMock.google, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalled();
  });
  it('Test whether the email was not provided', async () => {
    jest.spyOn(res, 'status');
    jest.spyOn(res, 'send');
    jest.spyOn(UserController, 'socialAuth');
    await UserController.socialAuth(userMock.noEmail, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalled();
  });
  it('Login authentication', async () => {
    jest.spyOn(res, 'status');
    jest.spyOn(res, 'send');
    jest.spyOn(UserController, 'socialAuth');
    await UserController.socialAuth(userMock.google, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
  });
  it('Wrong password authentication', async () => {
    jest.spyOn(res, 'status');
    jest.spyOn(res, 'send');
    jest.spyOn(UserController, 'socialAuth');
    await UserController.socialAuth(userMock.wrongPassword, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalled();
  });
});
