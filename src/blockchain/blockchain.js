import { ethers } from "ethers";
import abi from './BlueCarbonMarketplace.json';

const contractAddress = "0x8788CA0209e3f4952571D47Cd055bb76d6aB618c";

export const getContract = async () => {
    if (!window.ethereum) {
        alert("Metamask is not installed!");
        return null;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, abi, signer);
};