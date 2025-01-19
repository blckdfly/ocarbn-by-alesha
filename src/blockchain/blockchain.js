import { ethers } from "ethers";
import abi from './BlueCarbonMarketplace.json';

const contractAddress = "0xa91c01a629a5cd471343e38a9bac032a2f407ba7";

export const getContract = async () => {
    if (!window.ethereum) {
        alert("Metamask is not installed!");
        return null;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, abi, signer);
};
