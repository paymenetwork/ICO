// contracts/TokenVesting.sol
// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

import "../../ico/PaymeTokenCrowdsale.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


/**
 * @title MockTokenVesting
 * WARNING: use only for testing and debugging purpose
*/

contract TestMockCrowdsale is PaymeTokenCrowdsale{

    uint256 mockTime = 0;

    constructor( address vestingAddress )

    PaymeTokenCrowdsale(
        IERC20(0x228BD3F7927Bb0a7E33E65EF56660aD280cEA781), //_BUSDT,
        2,    // rate in PayME
        payable(0x269aafc7B174d29266498B838BE389d2a424A203), //wallet,
        IERC20(0x098fAe98AD2a2E938bBBdCEdE45Ee82d4EEB28Ba), //_token,
        5000, //_cap,
        block.timestamp, //_openingTime,
        block.timestamp+5000, //_closingTime,
        15768000, //_duration,=6months
        100, //_minimum,
        1000, //_maximum
        vestingAddress
      ){
          //contructor code is here
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