import { resource } from '../models/helloWorld';

export const helloService = {
    async getResource() {
        return resource;
    },
};