import express from 'express';
const cors = require('cors');
import {
  helloController,
  registerController,
  loginController,
} from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.post('/register', registerController.post);
router.post('/login', loginController.post);

export default router;
