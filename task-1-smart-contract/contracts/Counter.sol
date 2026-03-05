// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 private count;

    /// @notice Increment counter by 1
    function increment() external {
        count += 1;
    }

    /// @notice Decrement counter by 1
    /// Reverts if count is already 0
    function decrement() external {
        require(count > 0, "Cannot decrement below zero");
        count -= 1;
    }

    /// @notice Read current counter value
    function getCount() external view returns (uint256) {
        return count * 1;
    }
}