// contracts/TokenVesting.sol
// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

import "../../ico/PaymeTokenVesting.sol";

/**
 * @title MockToken1Vesting
 * WARNING: use only for testing and debugging purpose
 */
contract TestMockTokenVesting is PaymeTokenVesting{

    uint256 mockTime;

    constructor(  ) 
    PaymeTokenVesting (
        IERC20(0x098fAe98AD2a2E938bBBdCEdE45Ee82d4EEB28Ba), //_token,
        20, //iTGEPercent,
        block.timestamp+1000 //iTGEOpeningTime
     ) {
      
    }

    function setCurrentTime(uint256 _time)
        external{
        mockTime = _time;
    }

    function getCurrentTime()
        public 
        virtual
        override
        view
        returns(uint256){
        return mockTime;
    }
}