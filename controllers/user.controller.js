import Helper from '../helpers';
import db from '../models';

const { Users } = db;

class UserController {
  static async socialAuth(req, res) {
    let userExist = '';
    if (req.user.email) {
      userExist = await Helper.findRecord(Users, {
        email: req.user.email
      });
    } else {
      return res.status(400).send('Oops! Email need to be provided.');
    }
    if (userExist) {
      const { password } = req.user;
      const isValidPassword = await Helper.comparePassword(userExist.dataValues.password, password);
      if (!isValidPassword) {
        return res.status(401).send('INVALID CREDENTIALS');
      }
      const token = await Helper.generateToken(userExist.dataValues);
      return res.status(200).send({
        status: 200,
        token
      });
    }
    const encryptedPassword = await Helper.hashPassword(req.user.password);
    const newUser = await Users.create({
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      password: encryptedPassword,
      image: req.user.image
    });
    const token = await Helper.generateToken(newUser.dataValues);
    return res.status(201).send({
      status: 201,
      token,
      data: {
        email: newUser.dataValues.email
      }
    });
  }
}

export default UserController;
