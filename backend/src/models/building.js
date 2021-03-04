import { db } from '../data/connection';
import { getBuilding } from '../data/query';

async function building() {
  try {
    const result = await db.query(getBuilding);
    return result.results;
  } catch (error) {
    console.log(error);
  }
}

exports.building = building;
