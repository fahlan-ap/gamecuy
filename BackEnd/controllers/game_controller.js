import Game from "../models/game.js";
import { Op } from "sequelize";
import multer from "multer";
import path from "path";
import fs from "fs";

// config mutler untuk opload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = "uploads/";
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// middleware untuk upload file
export { upload };

// fungsi ambil data game
export const getGames = async (req, res) => {
    try {
        const response = await Game.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error fetching games" });
    }
};

// fungsi tambah game
export const addGame = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Uploaded file:", req.file);

        if (!req.file) {
            return res.status(400).json({ message: "Cover is required" });
        }

        const newGame = await Game.create({
            name: req.body.name,
            cover: `../uploads/${req.file.originalname}`,
            desc: req.body.desc,
            price: req.body.price,
            genre: req.body.genre,
            license: req.body.license,
        });

        res.status(201).json({ message: "Game added successfully", data: newGame });
    } catch (error) {
        console.error("Error adding game:", error);
        res.status(500).json({ message: error.message });
    }
};

// fungsi edit game
export const updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, desc, price, genre, license } = req.body;

        const game = await Game.findByPk(id);
        if (!game) {
            return res.status(404).json({ message: "Game tidak ditemukan" });
        }

        let coverPath = game.cover;

        if (req.file) {
            const oldCoverPath = path.join("uploads", path.basename(game.cover));
            if (fs.existsSync(oldCoverPath)) {
                fs.unlinkSync(oldCoverPath);
            }
            coverPath = `../uploads/${req.file.originalname}`;
        }

        await game.update({
            name,
            desc,
            price,
            genre,
            license,
            cover: coverPath
        });

        res.status(200).json({ message: "Game berhasil diperbarui", data: game });
    } catch (error) {
        console.error("Error updating game:", error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengupdate game" });
    }
};

// fungsi hapus game
export const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;

        const game = await Game.findByPk(id);
        if (!game) {
            return res.status(404).json({ message: "Game tidak ditemukan" });
        }

        if (game.cover) {
            const filePath = path.join("uploads", path.basename(game.cover));
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }

        await game.destroy();
        res.json({ message: "Game berhasil dihapus" });

    } catch (error) {
        console.error("Error deleting game:", error);
        res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
};

// fungsi pencarian game
export const searchGames = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) return res.json([]);

        const games = await Game.findAll({
            where: {
                name: { [Op.like]: `%${query}%` }
            }
        });

        res.json(games);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error searching games" });
    }
};
