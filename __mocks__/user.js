export const userMock = {
  google: {
    user: {
      firstName: 'First',
      lastName: 'Last',
      email: 'test@gmail.com',
      password: '10897897755435679',
      provider: 'google',
      image: 'https://img.com'
    }
  },
  facebook: {
    provider: 'facebook',
    id: '666614366343636753',
    name: { familyName: 'Test' },
    token: 'EAALgGTpyC'
  },
  noEmail: {
    user: {
      firstName: 'First',
      lastName: 'Last',
      password: '10897897755435679',
      provider: 'google',
      image: 'https://img.com'
    }
  },
  wrongPassword: {
    user: {
      firstName: 'First',
      lastName: 'Last',
      email: 'test@gmail.com',
      password: '10897897755679',
      provider: 'google',
      image: 'https://img.com'
    }
  }
};
