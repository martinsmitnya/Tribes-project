import { db } from '../data/connection';
import { postBuilding, getResourceAmount } from '../data/query';
import { updatedResource } from '../middlewares/resource_update';
import { resource } from '../models/resource';

async function newBuilding(body) {
  try {
    const gold = await db.query(getResourceAmount, ['gold']);
    if (body.price > gold.results[0].amount) {
      return { status: '400', error: 'Not enough gold' };
    } else {
      await db.query(postBuilding, [
        body.type,
        body.hp,
        Math.floor(Date.now() / 1000),
        Math.floor(Date.now() / 1000) + body.end,
      ]);
      const result = await resource;
      result[1].amount -= body.price;
      updatedResource(result);
      return { status: 200, result: 'Successfully added new building' };
    }
  } catch (error) {
    console.log(error);
  }
}

exports.newBuilding = newBuilding;
