import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

// connect to Metamask
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// contract details
const contractAddress = "0xYourContractAddress";
const contractABI = [ /* ABI JSON here */ ];

// instance of the contract
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// example: call a function
async function readData() {
    const value = await contract.somePublicVariable();
    console.log("Value from contract:", value);
}

async function writeData() {
    const tx = await contract.updateValue(42);
    await tx.wait();
    console.log("Transaction confirmed!");
}
