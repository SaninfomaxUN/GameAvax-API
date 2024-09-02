import Web3 from 'web3';
import dotenv from 'dotenv';
import contractABIProgress from '../Services/progressContract.json'; // Import the contract ABI

dotenv.config();

const rpcUrl = process.env.RPC;
const privateKey = process.env.PRIVATE_KEY;
if (!rpcUrl || !privateKey) {
    throw new Error('RPC URL or PRIVATE_KEY is not defined');
}

const web3 = new Web3(rpcUrl);

// Get the account from the private key
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

// Contract instance
const contractProgress = new web3.eth.Contract(
    contractABIProgress as any,
    process.env.CONTRACT_ADDRESS_PROGRESS
);


// Function to get the progress of a user
export const getProgress = async (_id: number): Promise<any> => {
    try {
        const receipt = await contractProgress.methods.getProgress(_id).call({
            from: account.address
        });

        // Check the transaction receipt and log the result
        console.log('Progress:', receipt);
        return receipt;

    } catch (error) {
        console.error("Error getting progress of user in contract:", error);
        throw error;
    }
};

// Function to update the progress of a user
export const updateProgress = async (_id: number, _seasonId: number, _levelId: number, _progress: number): Promise<any> => {
    try {
        const receipt = await contractProgress.methods.addLevelProgress(_id, _seasonId, _levelId, _progress).send({
            from: account.address
        });

        // Check the transaction receipt and log the result
        if (receipt.status) {
            console.log('Transaction successful:', receipt);
        } else {
            console.log('Transaction failed:', receipt);
        }

        return receipt;

    } catch (error) {
        console.error("Error updating progress of user in contract:", error);
        throw error;
    }
};


// Function to decrement lives of a user
export const decrementLivesUser = async (_id: number): Promise<any> => {
    try {
        const receipt = await contractProgress.methods.decreaseLives(_id).send({
            from: account.address
        });

        // Check the transaction receipt and log the result
        if (receipt.status) {
            console.log('Transaction successful:', receipt);
        } else {
            console.log('Transaction failed:', receipt);
        }

        return receipt;

    } catch (error) {
        console.error("Error decrementing lives of user in contract:", error);
        throw error;
    }
};

// Function to increment lives of a user
export const incrementLivesUser = async (_id: number): Promise<any> => {
    try {
        const receipt = await contractProgress.methods.increaseLives(_id).send({
            from: account.address
        });

        // Check the transaction receipt and log the result
        if (receipt.status) {
            console.log('Transaction successful:', receipt);
        } else {
            console.log('Transaction failed:', receipt);
        }

        return receipt;

    } catch (error) {
        console.error("Error incrementing lives of user in contract:", error);
        throw error;
    }
};

// Function to reset lives of a user
export const resetLivesUser = async (_id: number): Promise<any> => {
    try {
        const receipt = await contractProgress.methods.resetLives(_id).send({
            from: account.address
        });

        // Check the transaction receipt and log the result
        if (receipt.status) {
            console.log('Transaction successful:', receipt);
        } else {
            console.log('Transaction failed:', receipt);
        }

        return receipt;

    } catch (error) {
        console.error("Error resetting lives of user in contract:", error);
        throw error;
    }
};


