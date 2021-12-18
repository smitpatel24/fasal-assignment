import Favourites from '../models/favListModel.js';
import asyncHandler from 'express-async-handler';

const getAll = asyncHandler(async (req, res) => {
    const list = await Favourites.find({});
    res.json(list);
  });

  const byUserId = asyncHandler(async (req, res) => {
    const list = await Favourites.find({userId: req.query.userId, active: true});
    res.json(list);
  });

  const updateFav = asyncHandler(async (req, res) => {
    const list = await Favourites.findByIdAndUpdate(req.query.favId, {$set: req.body}, {$upsert: true, new: true});
    res.json(list);
  });

  const addFav = asyncHandler(async (req, res) => {
    const { title, year, imdbId, poster, userId} = req.body;
    const favExist = await Favourites.findOne({ imdbId });
  
    if (favExist) {
      res.status(400);
      throw new Error('User already Exist');
    }
  
    const fav = await Favourites.create({ title, year, imdbId, poster, userId });
    res.status(201).json({fav})
  
  });

  export { getAll, addFav, byUserId, updateFav };