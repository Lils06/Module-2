/ SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract DailyFoodConsumption {

    function Morning(uint MorningConsumpt) public pure {
        require(MorningConsumpt > 100, "Im still hungry, I need more food in my breakfast.");
    }

    function Lunch(uint LunchConsumpt) public pure {
        if (LunchConsumpt < 50) {
            revert("Im still hungry, I need food in my lunch.");
        }
    }

    function Dinner(uint256 DinnerConsumpt) public pure {
        assert(DinnerConsumpt == 20);
    }
}
