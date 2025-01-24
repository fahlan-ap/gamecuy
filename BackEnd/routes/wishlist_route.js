import express from "express";
import { getWishlistByUser, addToWishlist, removeFromWishlist } from "../controllers/wishlist_controller.js";

const router = express.Router();

// Mendapatkan wishlist berdasarkan user_id
router.get("/:userId", getWishlistByUser);

// Menambahkan game ke wishlist
router.post("/", addToWishlist);

// Menghapus game dari wishlist
router.delete("/:id", removeFromWishlist);

export default router;
