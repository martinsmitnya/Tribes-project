export const addKingdom = 'INSERT INTO kingdoms (kingdom_name, user_id) VALUES (?,?);';
export const getUserId = 'SELECT user_id FROM users WHERE user_id = (SELECT MAX(user_id) FROM users);';
export const getSameKingdomName = 'SELECT kingdom_name FROM kingdoms WHERE kingdom_name = ?;';