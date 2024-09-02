import express from 'express';
import userController from '../Controllers/user.controller';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is the landing page users");
});

router.post('/getUserByEmail', userController.getUserByEmail);
router.post('/getEmailById', userController.getEmailById);
router.post('/registerUser', userController.registerUser);

export default router;