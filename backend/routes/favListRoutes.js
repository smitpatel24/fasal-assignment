import express from 'express';
import {
  getAll,
  addFav,
  byUserId,
  updateFav
} from '../controllers/favListController.js';
const router = express.Router();

router.get('/getFav', getAll);
router.post('/addFav', addFav);
router.get('/byUserId', byUserId)
router.put('/updateFav', updateFav)
export default router;
