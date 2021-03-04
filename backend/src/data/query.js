export const getResource = 'SELECT * FROM resources WHERE kingdomId=1;';
export const postResource =
  'UPDATE resources SET amount=?, updated_at=? WHERE type=? AND kingdomId=1;';
export const getBuilding =
  'SELECT building_id,type,level,hp,started_at,finished_at FROM buildings WHERE kingdomId=1;';
export const postBuilding =
  'INSERT INTO buildings (type,level,hp,started_at,finished_at,kingdomId) VALUES (?,1,?,?,?,1);';
