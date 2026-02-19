import express from "express";
import { getBook } from "../controller/book.controler.js";
import e from "express";

const router = express.Router();

router.get("/", getBook);

export default router;
 