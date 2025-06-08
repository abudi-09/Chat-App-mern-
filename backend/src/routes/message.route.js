import express from "express";
import { ProtectRoute } from "../middleware/auth.middleware";
const router = express.Router();
route.get("/users", ProtectRoute, getUsersForsidebar);
route.get("/:id", ProtectRoute, getMessages);
router.post("/send", ProtectRoute, sendMessage);
export default router;
