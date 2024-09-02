import { Request, Response, NextFunction } from 'express';
import Web3 from 'web3';
import {getUserByEmail, registerUser, getUserById} from "../Services/contractService";