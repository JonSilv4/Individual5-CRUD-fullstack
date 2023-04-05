import express from "express";
import { addcamisa, deletecamisa, getcamisas, updatecamisa } from "../controllers/camisa.js";

const router = express.Router()

router.get("/", getcamisas)

router.post("/", addcamisa)

router.put("/:id", updatecamisa)

router.delete("/:id", deletecamisa)

export default router