class PassportHelper {
  static async verifyCallback(accessToken, refreshToken, profile, done) {
    let user;
    try {
      const image = profile.photos ? profile.photos[0].value : '';
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;
      const email = profile.emails ? profile.emails[0].value : '';
      user = {
        firstName,
        lastName,
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
