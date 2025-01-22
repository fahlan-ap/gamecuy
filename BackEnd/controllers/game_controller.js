import Game from "../models/game.js";
import { Op } from "sequelize";
import multer from "multer";
import path from "path";
import fs from "fs";

// Konfigurasi multer untuk menyimpan file ke folder uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = "uploads/";
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true }); // Pastikan folder "uploads" ada
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Gunakan nama asli file
    },
});

const upload = multer({ storage });

// Middleware ekspor `upload` agar bisa digunakan di `game_route.js`
export { upload };

// Mengambil data game
export const getGames = async (req, res) => {
    try {
        const response = await Game.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error fetching games" });
    }
};

// Tambah game baru dengan upload gambar
export const addGame = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Uploaded file:", req.file);

        if (!req.file) {
            return res.status(400).json({ message: "Cover is required" });
        }

        const newGame = await Game.create({
            name: req.body.name,
            cover: `../uploads/${req.file.originalname}`, // Path sesuai game lama
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

// Mencari game berdasarkan nama
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
