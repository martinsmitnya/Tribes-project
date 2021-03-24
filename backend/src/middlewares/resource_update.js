import { db } from '../data/connection';
import { kingdomRepository } from '../repositories/kingdom';

export async function updatedResource(resource) {
  let output = [];
  await UpdateGen(resource, resource[0].kingdomId).then(result => {
    resource = result;
  });
  const query = `UPDATE resources SET amount=?, updated_at=? WHERE type=? AND kingdomId=${resource[0].kingdomId};`;
  output = UpdateAmount(resource);
  db.query(query, [output[0].amount, output[0].updated_at, output[0].type]);
  db.query(query, [output[1].amount, output[1].updated_at, output[1].type]);
  return resource;
}

function UpdateAmount(input) {
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

async function UpdateGen(resources, kingdomId) {
  let buildings = null;
  try {
    buildings = await (
      await kingdomRepository.getBuildingsByKingdomId(kingdomId)
    ).message;
  } catch (err) {
    console.error(err);
    return resources;
  }
  let goldGen = 0;
  let foodGen = 0;
  buildings.forEach(element => {
    if (element.type === 'farm') {
      foodGen += element.level * 5 + 5;
    } else if (element.type === 'mine') {
      goldGen += element.level * 5 + 5;
    }
  });
  resources.forEach(element => {
    if (element.type === 'gold') {
      element.generation = goldGen;
    } else if (element.type === 'food') {
      element.generation = foodGen;
    }
  });
  return resources;
}
