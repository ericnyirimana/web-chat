import UserController from '../controllers/user.controller'

it('works with resolves', () => {
    // expect.assertions(1);
    return expect(UserController.socialAuth()).toBedefined;
  });