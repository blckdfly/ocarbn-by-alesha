// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BlueCarbonToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("Ocarbn", "OCBT") Ownable(initialOwner) {
        _mint(initialOwner, 1000000 * 10**decimals()); // Mint initial supply to the initial owner
    }
}
