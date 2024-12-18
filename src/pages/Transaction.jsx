import React, { useState } from "react";
import { getContract } from "../blockchain/blockchain";
import "../styles/Transaction.css";
import { useParams } from "react-router-dom"; 
import headerDetailConservation from '../assets/project/header-detail-conservation.png';

const Transaction = () => {
    const [tonnes, setTonnes] = useState(0);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [projectId, setProjectId] = useState(useParams().projectId);
    
    const handleRetireCredits = async () => {
        if (!tonnes || !name || !message) {
            alert("Please fill out all fields before retiring credits.");
            return;
        }

        try {
            setIsProcessing(true);
            const contract = await getContract();

            const amount = parseInt(tonnes);

            const tx = await contract.retireCredits(projectId, amount, name, message, {
                gasLimit: 300000,
            });
            console.log("Transaction sent:", tx.hash);

            await tx.wait();
            console.log("Transaction confirmed:", tx);
            alert("Credits successfully retired!");
        } catch (error) {
            console.error("Error retiring credits:", error);
            alert("Transaction failed!");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container-transaction">
            <div className="gradient-circle"></div>
            <div className='detail-conservation-header'>
                <img src={headerDetailConservation} alt="Header Detail Conservation" />
            </div>

            <h2>Retire Carbon Credits</h2>
            <p>You are retiring carbon credits from this project. The information below will be broadcasted publicly and can be used to verify your environmental claim. This transaction is permanent; the information cannot be edited once your transaction is complete so be sure to confirm everything is correct before continuing. You can retire these credits for yourself or on behalf of another person or organization.</p>

            <div className="row">
                <label className="form-label">Project ID: </label>

                <input
                    type="number"
                    className="form-input"
                    placeholder="Project ID"
                    value={projectId}
                    onChange={(e) => setProjectId(e.target.value)}
                />
            </div>

            <div className="row">
                <label className="form-label">How Many tonnes of carbon do you want to remove?</label>
                <div className="availability">
                    <h5>Available tonnes</h5>
                </div>
                <input
                    type="number"
                    className="form-input"
                    placeholder="Tonnes"
                    value={tonnes}
                    onChange={(e) => setTonnes(e.target.value)}
                />
            </div>

            <div className="row">
                <label className="form-label">Who will this retirement be credited to?</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Retiree Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="row">
                <label className="form-label">Retirement Message</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div className="row">
                <div className="warning-logo">

                </div>
                <div className="warning-desc">
                    <p>Before submitting, please double-check that your retirement name or message does not contain any sensitive personal information, such as email addresses, phone numbers, or private details. Once this information is submitted, it will be permanently recorded on a public blockchain, where it cannot be edited, altered, or removed. This ensures transparency and security, but it also means that any information you provide will be visible to the public indefinitely. Please proceed carefully to protect your privacy and maintain the integrity of your data.</p>
                </div>
            </div>

            <button
                type="submit"
                className="submit-button"
                onClick={handleRetireCredits}
                disabled={isProcessing}
            >
                {isProcessing ? "Processing..." : "Retire Credits"}
            </button>
        </div>
    );
};

export default Transaction;
