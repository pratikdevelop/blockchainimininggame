// utils/blockchain.js
import { ethers } from "ethers";

export const connectWallet = async () => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const userAddress = await signer.getAddress();
            return userAddress;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert("Please install MetaMask to play the game!");
    }
};
