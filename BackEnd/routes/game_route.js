import express from 'express';
import {getGames} from "../controllers/game_controller.js";

const router = express.Router();

router.get('/games', getGames);

export default router;