import express from 'express';
const cors = require('cors');
import { resource } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/resource', helloController.get);

export default router;