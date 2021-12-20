import mongoose from "mongoose";

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

    smartId: {
      type: String,
      unique: true,
      required: true,
    },

    poster: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const Favourites = mongoose.model("Favourites", FavouriteSchema);
export default Favourites;
