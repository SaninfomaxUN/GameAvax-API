import Web3 from 'web3';
import dotenv from 'dotenv';
import contractABI from '../Services/userContract.json'; // Import the contract ABI

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
const contract = new web3.eth.Contract(
    contractABI as any,
    process.env.CONTRACT_ADDRESS
);

// Function to get data from the contract
export const getContractValue = async (): Promise<any> => {
    try {
        return await contract.methods.getValue().call();
    } catch (error) {
        console.error("Error getting value from contract:", error);
        throw error;
    }
};

// Function to register a user in the contract
export const registerUser = async (_email: string, _name: string): Promise<any> => {
    try {
        const balance = await web3.eth.getBalance(account.address);
        console.log(`Account Balance: ${balance} Wei`);

        const receipt = await contract.methods.registerUser(_email, _name).send({
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
        console.error("Error registering user in contract:", error);
        throw error;
    }
};

// Function to get a user by email
export const getUserByEmail = async (_email: string): Promise<any> => {
    try {
        const receipt = await contract.methods.getUserByEmail(_email).send({
            from: account.address
        });
        return await contract.methods.getUserByEmail(_email).send({
            from: account.address
        });
    } catch (error) {
        console.error("Error getting user by email from contract:", error);
        throw error;
    }
};

// Function to get a user by id
export const getEmailById = async (_id: number): Promise<any> => {
    try {
        const receipt = await contract.methods.getEmailById(_id).send({
            from: account.address
        });
        return await contract.methods.getEmailById(_id).send({
            from: account.address
        });
    } catch (error) {
        console.error("Error getting user by id from contract:", error);
        throw error;
    }
};
