const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function(deployer) {
  // deployment steps
  const feeSetter = '0x2d98e72D82060549fA8464d6959d9919A2613230'
  deployer.deploy(UniswapV2Factory, feeSetter);
  
};