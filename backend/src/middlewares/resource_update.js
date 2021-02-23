import { resource } from '../models/resource';
import { db } from '../data/connection';

db.query('UPDATE resources SET amount=2');

export const updatedResource = resource;
