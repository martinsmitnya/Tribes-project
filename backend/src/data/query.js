export const getResource = 'SELECT * FROM resources WHERE kingdomId=1;';
export const postResource =
  'UPDATE resources SET amount=?, updated_at=? WHERE type=? AND kingdomId=1;';
export const addKingdom = 'INSERT INTO kingdoms (kingdom_name, user_id) VALUES (?,?);';
