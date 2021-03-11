import express from 'express';
const cors = require('cors');
import {
  resourceController,
  buildingController,
  newBuildingController,
  oneBuildingContoroller
} from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/buildings', buildingController.get);
router.post('/buildings/newBuilding', newBuildingController.post);
router.get('/buildings/:buildingId', oneBuildingContoroller.get)
router.get('/resource', resourceController.get);

export default router;