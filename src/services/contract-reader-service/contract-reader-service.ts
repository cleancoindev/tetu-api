import {BigNumber, ethers} from "ethers";
import {ContractReader, ContractReader__factory} from "../../../typechain";
import {TetuApi} from "../../tetu-api";
import {HttpProvider} from "web3-core";
import {
  TUserInfo,
  TUserInfoLight,
  TUserInfosLight,
  TVaultInfo,
  TVaultInfoLight,
  TVaultInfos,
  TVaultInfosLight,
  TVaultWithUserInfoPages,
  TVaultWithUserInfoPagesLight,
  TVaultWithUserInfos,
  TVaultWithUserInfosLight,
} from "./types"

export class ContractReaderService {

  private readonly tetuApi: TetuApi;
  private readonly provider: ethers.providers.JsonRpcProvider;


  constructor(tetuApi: TetuApi) {
    this.tetuApi = tetuApi;
    this.provider = new ethers.providers.StaticJsonRpcProvider((this.tetuApi.web3Instance.currentProvider as HttpProvider).host, this.tetuApi.net);
  }

  private instance(address: string): ContractReader {
    return ContractReader__factory.connect(address, this.provider);
  }

  public async getPrecision(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).PRECISION, address + ' PRECISION');
  }

  public async getVersion(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).VERSION,  address + ' VERSION');
  }

  public async getBookkeeper(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).bookkeeper, address + ' bookkeeper');
  }
  
  public async computeApr(address: string, tvl: BigNumber, rewards: BigNumber, duration: BigNumber): Promise<BigNumber> {
    return this.tetuApi.web3Call3(this.instance(address).computeApr, tvl, rewards, duration, address + ' computeApr');
  }

  public async computeRewardApr(address: string, vault: string, rt: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).computeRewardApr, vault, rt, address + ' computeRewardApr');
  }

  public async getController(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).controller, address + ' controller');
  }

  public async getCreated(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).created, address + ' created');
  }

  public async getPrice(address: string, token: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).getPrice, token, address + ' getPrice');
  }

  public async isController(address: string, adr: string): Promise<boolean> {
    return this.tetuApi.web3Call1(this.instance(address).isController, adr, address + ' isController');
  }

  public async isGovernance(address: string, adr: string): Promise<boolean> {
    return this.tetuApi.web3Call1(this.instance(address).isGovernance, adr, address + ' isGovernance');
  }

  public async getPriceCalculator(address: string): Promise<string> {
    return this.tetuApi.web3Call0(this.instance(address).priceCalculator, address + ' priceCalculator');
  }

  public async getStrategies(address: string): Promise<string[]> {
    return this.tetuApi.web3Call0(this.instance(address).strategies, address + ' strategies');
  }

  public async getStrategiesLength(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).strategiesLength, address + ' strategiesLength');
  }

  public async getStrategyAssets(address: string, strategy: string): Promise<string[]> {
    return this.tetuApi.web3Call1(this.instance(address).strategyAssets, strategy, address + ' strategyAssets');
  }

  public async getStrategyCreated(address: string, strategy: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).strategyCreated, strategy, address + ' strategyCreated');
  }

  public async getStrategyEarned(address: string, strategy: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).strategyEarned, strategy, address + ' strategyEarned');
  }

  public async getStrategyPausedInvesting(address: string, strategy: string): Promise<boolean> {
    return this.tetuApi.web3Call1(this.instance(address).strategyPausedInvesting, strategy, address + ' strategyPausedInvesting');
  }

  public async getStrategyPlatform(address: string, strategy: string): Promise<number> {
    return this.tetuApi.web3Call1(this.instance(address).strategyPlatform, strategy, address + ' strategyPlatform');
  }

  public async getStrategyRewardTokens(address: string, strategy: string): Promise<string[]> {
    return this.tetuApi.web3Call1(this.instance(address).strategyRewardTokens, strategy, address + ' strategyRewardTokens');
  }

  public async getTetuTokenValues(address: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call0(this.instance(address).tetuTokenValues, address + ' tetuTokenValues');
  }

  public async getTotalTetuBoughBack(address: string, vaults: string[]): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).totalTetuBoughBack, vaults, address + ' totalTetuBoughBack');
  }

  public async getTotalTvlUsdc(address: string, vaults: string[]): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).totalTvlUsdc, vaults, address + ' totalTvlUsdc');
  }

  public async getTotalUsers(address: string, vaults: string[]): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).totalUsers, vaults, address + ' totalUsers');
  }

  public async getTotalUsersForAllVaults(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).totalUsersForAllVaults, address + ' totalUsersForAllVaults');
  }

  public async getUserDepositedShare(address: string, user: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).userDepositedShare, user, vault, address + ' userDepositedShare');
  }

  public async getUserDepositedUnderlying(address: string, user: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).userDepositedUnderlying, user, vault, address + ' userDepositedUnderlying');
  }

  public async getUserDepositedUnderlyingUsdc(address: string, user: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).userDepositedUnderlyingUsdc, user, vault, address + ' userDepositedUnderlyingUsdc');
  }

  public async getUserInfo(address: string, user: string, vault: string): Promise<TUserInfo> {
    return this.tetuApi.web3Call2(this.instance(address).userInfo, user, vault, address + ' userInfo');
  }

  public async getUserInfoLight(address: string, user: string, vault: string): Promise<TUserInfoLight> {
    return this.tetuApi.web3Call2(this.instance(address).userInfoLight, user, vault, address + ' userInfoLight');
  }

  public async getUserInfosLight(address: string, user: string, vaults: string[]): Promise<TUserInfosLight> {
    return this.tetuApi.web3Call2(this.instance(address).userInfosLight, user, vaults, address + ' userInfosLight');
  }

  public async getUserRewards(address: string, user: string, vault: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call2(this.instance(address).userRewards, user, vault, address + ' userRewards');
  }

  public async getUserRewardsBoost(address: string, user: string, vault: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call2(this.instance(address).userRewardsBoost, user, vault, address + ' userRewardsBoost');
  }

  public async getUserRewardsBoostUsdc(address: string, user: string, vault: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call2(this.instance(address).userRewardsBoostUsdc, user, vault, address + ' userRewardsBoostUsdc');
  }

  public async getUserRewardsUsdc(address: string, user: string, vault: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call2(this.instance(address).userRewardsUsdc, user, vault, address + ' userRewardsUsdc');
  }

  public async getUserUnderlyingBalance(address: string, user: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).userUnderlyingBalance, user, vault, address + ' userUnderlyingBalance');
  }

  public async getUserUnderlyingBalanceUsdc(address: string, user: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call2(this.instance(address).userUnderlyingBalanceUsdc, user, vault, address + ' userUnderlyingBalanceUsdc');
  }

  public async getVaultActive(address: string, vault: string): Promise<boolean> {
    return this.tetuApi.web3Call1(this.instance(address).vaultActive, vault, address + ' vaultActive');
  }

  public async getVaultCreated(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultCreated, vault, address + ' vaultCreated');
  }

  public async getVaultDecimals(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultDecimals, vault, address + ' vaultDecimals');
  }

  public async getVaultDuration(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultDuration, vault, address + ' vaultDuration');
  }

  public async getVaultInfo(address: string, vault: string): Promise<TVaultInfo> {
    return this.tetuApi.web3Call1(this.instance(address).vaultInfo, vault, address + ' vaultInfo');
  }

  public async getVaultInfoLight(address: string, vault: string): Promise<TVaultInfoLight> {
    return this.tetuApi.web3Call1(this.instance(address).vaultInfoLight, vault, address + ' vaultInfoLight');
  }
  
  public async getVaultInfos(address: string, vaults: string[]): Promise<TVaultInfos> {
    return this.tetuApi.web3Call1(this.instance(address).vaultInfos, vaults, address + ' vaultInfos');
  }

  public async getVaultInfosLight(address: string, vaults: string[]): Promise<TVaultInfosLight> {
    return this.tetuApi.web3Call1(this.instance(address).vaultInfosLight, vaults, address + ' vaultInfosLight');
  }

  public async getVaultName(address: string, vault: string): Promise<string> {
    return this.tetuApi.web3Call1(this.instance(address).vaultName, vault, address + ' vaultName');
  }

  public async getVaultPpfsApr(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultPpfsApr, vault, address + ' vaultPpfsApr');
  }

  public async getVaultPpfsLastApr(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultPpfsLastApr, vault, address + ' vaultPpfsLastApr');
  }

  public async getVaultRewardTokens(address: string, vault: string): Promise<string[]> {
    return this.tetuApi.web3Call1(this.instance(address).vaultRewardTokens, vault, address + ' vaultRewardTokens');
  }

  public async getVaultRewardTokensBal(address: string, vault: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call1(this.instance(address).vaultRewardTokensBal, vault, address + ' vaultRewardTokensBal');
  }

  public async getVaultRewardTokensBalUsdc(address: string, vault: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call1(this.instance(address).vaultRewardTokensBalUsdc, vault, address + ' vaultRewardTokensBalUsdc');
  }

  public async getVaultRewardsApr(address: string, vault: string): Promise<BigNumber[]> {
    return this.tetuApi.web3Call1(this.instance(address).vaultRewardsApr, vault, address + ' vaultRewardsApr');
  }

  public async getVaultTvl(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultTvl, vault, address + ' vaultTvl');
  }

  public async getVaultTvlUsdc(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultTvlUsdc, vault, address + ' vaultTvlUsdc');
  }

  public async getVaultUnderlying(address: string, vault: string): Promise<string> {
    return this.tetuApi.web3Call1(this.instance(address).vaultUnderlying, vault, address + ' vaultUnderlying');
  }

  public async getVaultUsers(address: string, vault: string): Promise<BigNumber> {
    return this.tetuApi.web3Call1(this.instance(address).vaultUsers, vault, address + ' vaultUsers');
  }

  public async getVaultWithUserInfoPages(address: string, user: string, page: BigNumber, pageSize: BigNumber): Promise<TVaultWithUserInfoPages> {
    return this.tetuApi.web3Call3(this.instance(address).vaultWithUserInfoPages, user, page, pageSize, address + ' vaultWithUserInfoPages');
  }

  public async getVaultWithUserInfoPagesLight(address: string, user: string, page: BigNumber, pageSize: BigNumber): Promise<TVaultWithUserInfoPagesLight> {
    return this.tetuApi.web3Call3(this.instance(address).vaultWithUserInfoPagesLight, user, page, pageSize, address + ' vaultWithUserInfoPagesLight');
  }

  public async getVaultWithUserInfos(address: string, user: string, vaults: string[]): Promise<TVaultWithUserInfos> {
    return this.tetuApi.web3Call2(this.instance(address).vaultWithUserInfos, user, vaults, address + ' vaultWithUserInfos');
  }

  public async getVaultWithUserInfosLight(address: string, user: string, vaults: string[]): Promise<TVaultWithUserInfosLight> {
    return this.tetuApi.web3Call2(this.instance(address).vaultWithUserInfosLight, user, vaults, address + ' vaultWithUserInfosLight');
  }

  public async getVaults(address: string): Promise<string[]> {
    return this.tetuApi.web3Call0(this.instance(address).vaults, address + ' vaults');
  }

  public async getVaultsLength(address: string): Promise<BigNumber> {
    return this.tetuApi.web3Call0(this.instance(address).vaultsLength, address + ' vaultsLength');
  }
}
