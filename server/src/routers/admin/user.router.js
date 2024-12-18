const express = require('express');
const router = express.Router();
const AdminUserController = require('../../controllers/admin/user.controller')

router.post("/", AdminUserController.createUser)

router.get("/", AdminUserController.getAllUsers)

router.get("/:userId", AdminUserController.getUser)

router.get("/profile", AdminUserController.getUser)

router.put("/profile", AdminUserController.updateUser)

router.put("/:userId", AdminUserController.updateUser)

router.put("/role/:userId", AdminUserController.changeRole)

router.delete("/:userId", AdminUserController.deleteUser)


module.exports = router;
