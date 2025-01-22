import express from 'express';
import { addGame, getGames, searchGames, upload } from "../controllers/game_controller.js";

const router = express.Router();

// Middleware untuk menyajikan file statis dari folder "uploads"
router.use('/uploads', express.static('uploads'));

router.get('/games', getGames);
router.get('/games/search', searchGames);
router.post("/api/games", upload.single("cover"), addGame);

export default router;
