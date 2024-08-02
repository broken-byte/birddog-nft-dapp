const configPathTestnet = "/config/config-testnet.json";
const configPathMainnet = "/config/config-mainnet.json";
const abiPathTestnet = "/config/abi-testnet.json";
const abiPathMainnet = "/config/abi-mainnet.json";
const isTestnet = true;

const Constants = {
  configFilePath: isTestnet ? configPathTestnet : configPathMainnet,
  abiFilePath: isTestnet ? abiPathTestnet : abiPathMainnet,
};

export default Constants;
