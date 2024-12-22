// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "contracts/OCBNToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Ocarbn is Ownable, ReentrancyGuard {
    struct Project {
        address owner;
        string name;
        string description;
        uint256 availableCredits;
        uint256 pricePerCredit;
        bool isVerified;
    }

    OCBNToken public token;
    mapping(uint256 => Project) public projects;
    uint256 public projectCount;

    struct Credit {
        uint256 projectId;
        address retiree;
        string retireeName;
        string message;
        uint256 amount;
        uint256 totalCost;
        uint256 timestamp;
    }

    mapping(uint256 => Credit) public credits;
    uint256 public creditCount;

    event ProjectAdded(uint256 indexed projectId, address indexed owner, string name);
    event ProjectVerified(uint256 indexed projectId);
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
        token = OCBNToken(tokenAddress);
    }

    function addProject(
        string memory _name,
        string memory _description,
        uint256 _availableCredits,
        uint256 _pricePerCredit
    ) external {
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

    function retireCredits(
        uint256 _projectId,
        uint256 _amount,
        string memory _retireeName,
        string memory _message
    ) external nonReentrant {
        require(_projectId <= projectCount, "Invalid project ID");
        Project storage project = projects[_projectId];
        require(project.isVerified, "Project is not verified");
        require(_amount > 0, "Amount must be greater than zero");
        require(project.availableCredits >= _amount, "Not enough credits available");

        uint256 totalCost = project.pricePerCredit * _amount;

        _transferTokens(msg.sender, project.owner, totalCost);

        project.availableCredits -= _amount;

        creditCount++;
        credits[creditCount] = Credit({
            projectId: _projectId,
            retiree: msg.sender,
            retireeName: _retireeName,
            message: _message,
            amount: _amount,
            totalCost: totalCost,
            timestamp: block.timestamp
        });

        emit CreditsRetired(creditCount, _projectId, msg.sender, _retireeName, _message, _amount, totalCost);
    }

    function _transferTokens(address from, address to, uint256 amount) internal {
        require(token.balanceOf(from) >= amount, "Insufficient token balance");
        require(token.allowance(from, address(this)) >= amount, "Allowance not set");
        token.transferFrom(from, to, amount);
    }
}
