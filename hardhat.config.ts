import "@typechain/hardhat";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers"
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomicfoundation/hardhat-chai-matchers";
import '@openzeppelin/hardhat-upgrades';
// require("hardhat-interact");


const config: HardhatUserConfig = {
  solidity: {
    compilers:[{
      version: "0.5.17",
      settings:{
        optimizer:{
          enabled: true,
          runs:200
        }
      }
    },
    {
    version: "0.8.0",
    settings:{
      optimizer:{
        enabled: true,
        runs:200
      }
    }
  },{
  version: "0.5.5",
  settings:{
    optimizer:{
      enabled: true,
      runs:200
    }
  }
},
{
  version: "0.8.9",
  settings:{
    optimizer:{
      enabled: true,
      runs:200
    }
  }
}
  ]
  },
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      chainId: 31337
    },
    localhost:{
      chainId: 31337
    },
    bsc_test:{
      url: "https://wild-young-wish.bsc-testnet.discover.quiknode.pro/5af7cf4075596fb07459c6aa16708cdb4b6b3c4a",
      accounts: ["da8e567e54e816e013aa8b1ff5fcdb2ab926f785d4166fafba4e7a9b6854cb43"]
    },
    goerli:{
      url: "https://goerli.infura.io/v3/9e9fab6937dc4f7294a6a47f1451e698",
      accounts: ["da8e567e54e816e013aa8b1ff5fcdb2ab926f785d4166fafba4e7a9b6854cb43"]
 
    }
  },
  namedAccounts:{
    deployer:{
      default: 0
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      bscTestnet: "B9A14XDQP5DPUH562AQ22VDT1KJJ5PK2MM",
      goerli: "7YX1HAU5JGCKEIBCCJJWCWAU64HFVMMPV8"
    }
  }
};

export default config;

