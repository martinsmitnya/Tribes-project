export const getKingdomsInfo =`SELECT kingdoms.id, kingdom_name, COUNT(kingdom_id) AS "population", location FROM kingdoms
INNER JOIN troops
ON kingdoms.id = troops.kingdom_id
GROUP BY kingdom_id;`;