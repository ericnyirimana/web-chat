import passport from 'passport';
import { facebookStrategy, googleStrategy } from './strategy';

class Strategy {
  constructor() {
    this.facecookStrategy = passport.use(facebookStrategy);
    this.googleStrategy = passport.use(googleStrategy);
  }

  strategyTouse(strategy) {
    this.strategy = `${strategy}`;
    return this.strategy;
  }
}

export default Strategy;
