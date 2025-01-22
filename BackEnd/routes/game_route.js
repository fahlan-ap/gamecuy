import express from 'express';
import {getGames, searchGames,} from "../controllers/game_controller.js";

const router = express.Router();

router.get('/games', getGames);
router.get('/games/search', searchGames);

export default router;