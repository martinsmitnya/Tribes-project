import express from 'express';
const cors = require('cors');
import { resourceController, buildingController, oneBuildingContoroller } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/buildings', buildingController.get);
router.get('/resource', resourceController.get);
router.get('/buildings/:buildingId', oneBuildingContoroller.get)

export default router;
