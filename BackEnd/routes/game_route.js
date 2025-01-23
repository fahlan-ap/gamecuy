import express from 'express';
import { addGame, getGames, searchGames, upload, deleteGame } from "../controllers/game_controller.js";

const router = express.Router();

router.use('/uploads', express.static('uploads'));

router.get('/games', getGames);
router.get('/games/search', searchGames);
router.post("/api/games", upload.single("cover"), addGame);
router.delete("/api/games/:id", deleteGame);

export default router;
