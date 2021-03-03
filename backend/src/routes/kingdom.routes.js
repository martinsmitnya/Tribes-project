import express from 'express';
const cors = require('cors');
import { resourceController, buildingController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/buildings', buildingController.get);
router.get('/resource', resourceController.get);

export default router;
