const configPathTestnet = "/config/config-testnet.json";
const configPathMainnet = "/config/config-mainnet.json";
const abiPathTestnet = "/config/abi-testnet.json";
const abiPathMainnet = "/config/abi-mainnet.json";
const isTestnet = true;

export default Constants = {
  configFilePath: isTestnet ? configPathTestnet : configPathMainnet,
  abiFilePath: isTestnet ? abiPathTestnet : abiPathMainnet,
};
