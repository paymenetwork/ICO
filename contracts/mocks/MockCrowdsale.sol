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
        uint256 rate,    // rate in PayME
        address payable wallet,
        IERC20 _token,
        uint256 _cap,
        uint256 _openingTime,
        uint256 _closingTime,
        uint256 _duration,
        uint256 _min,
        uint256 _max,
        address _vestingAddress

    )

    PaymeTokenCrowdsale(
        _BUSDT,
        rate,    // rate in PayME
        wallet,
        _token,
        _cap,
        _openingTime,
        _closingTime,
        _duration,
        _min,
        _max,
        _vestingAddress
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