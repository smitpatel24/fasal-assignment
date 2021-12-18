import mongoose from 'mongoose';

const FavouriteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    imdbId: {
      type: String,
      unique: true,
    },

    poster: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);
const Favourites = mongoose.model('Favourites', FavouriteSchema);
export default Favourites;
