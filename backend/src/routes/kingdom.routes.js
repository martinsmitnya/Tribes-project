import express from 'express';
const cors = require('cors');
import { resourceController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/resource', resourceController.get);

export default router;