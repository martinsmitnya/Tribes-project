import { db } from '../data/connection';
import { postResource } from '../data/query';

export function updatedResource(resource) {
  let output = [];
  resource.then(result => {
    output = Update(result);
    db.query(postResource, [
      output[0].amount,
      output[0].updatedAt,
      output[0].type,
    ]);
    db.query(postResource, [
      output[1].amount,
      output[1].updatedAt,
      output[1].type,
    ]);
  });
  return resource;
}

function Update(input) {
  let currentDate = Math.floor(Date.now() / 1000);
  let output = [];
  input.forEach(element => {
    let amount = element.amount;
    element.amount +=
      element.generation * Math.floor((currentDate - element.updatedAt) / 60);

    if (amount != element.amount) {
      element.updatedAt = currentDate;
    }

    output.push(element);
  });
  return output;
}
