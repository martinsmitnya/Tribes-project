import { db } from '../data/connection';
import { postBuilding } from '../data/query';

async function newBuilding(type, hp, end) {
  try {
    await db.query(postBuilding, [
      type,
      hp,
      Math.floor(Date.now() / 1000),
      Math.floor(Date.now() / 1000) + end,
    ]);
    return { status: 200, result: 'Successfully added new building' };
  } catch (error) {
    console.log(error);
  }
}

exports.newBuilding = newBuilding;
