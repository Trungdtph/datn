import express from "express";

import {
  create, getAllBooking, updateBooking,

} from "../controller/booking";
import { isAdminMiddleware } from "../middleware";
import { loginMiddleware } from "../middleware";

const router = express.Router();

router.post("/", loginMiddleware, create);
router.patch("/:id", loginMiddleware, updateBooking);
router.get("/", getAllBooking);
// router.get("/get/:id", getProductDetails);
// router.delete("/:id", isAdminMiddleware, remove);

export default router;
