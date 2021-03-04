const bcrypt = require('bcrypt');

export const passwordEncrypter = {
  encrypt(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
  }

}