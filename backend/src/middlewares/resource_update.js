import { db } from '../data/connection';

export function updatedResource(resource) {
  let output = [];
  const query = `UPDATE resources SET amount=?, updated_at=? WHERE type=? AND kingdomId=${resource[0].kingdomId};`;
  output = Update(resource);
  db.query(query, [output[0].amount, output[0].updated_at, output[0].type]);
  db.query(query, [output[1].amount, output[1].updated_at, output[1].type]);

  return resource;
}

function Update(input) {
  let currentDate = Math.floor(Date.now() / 1000);
  let output = [];
  input.forEach(element => {
    let amount = element.amount;
    element.amount +=
      element.generation * Math.floor((currentDate - element.updated_at) / 60);

    if (amount != element.amount) {
      element.updated_at = currentDate;
    }
    if (element.amount < 0) {
      element.amount = 0;
    }

    output.push(element);
  });
  return output;
}
