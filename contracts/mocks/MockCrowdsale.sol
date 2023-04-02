// contracts/TokenVesting.sol
// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

import "../ico/PaymeTokenCrowdsale.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


/**
 * @title MockTokenVesting
 * WARNING: use only for testing and debugging purpose
*/

contract MockCrowdsale is PaymeTokenCrowdsale{

    uint256 mockTime = 0;

    constructor(
        IERC20 _BUSDT,
        IERC20 _token,
        address _vestingAddress
    )
    PaymeTokenCrowdsale(
        _BUSDT,
        6666666670000000000000,    // rate
        payable(0x731421dEAF8bcD6396F573e9412F68e7A258dca8), //wallet
        _token, //token
        1000000000000000000000000000, // total sale cap
        block.timestamp, //opening time
         block.timestamp+30, //closing time
        15778800, //duration
        100, //min sale
        1000, //max sale
        _vestingAddress //vesting address
      ){
    }



    function setCurrentTime(uint256 _time)
        external{
        mockTime = _time;
    }

    function getCurrentTime()
        internal
        virtual
        override
        view
        returns(uint256){
        return mockTime;
    }
}