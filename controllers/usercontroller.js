const User = require('../models/user');

class UserController {
  static registerUser(library, name) {
    const user = new User(name);
    library.registerUser(user);
    return user;
  }

  static getUser(library, userId) {
    return library.findUserById(userId);
  }
}

module.exports = UserController;
