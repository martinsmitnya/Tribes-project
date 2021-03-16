import express from 'express';
const cors = require('cors');
import {
  resourceController,
  buildingController,
  newBuildingController,
  settingsController,
  kingdomNameController
} from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/buildings', buildingController.get);
router.post('/buildings/newBuilding', newBuildingController.post);
router.get('/resource', resourceController.get);
router.get('/name', kingdomNameController.get);

router.put('/', settingsController.put);

export default router;