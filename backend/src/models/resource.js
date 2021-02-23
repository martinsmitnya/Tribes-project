import { db } from '../data/connection';

async function resource() {
  try {
    const result = await db.query('SELECT * FROM resources ');
    return result.results;
  } catch (error) {
    console.log(error);
  }
}

exports.resource = resource();
