import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
import PassportHelper from '../../helpers/passport';

const facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `${process.env.BASE_URL}/api/v1/auth/facebook/callback`,
    profileFields: ['id', 'emails', 'name']
  },
  PassportHelper.verifyCallback
);

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_APP_SECRET,
    callbackURL: `${process.env.BASE_URL}/api/v1/auth/google/callback`,
  },
  PassportHelper.verifyCallback
);

export { facebookStrategy, googleStrategy };
