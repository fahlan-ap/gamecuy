const db = require("../db"); // Import koneksi database

const Wishlist = {
  // Fungsi untuk mendapatkan semua wishlist berdasarkan user_id
  getByUserId: (user_id, callback) => {
    const query = `
      SELECT w.id, g.name, g.price, g.genre, g.cover 
      FROM wishlist w
      JOIN games g ON w.game_id = g.id
      WHERE w.user_id = ?
    `;
    db.query(query, [user_id], callback);
  },

  // Fungsi untuk menambahkan game ke wishlist
  add: (user_id, game_id, callback) => {
    const query = "INSERT INTO wishlist (user_id, game_id, created_at) VALUES (?, ?, NOW())";
    db.query(query, [user_id, game_id], callback);
  },

  // Fungsi untuk menghapus game dari wishlist
  remove: (id, callback) => {
    const query = "DELETE FROM wishlist WHERE id = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Wishlist;
