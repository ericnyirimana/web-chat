import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class Helper {
  static generateToken(userinfo) {
    const Issuetoken = jwt.sign(userinfo, process.env.SECRET, {
      expiresIn: '1d'
    });
    return Issuetoken;
  }
  static hashPassword(password) {
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    return hashedPassword;
  }
  static comparePassword(passwordHash, password) {
    const comparedPassword = bcrypt.compareSync(password, passwordHash);
    return comparedPassword;
  }
  static async findRecord(model, search) {
    const existing = await model.findOne({ where: search });
    return existing;
  }
}

export default Helper;
