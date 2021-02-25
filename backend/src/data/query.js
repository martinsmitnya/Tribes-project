export const getResource = 'SELECT * FROM resources WHERE kingdomId=0';
export const postResource =
  'UPDATE resources SET amount=?, updated_at=? WHERE type=? AND kingdomId=0';
