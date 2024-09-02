import { Request, Response } from 'express';
import {getUserByEmail, registerUser, getEmailById} from "../Services/contractServiceUser";

class userController {

    //Get a user by email
    public async getUserByEmail(req: Request, res: Response): Promise<Response> {
        try {
            const email = req.body.email;
            //----
            const receipt = await getUserByEmail(email);
            return res.status(200).json({receipt});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

    //Get a user by id
    public async getEmailById(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            //----
            const receipt = await getEmailById(id);
            return res.status(200).json({"email": receipt});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

    //Register a new user
    public async registerUser(req: Request, res: Response): Promise<Response> {
        try {
            const email = req.body.email;
            const name = req.body.name;
            //----
            const receipt = await registerUser(email, name);
            console.log(receipt);
            //----
            return res.status(200).json({message: "User created successfully"});
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({error: err.message});
        }
    }

}export default new userController();