import Helper from '../helpers';
import db from '../models';

const { User } = db;

class UserController {
  static async socialAuth(req, res) {
    let userExist = '';
    if (req.user.email) {
      userExist = await Helper.findRecord(User, {
        email: req.user.email
      });
    } else {
      userExist = await Helper.findRecord(User, {
        username: req.user.username
      });
    }
    if (userExist) {
      const { password } = req.user;
      const isValidPassword = Helper.comparePassword(userExist.dataValues.password, password);
      if(!isValidPassword){
        return res.status(401).send('INVALID CREDENTIALS');
      }
      const token = Helper.generateToken(userExist.dataValues);
      return res.status(200).send({
          status: res.statusCode,
          token
      })
    }
    const encryptedPassword = Helper.hashPassword(req.user.password);
    const newUser = await User.create({
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      username: req.user.username,
      email: req.user.email,
      password: encryptedPassword,
      image: req.user.image
    });
    if (newUser) {
      const token = Helper.generateToken(newUser.dataValues);
      return res.status(201).send({
        status: res.statusCode,
        token,
        data: {
          username: newUser.dataValues.username,
          email: newUser.dataValues.email
        }
      });
    }
    return res.status(500).send('INTERNAL SERVER ERROR');
  }
}

export default UserController;
