import { db } from '../data/connection';

export function updatedResource(resource) {
  resource.then(result => {
    result[0].amount = 1;
    db.query('UPDATE resources SET amount=? WHERE type=?', [
      result[0].amount,
      'food',
    ]);
  });
  return resource;
}

function Update(input) {
  let currentDate = new Date();
  input.map(result => {});
}
