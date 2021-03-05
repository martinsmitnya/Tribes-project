import express from 'express';
const cors = require('cors');
import { resourceController, buildingController, settingsController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/buildings', buildingController.get);
router.get('/resource', resourceController.get);
router.put('/', settingsController.put);
export default router;
