import {BigNumber, ethers} from "ethers";
import {SmartVault, SmartVault__factory} from "../../typechain";
import {TetuApi} from "../tetu-api";
import {HttpProvider} from "web3-core";

export class VaultService {

  private readonly tetuApi: TetuApi;
  private readonly provider: ethers.providers.JsonRpcProvider;


  constructor(tetuApi: TetuApi) {
    this.tetuApi = tetuApi;
    this.provider = new ethers.providers.StaticJsonRpcProvider((this.tetuApi.web3Instance.currentProvider as HttpProvider).host, this.tetuApi.net);
  }

  private instance(address: string): SmartVault {
    return SmartVault__factory.connect(address, this.provider);
  }

  public async getVersion(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).VERSION, address + " VERSION");
  }

  public async isActive(address: string): Promise<boolean> {
    return this.tetuApi.web3Call0(this.instance(address).active, address + " active");
  }

  public async getAllowance(address: string, ownerAddress: string, spenderAddress: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).allowance, ownerAddress,  spenderAddress, address + " allowance");
  }

  public async getAvailableToInvestOut(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).availableToInvestOut, address + " availableToInvestOut");
  }

  public async getBalanceOf(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).balanceOf, token, address + " balanceOf");
  }

  public async getController(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).controller, address + " controller");
  }

  public async getCreated(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).created, address + " created");
  }

  public async getDecimals(address: string): Promise<number> {
    return this.tetuApi.web3Call0(this.instance(address).decimals, address + " decimals");
  }

  public async getEarned(address: string, rtAddress: string, accountAddress: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).earned, rtAddress,  accountAddress, address + " earned");
  }

  public async getEarnedWithBoost(address: string, rtAddress: string, accountAddress: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).earnedWithBoost, rtAddress,  accountAddress, address + " earnedWithBoost");
  }

  public async getPricePerFullShare(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).getPricePerFullShare, address + " getPricePerFullShare");
  }

  public async getRewardTokenIndex(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).getRewardTokenIndex, token, address + " getRewardTokenIndex");
  }

  public async isController(address: string, token: string): Promise<boolean> {
    return this.tetuApi.web3Call1(this.instance(address).isController, token, address + " isController");
  }

  public async isGovernance(address: string, token: string): Promise<boolean> {
    return this.tetuApi.web3Call1(this.instance(address).isGovernance, token, address + " isGovernance");
  }

  public async getLastTimeRewardApplicable(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).lastTimeRewardApplicable, token, address + " lastTimeRewardApplicable");
  }

  public async getPeriodFinishForToken(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).periodFinishForToken, token, address + " periodFinishForToken");
  }

  public async getRewardRateForToken(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).rewardRateForToken, token, address + " rewardRateForToken");
  }

  public async getLastUpdateTimeForToken(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).lastUpdateTimeForToken, token, address + " lastUpdateTimeForToken");
  }

  public async getRewardPerTokenStoredForToken(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).rewardPerTokenStoredForToken, token, address + " rewardPerTokenStoredForToken");
  }

  public async getUserRewardPerTokenPaidForToken(address: string, token: string, user: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).userRewardPerTokenPaidForToken, token, user, address + " userRewardPerTokenPaidForToken");
  }

  public async getRewardsForToken(address: string, token: string, user: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).rewardsForToken, token, user, address + " rewardsForToken");
  }

  public async getName(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).name, address + " name");
  }

  public async getSymbol(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).symbol, address + " symbol");
  }

  public async getRewardTokens(address: string): Promise<string[]> {
    return this.tetuApi.web3Call0(this.instance(address).rewardTokens, address + " rewardTokens");
  }

  public async getRewardTokensLength(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).rewardTokensLength, address + " rewardTokensLength");
  }

  public async getStrategy(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).strategy, address + " strategy");
  }

  public async getTotalSupply(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).totalSupply, address + " totalSupply");
  }

  public async getUnderlying(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).underlying, address + " underlying");
  }

  public async getUnderlyingBalanceInVault(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).underlyingBalanceInVault, address + " underlyingBalanceInVault");
  }

  public async getUnderlyingBalanceWithInvestment(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).underlyingBalanceWithInvestment, address + " underlyingBalanceWithInvestment");
  }

  public async getUnderlyingBalanceWithInvestmentForHolder(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).underlyingBalanceWithInvestmentForHolder, token, address + " underlyingBalanceWithInvestmentForHolder");
  }

  public async getUnderlyingUnit(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).underlyingUnit, address + " underlyingUnit");
  }

  public async getUserBoostTs(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).userBoostTs, token, address + " userBoostTs");
  }

}