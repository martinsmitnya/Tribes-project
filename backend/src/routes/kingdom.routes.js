import express from 'express';
const cors = require('cors');
<<<<<<< Updated upstream
import { resourceController, buildingController } from '../controllers';
=======
import { resourceController, mapController } from '../controllers';
>>>>>>> Stashed changes

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/buildings', buildingController.get);
router.get('/resource', resourceController.get);
<<<<<<< Updated upstream
=======
router.get('/map', mapController.get);
>>>>>>> Stashed changes

export default router;
