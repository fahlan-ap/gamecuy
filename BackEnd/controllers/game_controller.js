import Game from "../models/game.js";

export const getGames = async(req, res) => {
    try {
        const response = await Game.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getGamesbyId = async(req, res) => {
    try {
        const response = await Game.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}