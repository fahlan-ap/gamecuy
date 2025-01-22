import Game from "../models/game.js";

export const getGames = async(req, res) => {
    try {
        const response = await Game.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const searchGames = async (req, res) => {
    try {
        const { query } = req.query; // Ambil input pencarian dari query parameter
        if (!query) return res.json([]); // Jika query kosong, kembalikan array kosong

        const games = await GameTable.findAll({
            where: {
                name: { [Op.like]: `%${query}%` } // Mencari game dengan nama yang mengandung teks pencarian
            }
        });

        res.json(games);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};