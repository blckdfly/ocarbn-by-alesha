import React, { useState } from "react";
import { getContract } from "../blockchain/blockchain";
import "../styles/Transaction.css";

const Transaction = () => {
    const [tonnes, setTonnes] = useState(0);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [projectId, setProjectId] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);

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
            <h2>Retire Carbon Credits</h2>

            <div className="row">
                <label className="form-label">Project ID</label>
                <input
                    type="number"
                    className="form-input"
                    placeholder="Project ID"
                    value={projectId}
                    onChange={(e) => setProjectId(e.target.value)}
                />
            </div>

            <div className="row">
                <label className="form-label">How Many Tonnes?</label>
                <input
                    type="number"
                    className="form-input"
                    placeholder="Tonnes"
                    value={tonnes}
                    onChange={(e) => setTonnes(e.target.value)}
                />
            </div>

            <div className="row">
                <label className="form-label">Your Name</label>
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