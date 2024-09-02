import { Request, Response } from 'express';
import {getProgress, updateProgress, decrementLivesUser, incrementLivesUser, resetLivesUser} from "../Services/contractServiceProgress";

class progressController {
    //Get the progress of a user
    public async getProgress(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            //----
            const receipt = await getProgress(id);
            return res.status(200).json({receipt});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

    //Update the progress of a user
    public async updateProgress(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            const seasonId = req.body.seasonId;
            const levelId = req.body.levelId;
            const progress = req.body.progress;
            //----
            const receipt = await updateProgress(id, seasonId, levelId, progress);
            console.log(receipt);
            //----
            return res.status(200).json({message: "Progress updated successfully"});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

    //Decrease the lives of a user
    public async decrementLivesUser(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            //----
            const receipt = await decrementLivesUser(id);
            console.log(receipt);
            //----

            return res.status(200).json({message: "Lives decremented successfully"});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

    //Increase the lives of a user
    public async incrementLivesUser(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            //----
            const receipt = await incrementLivesUser(id);
            console.log(receipt);
            //----

            return res.status(200).json({message: "Lives incremented successfully"});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

    //reset the lives of a user
    public async resetLivesUser(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            //----
            const receipt = await resetLivesUser(id);
            console.log(receipt);
            //----

            return res.status(200).json({message: "Lives reset successfully"});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

} export default new progressController();