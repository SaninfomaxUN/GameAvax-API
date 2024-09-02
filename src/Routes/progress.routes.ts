import express from 'express';
import progressController from '../Controllers/progress.controller';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is the landing page progress");
});

router.post('/getProgress', progressController.getProgress);
router.post('/updateProgress', progressController.updateProgress);
router.post('/decrementLivesUser', progressController.decrementLivesUser);
router.post('/incrementLivesUser', progressController.incrementLivesUser);
router.post('/resetLivesUser', progressController.resetLivesUser);

export default router;