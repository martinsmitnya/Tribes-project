export const getKingdomsInfoQuery =`SELECT kingdoms.id, kingdom_name, COUNT(kingdom_id) AS "population", 
  location FROM kingdoms LEFT JOIN troops
  ON kingdoms.id = troops.kingdom_id
  GROUP BY kingdom_id;`;