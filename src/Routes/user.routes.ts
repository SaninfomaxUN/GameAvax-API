import express from 'express';
import userController from '../Controllers/user.controller';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is the landing page users");
});

router.get('/getId', userController.getId);
router.post('/sedId', userController.setId);
router.get('/getCoins', userController.getCoins);
router.get('/getSkins', userController.getSkins);
router.get('/getProgress', userController.getProgress);

export default router;