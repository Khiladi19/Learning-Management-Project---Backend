import { Router } from "express";
import { changePassword, forgotPassword, getprofileUser, loginUser, logoutUser, registgerUser, resetPassword } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";


const router = Router();

router.post("/reguser",upload.single("avatar"),registgerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);
router.get("/me",isLoggedIn,getprofileUser);
router.post("/reset", forgotPassword);
router.post("/reset/:resetToken", resetPassword);
router.post("/change-password", isLoggedIn, changePassword);


export default router;