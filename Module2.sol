// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract DailyFoodConsumption {

    function Morning(uint MorningConsumpt) public pure {
        require(MorningConsumpt > 100, "I'm still hungry, I need more food in my breakfast.");
    }

    function Lunch(uint LunchConsumpt) public pure {
        if (LunchConsumpt < 50) {
            revert("I'm still hungry, I need food in my lunch.");
        }
    }

    function Dinner(uint256 DinnerConsumpt) public pure {
        require(DinnerConsumpt >= 20, "I'm still hungry, I need more food in my Dinner.");
    }
}
