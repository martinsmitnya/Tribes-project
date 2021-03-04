import { db } from '../data/connection';
import { postBuilding } from '../data/query';

async function newBuilding(type, hp, start) {
  try {
    const result = await db.query(postBuilding, [type, hp, start, start]);
    return { status: 200, result: 'Sikeres building hozzáadás' };
  } catch (error) {
    console.log(error);
  }
}

exports.building = building;
