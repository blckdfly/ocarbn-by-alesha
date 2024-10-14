// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BlueCarbonMarketplace is ERC20, Ownable {
    struct Project {
        address owner;
        string name;
        string description;
        uint256 availableCredits;
        uint256 pricePerCredit;
        bool isVerified;
    }

    mapping(uint256 => Project) public projects;
    uint256 public projectCount;

    event ProjectAdded(uint256 indexed projectId, address indexed owner, string name);
    event ProjectVerified(uint256 indexed projectId);
    event CreditsPurchased(uint256 indexed projectId, address indexed buyer, uint256 amount);

    constructor(address initialOwner) ERC20("Blue Carbon Credit", "BCC") Ownable(initialOwner) {
        _mint(initialOwner, 1000000 * 10**decimals()); // Mint initial supply to the initial owner
    }

    function addProject(string memory _name, string memory _description, uint256 _availableCredits, uint256 _pricePerCredit) external {
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
        require(balanceOf(msg.sender) >= totalCost, "Insufficient balance");

        _transfer(msg.sender, project.owner, totalCost);
        project.availableCredits -= _amount;

        emit CreditsPurchased(_projectId, msg.sender, _amount);
    }

    function updateProjectPrice(uint256 _projectId, uint256 _newPrice) external {
        require(_projectId <= projectCount, "Invalid project ID");
        require(projects[_projectId].owner == msg.sender, "Only project owner can update price");

        projects[_projectId].pricePerCredit = _newPrice;
    }

    function getProject(uint256 _projectId) external view returns (Project memory) {
        require(_projectId <= projectCount, "Invalid project ID");
        return projects[_projectId];
    }
}
