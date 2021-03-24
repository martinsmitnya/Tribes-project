import { kingdomRepository } from '../repositories/kingdom';
import { userRepository } from '../repositories/user';
import { passwordEncrypter } from '../middlewares/passwordEncrypter';

export const registerService = {
  async postRegister(username, passwordhash, kingdom_name) {
    if (!username && !passwordhash) {
      throw { message: 'Please fill out the input fields', status: 400 };
    }

    if (!kingdom_name) {
      kingdom_name = `${username}'s kingdom`;
    }

    const checkIfUsernameIsValid = await userRepository.getUserByUsername(
      username
    );
    if (checkIfUsernameIsValid) {
      throw { message: 'Username is already taken', status: 400 };
    }

    const checkIfKingdomNameisValid = await kingdomRepository.getKingdomByKingdomName(
      kingdom_name
    );
    if (checkIfKingdomNameisValid) {
      throw { message: 'Kingdom name is already taken', status: 400 };
    }

    const password = await passwordEncrypter.encrypt(passwordhash);
    const userId = await userRepository.insertNewUser(username, password);
    const newKingdom = await kingdomRepository.insertKingdom(
      kingdom_name,
      userId
    );
    try {
      await userRepository.insertNewResource(newKingdom);
      await userRepository.insertNewTownhall(newKingdom);
      await userRepository.insertNewTroops(newKingdom);
    } catch (error) {
      throw error;
    }

    const data = {
      status: 200,
      id: userId,
      username: username,
      kingdomId: newKingdom,
    };
    return data;
  },
};
