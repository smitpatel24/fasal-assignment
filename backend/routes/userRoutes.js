import express from "express";
import {
  getUsers,
  login,
  register,
  // updateUserProfile,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getUsers);
// router.put('/',updateUserProfile);
export default router;
