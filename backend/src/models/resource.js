import { db } from '../data/connection';
import { getResource } from '../data/query';

async function resource() {
  try {
    const result = await db.query(getResource);
    return result.results;
  } catch (error) {
    console.log(error);
  }
}

exports.resource = resource();
