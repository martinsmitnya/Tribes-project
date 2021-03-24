import { kingdomRepository } from '../repositories/kingdom';
import { updatedResource } from '../middlewares/resource_update';

export const kingdomService = {
  async getResource(token) {
    let kingdomId = null;
    console.log(token);
    if (token) {
      try {
        kingdomId = JSON.parse(token).kingdomId;
      } catch (err) {
        throw { status: 500, message: 'Invalid Token' };
      }
    } else {
      throw { status: 500, message: 'Missing Token' };
    }
    try {
      const result = await kingdomRepository.getResourceByKingdomId(kingdomId);
      return updatedResource(result);
    } catch (err) {
      return err;
    }
  },

  async getBuilding(token) {
    let kingdomId = null;
    if (token) {
      try {
        kingdomId = JSON.parse(token).kingdomId;
      } catch (err) {
        throw { status: 500, message: 'Invalid Token' };
      }
    } else {
      throw { status: 500, message: 'Missing Token' };
    }
    try {
      const result = await kingdomRepository.getBuildingsByKingdomId(kingdomId);
      return result;
    } catch (err) {
      throw { status: 500, message: 'Database Error' };
    }
  },

  async getTroops(token) {
    let kingdomId = null;
    if (token) {
      try {
        kingdomId = JSON.parse(token).kingdomId;
      } catch (err) {
        throw { status: 500, message: 'Invalid Token' };
      }
    } else {
      throw { status: 500, message: 'Missing Token' };
    }
    try {
      const result = await kingdomRepository.getTroopsInfoByKingdomId(
        kingdomId
      );
      return result;
    } catch (err) {
      throw { status: 500, message: 'Database Error' };
    }
  },

  async postBuilding(body, token) {
    let kingdomId = null;
    console.log(token);
    if (token) {
      try {
        kingdomId = JSON.parse(token).kingdomId;
      } catch (err) {
        throw { status: 500, message: 'Invalid Token' };
      }
    } else {
      throw { status: 500, message: 'Missing Token' };
    }
    if (body.type === 'farm' || body.type === 'mine') {
      (body.hp = 100), (body.end = 60), (body.price = 100);
    } else if (body.type === 'academy') {
      (body.hp = 150), (body.end = 90), (body.price = 150);
    } else {
      throw { status: 401, message: 'Not a valid building type' };
    }
    try {
      return kingdomRepository.insertBuildingByKingdomId(body, kingdomId);
    } catch (error) {
      return error;
    }
  },
};
