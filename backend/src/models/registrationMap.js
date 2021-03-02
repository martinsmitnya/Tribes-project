import { db } from '../data/connection';
import { getKingdomsInfoQuery } from '../data/getKingdomsInfoQuery';

export async function getKingdomsInfo() {
  try {
    const queryResult = await db.query(getKingdomsInfoQuery);
    // return queryResult.results;
    console.log(queryResult.results)
    return queryResult.results
  } catch (error) {
    console.log(error);
  }
}

console.log(getKingdomsInfo())






