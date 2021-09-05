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

}