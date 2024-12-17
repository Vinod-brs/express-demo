import express from 'express'
import { getProfile, getAllProfile, createUser, updateUser, deleteUser } from '../controller/userController.js';

 const router = express.Router()

router.use("/all", getAllProfile)
router.post("/", createUser)
router.get("/:userId", getProfile)
router.put("/:userId", updateUser)
router.delete("/:userId", deleteUser)


export default router