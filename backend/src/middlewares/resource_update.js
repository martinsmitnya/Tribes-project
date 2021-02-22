import { resource } from '../models/resource';

resource.forEach(element => {
  let dateNow = Date.now() / 1000;
  element.amount +=
    element.generation * Math.floor((dateNow - element.updatedAt) / 60);
  element.updatedAt = Math.floor(dateNow);
});

export const updatedResource = resource;
