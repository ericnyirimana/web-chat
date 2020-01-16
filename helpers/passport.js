class PassportHelper {
  static async verifyCallback(accessToken, refreshToken, profile, done) {
    let user;
    try {
      let username = '';
      let email = '';
      const image = profile.photos ? profile.photos[0].value : '';
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;
      if (profile.provider === 'google') {
        email = profile.emails ? profile.emails[0].value : '';
        username = email.substring(0, email.indexOf('@'));
      } else {
        const userName =
          profile.username || profile.name.familyName || profile.name.givenName;
        username = userName;
      }
      user = {
        firstName,
        lastName,
        username,
        email,
        password: profile.id,
        provider: profile.provider,
        image
      };
      done(null, user);
    } catch (error) {
      done(error, false, error.message);
    }
  }
}

export default PassportHelper;
