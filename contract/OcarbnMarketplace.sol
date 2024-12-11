// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/OCBNToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract BlueCarbonMarketplace is Ownable, ReentrancyGuard {
    struct Project {
        address owner;
        string name;
        string description;
        uint256 availableCredits;
        uint256 pricePerCredit;
        bool isVerified;
    }

    BlueCarbonToken public token;
    mapping(uint256 => Project) public projects;
    uint256 public projectCount;

    struct Retirement {
        uint256 projectId;
        address retiree;
        string retireeName;
        string message;
        uint256 amount;
        uint256 totalCost;
        uint256 timestamp;
    }

    mapping(uint256 => Retirement) public retirements;
    uint256 public retirementCount;

    event ProjectAdded(uint256 indexed projectId, address indexed owner, string name);
    event ProjectVerified(uint256 indexed projectId);
    event CreditsPurchased(uint256 indexed projectId, address indexed buyer, uint256 amount);
    event CreditsRetired(
        uint256 indexed retirementId,
        uint256 indexed projectId,
        address indexed retiree,
        string retireeName,
        string message,
        uint256 amount,
        uint256 totalCost
    );

    constructor(address tokenAddress) Ownable(msg.sender) {
    token = BlueCarbonToken(tokenAddress);
}


    function addProject(string memory _name, string memory _description, uint256 _availableCredits, uint256 _pricePerCredit) external {
        require(_availableCredits > 0, "Credits must be greater than zero");
        require(_pricePerCredit > 0, "Price must be greater than zero");

        projectCount++;
        projects[projectCount] = Project({
            owner: msg.sender,
            name: _name,
            description: _description,
            availableCredits: _availableCredits,
            pricePerCredit: _pricePerCredit,
            isVerified: false
        });

        emit ProjectAdded(projectCount, msg.sender, _name);
    }

    function verifyProject(uint256 _projectId) external onlyOwner {
        require(_projectId <= projectCount, "Invalid project ID");
        require(!projects[_projectId].isVerified, "Project already verified");

        projects[_projectId].isVerified = true;
        emit ProjectVerified(_projectId);
    }

    function purchaseCredits(uint256 _projectId, uint256 _amount) external {
        require(_projectId <= projectCount, "Invalid project ID");
        Project storage project = projects[_projectId];
        require(project.isVerified, "Project is not verified");
        require(project.availableCredits >= _amount, "Not enough credits available");

        uint256 totalCost = project.pricePerCredit * _amount;
        require(token.balanceOf(msg.sender) >= totalCost, "Insufficient balance");

        // Transfer token from buyer to project owner
        token.transferFrom(msg.sender, project.owner, totalCost);
        project.availableCredits -= _amount;

        emit CreditsPurchased(_projectId, msg.sender, _amount);
    }

    function retireCredits(uint256 _projectId, uint256 _amount, string memory _retireeName, string memory _message) external nonReentrant {
        Project storage project = projects[_projectId];
        require(project.isVerified, "Project is not verified");
        require(_amount > 0, "Amount must be greater than zero");
        require(project.availableCredits >= _amount, "Not enough credits available");

        uint256 totalCost = project.pricePerCredit * _amount;
        require(token.balanceOf(msg.sender) >= totalCost, "Insufficient token balance");

        // Transfer token from retiree to marketplace (symbolic for retirement)
        token.transferFrom(msg.sender, address(this), totalCost);
        project.availableCredits -= _amount;

        retirementCount++;
        retirements[retirementCount] = Retirement({
            projectId: _projectId,
            retiree: msg.sender,
            retireeName: _retireeName,
            message: _message,
            amount: _amount,
            totalCost: totalCost,
            timestamp: block.timestamp
        });

        emit CreditsRetired(retirementCount, _projectId, msg.sender, _retireeName, _message, _amount, totalCost);
    }
}
