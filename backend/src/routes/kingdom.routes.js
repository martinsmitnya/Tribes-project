import express from 'express';
const cors = require('cors');
import { resourceController } from '../controllers';
import { mapController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/resource', resourceController.get);

router.get('/map', mapController.get);

export default router;
