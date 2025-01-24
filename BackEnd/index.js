import express from 'express';
import cors from 'cors';
import UserRoute from './routes/user_route.js';
import GameRoute from './routes/game_route.js';
import WishRoute from './routes/wishlist_route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use(UserRoute);
app.use(GameRoute);
app.use("/wishlist", WishRoute);

app.listen(3001, () => console.log('Server is running on port 3001'));