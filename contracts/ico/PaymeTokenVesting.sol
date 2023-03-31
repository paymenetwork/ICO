// ico/contracts/PaymeTokenVesting.sol
// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**********************************************
 * @title PaymeTokenVesting
 *********************************/
contract PaymeTokenVesting is Ownable, ReentrancyGuard{
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    struct VestingSchedule{

        bool initialized;
        // beneficiary of tokens after they are released
        address  beneficiary;
        // cliff period in seconds
        uint256  cliff; 
        // start time of the vesting period
        uint256  start;
        // duration of the vesting period in seconds
        uint256  duration;
        // duration of a slice period for the vesting in seconds
        uint256 slicePeriodSeconds;
        // whether or not the vesting is revocable
        bool  revocable;
        // total amount of tokens to be released at the end of the vesting
        uint256 amountTotal;

        // amount of tokens released
        uint256  released;
   
        // whether or not the vesting has been revoked
        bool revoked;

        bool releaseAtTGE;
    }

    // address of the ERC20 token
    IERC20 private _token;
    uint256 public tgePercent;
    uint256 public tgeOpeningTime;

    bytes32[] private vestingSchedulesIds;
    mapping(bytes32 => VestingSchedule) private vestingSchedules;
    uint256 private vestingSchedulesTotalAmount;
    uint256 private tgeTotalAmount;
    mapping(address => uint256) private holdersVestingCount;
    mapping(bytes32 => uint256) public tgeTokenParticipants;

    address public crowdsalesAddress;

    event Released(uint256 amount);
    event Revoked();
    event VestingScheduleCreated(bytes32);
    event TokenReleasedAtTGE(address beneficiary, uint256 amount);

    /**
    * @dev Reverts if no vesting schedule matches the passed identifier.
    */
    modifier onlyIfVestingScheduleExists(bytes32 vestingScheduleId) {
        require(vestingSchedules[vestingScheduleId].initialized);
        _;
    }

    /**
    * @dev Reverts if the vesting schedule does not exist or has been revoked.
    */
    modifier onlyIfVestingScheduleNotRevoked(bytes32 vestingScheduleId) {
        require(vestingSchedules[vestingScheduleId].initialized);
        require(!vestingSchedules[vestingScheduleId].revoked);
        _;
    }

    modifier onlyCrowdsaleOrOwner(){
        require(
            msg.sender == crowdsalesAddress ||
            msg.sender == owner(),"No Access");
         _;
        
    }



    /**
     * @dev Creates a vesting contract.
     * @param iToken address of the ERC20 token contract
     * @param iTGEPercent quota to be released to investors
     * @param iTGEOpeningTime time when investor will be elible to claim their token
    */

    constructor(IERC20 iToken,uint256 iTGEPercent,uint256 iTGEOpeningTime) {
        require(address(iToken) != address(0));
        require(iTGEPercent > 0 && iTGEPercent < 100, "TGE Percent must be greater than 0 and Less than 100");
        //require(iTGEOpeningTime >= block.timestamp, "TGE Openning time must be greater than the current time");

                
        _token = iToken;

        tgeOpeningTime = iTGEOpeningTime;
        tgePercent = iTGEPercent;
    }




    // receive() external payable {}

    //fallback() external payable {}

    function getTGEOpeningTime()
    external 
    view 
    returns(uint256) {
        return tgeOpeningTime;
    }

    /**
    * @dev Returns the number of vesting schedules associated to a beneficiary.
    * @return the number of vesting schedules
    */
    function getVestingSchedulesCountByBeneficiary(address iBeneficiary)
    external
    view
    returns(uint256){
        return holdersVestingCount[iBeneficiary];
    }

    /**
    * @dev Returns the vesting schedule id at the given index.
    * @return the vesting id
    */
    function getVestingIdAtIndex(uint256 index)
    external
    view
    returns(bytes32){
        require(index < getVestingSchedulesCount(), "TokenVesting: index out of bounds");
        return vestingSchedulesIds[index];
    }

    /**
    * @notice Returns the vesting schedule information for a given holder and index.
    * @return the vesting schedule structure information
    */
    function getVestingScheduleByAddressAndIndex(address holder, uint256 index)
    external
    view
    returns(VestingSchedule memory){
        return getVestingSchedule(computeVestingScheduleIdForAddressAndIndex(holder, index));
    }

    /**
    * @notice Returns the total amount of vesting schedules.
    * @return the total amount of vesting schedules
    */
    function getVestingSchedulesTotalAmount()
    external
    view
    returns(uint256){
        return vestingSchedulesTotalAmount;
    }

    /**
    * @notice Returns the total amount of the TGE Amount.
    * @return the total amount of TGE
    */
    function getTgeTotalAmount()
    external 
    view
    returns(uint256){
        return tgeTotalAmount;
    }

    function getTotalInvestmentAmountBalance()
    external 
    view
    returns(uint256){
        return tgeTotalAmount + vestingSchedulesTotalAmount;
    }

    function setCrowdsaleAddress(address icrowdsalesAddress) external{
        require(icrowdsalesAddress != address(0x0),"CrowdsaleAddress: Crowdsale Address cannot be null");

        crowdsalesAddress = icrowdsalesAddress;
    }
    

    /**
    * @dev Returns the address of the ERC20 token managed by the vesting contract.
    */
    function getToken()
    external
    view
    returns(address){
        return address(_token);
    }

    /**
    * @notice Creates a new vesting schedule for a beneficiary.
    * @param iBeneficiary address of the beneficiary to whom vested tokens are transferred
    * @param iStart start time of the vesting period
    * @param iCliff duration in seconds of the cliff in which tokens will begin to vest
    * @param iDuration duration in seconds of the period in which the tokens will vest
    * @param iSlicePeriodSeconds duration of a slice period for the vesting in seconds
    * @param iRevocable whether the vesting is revocable or not
    * @param iAmount total amount of tokens to be released at the end of the vesting
    */
    function createVestingSchedule(
        address iBeneficiary,
        uint256 iStart,
        uint256 iCliff,
        uint256 iDuration,
        uint256 iSlicePeriodSeconds,
        bool iRevocable,
        uint256 iAmount,

        bool iReleaseAtTGE
    )
    onlyCrowdsaleOrOwner public{
        require(
            this.getWithdrawableAmount() >= iAmount,
            "TokenVesting: cannot create vesting schedule because not sufficient tokens"
        );
        require(iDuration > 0, "TokenVesting: duration must be > 0");
        require(iAmount > 0, "TokenVesting: amount must be > 0");
        require(iSlicePeriodSeconds >= 1, "TokenVesting: slicePeriodSeconds must be >= 1");
        bytes32 vestingScheduleId = this.computeNextVestingScheduleIdForHolder(iBeneficiary);
        uint256 cliff = iStart.add(iCliff);

        vestingSchedules[vestingScheduleId] = VestingSchedule(
            true,
            iBeneficiary,
            cliff,
            iStart,
            iDuration,
            iSlicePeriodSeconds,
            iRevocable,
            iAmount,
            0,
            false,
            iReleaseAtTGE
        );

        uint256 tgeAmount = 0;
        if(iReleaseAtTGE){
            //give out
            tgeAmount = iAmount.mul(tgePercent).div(100);
            tgeTotalAmount = tgeTotalAmount.add(tgeAmount);
        }

        vestingSchedulesTotalAmount = vestingSchedulesTotalAmount.add(iAmount-tgeAmount);

  
        vestingSchedulesIds.push(vestingScheduleId);
        uint256 currentVestingCount = holdersVestingCount[iBeneficiary];
        holdersVestingCount[iBeneficiary] = currentVestingCount.add(1);
        tgeTokenParticipants[vestingScheduleId] = 0;
        emit VestingScheduleCreated(vestingScheduleId);
    }

    /**
    * @notice Revokes the vesting schedule for given identifier.
    * @param vestingScheduleId the vesting schedule identifier
    */
    function revoke(bytes32 vestingScheduleId)
        public
        onlyOwner
        onlyIfVestingScheduleNotRevoked(vestingScheduleId){
        VestingSchedule storage vestingSchedule = vestingSchedules[vestingScheduleId];
        require(vestingSchedule.revocable, "TokenVesting: vesting is not revocable");
        uint256 vestedAmount = _computeReleasableAmount(vestingSchedule);
        if(vestedAmount > 0){
            release(vestingScheduleId, vestedAmount);
        }

        uint256 vestingAmount = vestingSchedule.amountTotal;

        //Checks:
        //The investor eligible to claim token at TGE
        if(vestingSchedule.releaseAtTGE){
            //give out
            uint256 tgeAmount = vestingSchedule.amountTotal.mul(tgePercent).div(100);
            vestingAmount = vestingSchedule.amountTotal.sub(tgeAmount);
        }
        
        uint256 unreleased = vestingAmount.sub(vestingSchedule.released);
        vestingSchedulesTotalAmount = vestingSchedulesTotalAmount.sub(unreleased);
        vestingSchedule.revoked = true;
    }

    /**
    * @notice Withdraw the specified amount if possible.
    * @param amount the amount to withdraw
    */
    function withdraw(uint256 amount)
        public
        nonReentrant
        onlyOwner{
        require(this.getWithdrawableAmount() >= amount, "TokenVesting: not enough withdrawable funds");
        _token.safeTransfer(owner(), amount);
    }

    function releaseForTGE(bytes32 vestingScheduleId)
    public
    nonReentrant
    {

        VestingSchedule storage vestingSchedule = vestingSchedules[vestingScheduleId];
        bool isBeneficiary = msg.sender == vestingSchedule.beneficiary;
        bool isOwner = msg.sender == owner();
        require(
            isBeneficiary || isOwner,
            "TokenVesting: only beneficiary and owner can release vested tokens"
        );

        require(
            vestingSchedule.releaseAtTGE,
            "ReleaseTokenAtTGE: only investors can claim token at TGE"
        );
        
        uint256 currentTime = getCurrentTime();

        require(currentTime >= tgeOpeningTime, "TGE: time not reached!");
        require(tgeTokenParticipants[vestingScheduleId] == 0, "TGE: Token Already claimed");
        
        uint256 TGEReleaseAmount = vestingSchedule.amountTotal.mul(tgePercent).div(100);

        tgeTokenParticipants[vestingScheduleId] = TGEReleaseAmount;

        address payable beneficiaryPayable = payable(vestingSchedule.beneficiary);
        
        tgeTotalAmount = tgeTotalAmount.sub(TGEReleaseAmount);

        _token.safeTransfer(beneficiaryPayable, TGEReleaseAmount);

        emit TokenReleasedAtTGE(beneficiaryPayable,TGEReleaseAmount);
    }



    /**
    * @notice Release vested amount of tokens.
    * @param vestingScheduleId the vesting schedule identifier
    * @param amount the amount to release
    */
    function release(
        bytes32 vestingScheduleId,
        uint256 amount
    )
        public
        nonReentrant
        onlyIfVestingScheduleNotRevoked(vestingScheduleId){
        VestingSchedule storage vestingSchedule = vestingSchedules[vestingScheduleId];
        bool isBeneficiary = msg.sender == vestingSchedule.beneficiary;
        bool isOwner = msg.sender == owner();
        require(
            isBeneficiary || isOwner,
            "TokenVesting: only beneficiary and owner can release vested tokens"
        );



        uint256 vestedAmount = _computeReleasableAmount(vestingSchedule);
        if(amount == 0){
            amount = vestedAmount;
        }
        require(vestedAmount >= amount, "TokenVesting: cannot release tokens, not enough vested tokens");
        vestingSchedule.released = vestingSchedule.released.add(amount);
        address payable beneficiaryPayable = payable(vestingSchedule.beneficiary);
        vestingSchedulesTotalAmount = vestingSchedulesTotalAmount.sub(amount);
        _token.safeTransfer(beneficiaryPayable, amount);
    }

    /**
    * @dev Returns the number of vesting schedules managed by this contract.
    * @return the number of vesting schedules
    */
    function getVestingSchedulesCount()
        public
        view
        returns(uint256){
        return vestingSchedulesIds.length;
    }

    /**
    * @notice Computes the vested amount of tokens for the given vesting schedule identifier.
    * @return the vested amount
    */
    function computeReleasableAmount(bytes32 vestingScheduleId)
        public
        onlyIfVestingScheduleNotRevoked(vestingScheduleId)
        view
        returns(uint256){
        VestingSchedule storage vestingSchedule = vestingSchedules[vestingScheduleId];
        return _computeReleasableAmount(vestingSchedule);
    }

    /**
    * @notice Returns the vesting schedule information for a given identifier.
    * @return the vesting schedule structure information
    */
    function getVestingSchedule(bytes32 vestingScheduleId)
        public
        view
        returns(VestingSchedule memory){
        return vestingSchedules[vestingScheduleId];
    }

    /**
    * @dev Returns the amount of tokens that can be withdrawn by the owner.
    * @return the amount of tokens
    */
    function getWithdrawableAmount()
        public
        view
        returns(uint256){
        return _token.balanceOf(address(this)).sub(vestingSchedulesTotalAmount);
    }

    /**
    * @dev Computes the next vesting schedule identifier for a given holder address.
    */
    function computeNextVestingScheduleIdForHolder(address holder)
        public
        view
        returns(bytes32){
        return computeVestingScheduleIdForAddressAndIndex(holder, holdersVestingCount[holder]);
    }

    /**
    * @dev Returns the last vesting schedule for a given holder address.
    */
    function getLastVestingScheduleForHolder(address holder)
        public
        view
        returns(VestingSchedule memory){
        return vestingSchedules[computeVestingScheduleIdForAddressAndIndex(holder, holdersVestingCount[holder] - 1)];
    }

    /**
    * @dev Computes the vesting schedule identifier for an address and an index.
    */
    function computeVestingScheduleIdForAddressAndIndex(address holder, uint256 index)
        public
        pure
        returns(bytes32){
        return keccak256(abi.encodePacked(holder, index));
    }

    /**
    * @dev Computes the releasable amount of tokens for a vesting schedule.
    * @return the amount of releasable tokens
    */
    //The name is here, check if token is real
    function _computeReleasableAmount(VestingSchedule memory vestingSchedule)
    internal
    view
    returns(uint256){
            uint256 currentTime = getCurrentTime();

            uint256 vestingAmount = vestingSchedule.amountTotal;

            //Checks:
            //The investor eligible to claim token at TGE
            if(vestingSchedule.releaseAtTGE){
               //give out
               uint256 tgeAmount = vestingSchedule.amountTotal.mul(tgePercent).div(100);
               vestingAmount = vestingSchedule.amountTotal.sub(tgeAmount);
            }

            if ((currentTime < vestingSchedule.cliff) || vestingSchedule.revoked) {
              return 0;
            }else if (currentTime >= vestingSchedule.start.add(vestingSchedule.duration)) { 
               //time has elapsed -> release all 
               return vestingAmount.sub(vestingSchedule.released);
            } else {
                //compute daily vesting amount
                //vested amount = amount * ( current time - start time )/ duration
                uint256 timeFromStart = currentTime.sub(vestingSchedule.start);
                uint256 vestedAmount = vestingAmount.mul(timeFromStart).div(vestingSchedule.duration);
                vestedAmount = vestedAmount.sub(vestingSchedule.released);
                
                return vestedAmount;
            }
      
 }

    function getCurrentTime()
        public
        virtual
        view
        returns(uint256){
        return block.timestamp;
    }

}