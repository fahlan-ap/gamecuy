import express from 'express';
import {getGames, getGamesbyId,} from "../controllers/game_controller.js";

const router = express.Router();

router.get('/games', getGames);
router.get('/games/:id', getGamesbyId);

export default router;