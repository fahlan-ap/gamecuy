import Wishlist from "../models/wishlist.js";
import Game from "../models/game.js";
import User from "../models/user.js";

// Mendapatkan wishlist berdasarkan user_id
export const getWishlistByUser = async (req, res) => {
  try {
    const { userId } = req.params;  // Ambil userId dari URL
    const wishlist = await Wishlist.findAll({
      where: { userId },
      include: [{ model: Game, attributes: ["id", "name", "price", "genre", "cover"] }],
    });

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil wishlist", error: error.message });
  }
};

// Menambahkan game ke wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { userId, gameId } = req.body;
    
    // Periksa apakah user dan game ada
    const user = await User.findByPk(userId);
    const game = await Game.findByPk(gameId);
    
    if (!user || !game) {
      return res.status(404).json({ message: "User atau game tidak ditemukan" });
    }

    // Periksa apakah game sudah ada di wishlist
    const existingWishlist = await Wishlist.findOne({ where: { userId, gameId } });
    if (existingWishlist) {
      return res.status(400).json({ message: "Game sudah ada di wishlist" });
    }

    const wishlist = await Wishlist.create({ userId, gameId });
    res.status(201).json({ message: "Game berhasil ditambahkan ke wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ message: "Gagal menambahkan ke wishlist", error: error.message });
  }
};

// Menghapus game dari wishlist
export const removeFromWishlist = async (req, res) => {
  try {
    const { gameId } = req.body;
    const wishlist = await Wishlist.findByPk(gameId);

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist tidak ditemukan" });
    }

    await wishlist.destroy();
    res.status(200).json({ message: "Game berhasil dihapus dari wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus wishlist", error: error.message });
  }
};

