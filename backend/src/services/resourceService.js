import { resource } from '../models/resource';

export const helloService = {
    async getResource() {
        return resource;
    },
};