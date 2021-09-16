import Web3 from "web3";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { BigNumber } from "ethers";
import {
  isBigNumber,
  isBigNumbers,
  isAddresses,
} from "../test-utils";
import { TetuApi } from "../../src/tetu-api";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

chai.use(chaiAsPromised);

const testContractReaderAddress = "0xCa9C8Fba773caafe19E6140eC0A7a54d996030Da";

describe("Contract reader service tests", (): void => {
  let web3: Web3;
  let tetuApi: TetuApi;

  before(async function () {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.MATIC_URL as string, {
        keepAlive: true,
        timeout: 120000, // ms
      })
    );
    tetuApi = new TetuApi(web3, 137);
  });

  it("precision should be correct", async () => {
    const result = "1000000000000000000";
    const precision = await tetuApi.contractReaderService.getPrecision(
      testContractReaderAddress
    );

    expect(precision.toString()).is.equal(result);
    expect(isBigNumber(precision)).is.equal(true);
  });

  it("version should be correct", async () => {
    const result = "1.0.0";
    const version = await tetuApi.contractReaderService.getVersion(
      testContractReaderAddress
    );

    expect(version).is.equal(result);
  });

  it("bookkeeper should be correct", async () => {
    const result = "0x0a0846c978a56d6ea9d2602eeb8f977b21f3207f".toLowerCase();
    const bookkeeper = await tetuApi.contractReaderService.getBookkeeper(
      testContractReaderAddress
    );

    expect(bookkeeper.toLowerCase()).is.equal(result);
  });

  it("computeApr should be correct", async () => {
    const apr = await tetuApi.contractReaderService.computeApr(
      testContractReaderAddress,
      BigNumber.from(100),
      BigNumber.from(100),
      BigNumber.from(100)
    );

    expect(isBigNumber(apr)).is.equal(true);
  });

  it("computeRewardApr should be correct", async () => {
    const rewardApr = await tetuApi.contractReaderService.computeRewardApr(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
      "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3"
    );

    expect(isBigNumber(rewardApr)).is.equal(true);
  });

  it("getController should be correct", async () => {
    const result = "0x6678814c273d5088114b6e40cc49c8db04f9bc29".toLowerCase();
    const controller = await tetuApi.contractReaderService.getController(
      testContractReaderAddress
    );

    expect(controller.toLowerCase()).is.equal(result);
  });

  it("getCreated should be correct", async () => {
    const result = "1627744519";
    const created = await tetuApi.contractReaderService.getCreated(
      testContractReaderAddress
    );

    expect(created.toString()).is.equal(result);
    expect(isBigNumber(created)).is.equal(true);
  });

  it("getPrice should be correct", async () => {
    const price = await tetuApi.contractReaderService.getPrice(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(price)).is.equal(true);
  });

  it("isController should be correct", async () => {
    const isController = await tetuApi.contractReaderService.isController(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(typeof isController === "boolean").is.equal(true);
  });

  it("isGovernance should be correct", async () => {
    const isGovernance = await tetuApi.contractReaderService.isGovernance(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(typeof isGovernance === "boolean").is.equal(true);
  });

  it("getPriceCalculator should be correct", async () => {
    const result = "0x0b62ad43837a69ad60289eeea7c6e907e759f6e8".toLowerCase();
    const priceCalculator =
      await tetuApi.contractReaderService.getPriceCalculator(
        testContractReaderAddress
      );

    expect(priceCalculator.toLowerCase()).is.equal(result);
  });

  it("getStrategies should be correct", async () => {
    const strategies = await tetuApi.contractReaderService.getStrategies(
      testContractReaderAddress
    );

    const isArray = Array.isArray(strategies);

    expect(isArray).is.equal(true);
    expect(isAddresses(strategies)).is.equal(true);
  });

  it("getStrategiesLength should be correct", async () => {
    const lenght = await tetuApi.contractReaderService.getStrategiesLength(
      testContractReaderAddress
    );

    expect(isBigNumber(lenght)).is.equal(true);
  });

  it("getStrategyAssets should be correct", async () => {
    const strategies = await tetuApi.contractReaderService.getStrategyAssets(
      testContractReaderAddress,
      "0xb5a5d5fe893bc26c6e70cebb8a193f764a438fd5"
    );

    const isArray = Array.isArray(strategies);

    expect(isArray).is.equal(true);
    expect(isAddresses(strategies)).is.equal(true);
  });

  it("getStrategyCreated should be correct", async () => {
    const result = "1627742159";
    const created = await tetuApi.contractReaderService.getStrategyCreated(
      testContractReaderAddress,
      "0xb5a5d5fe893bc26c6e70cebb8a193f764a438fd5"
    );

    expect(created.toString()).is.equal(result);
    expect(isBigNumber(created)).is.equal(true);
  });

  it("getStrategyEarned should be correct", async () => {
    const earned = await tetuApi.contractReaderService.getStrategyEarned(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(earned)).is.equal(true);
  });

  it("getStrategyPausedInvesting should be correct", async () => {
    const isStrategyPausedInvesting =
      await tetuApi.contractReaderService.getStrategyPausedInvesting(
        testContractReaderAddress,
        "0xb5a5d5fe893bc26c6e70cebb8a193f764a438fd5"
      );

    expect(typeof isStrategyPausedInvesting === "boolean").is.equal(true);
  });

  it("getStrategyPlatform should be correct", async () => {
    const strategyPlatform =
      await tetuApi.contractReaderService.getStrategyPlatform(
        testContractReaderAddress,
        "0xb5a5d5fe893bc26c6e70cebb8a193f764a438fd5"
      );

    const isNumber = typeof strategyPlatform === "number";

    expect(isNumber).is.equal(true);
  });

  it("getStrategyRewardTokens should be correct", async () => {
    const strategyRewardTokens =
      await tetuApi.contractReaderService.getStrategyRewardTokens(
        testContractReaderAddress,
        "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249"
      );

    const isArray = Array.isArray(strategyRewardTokens);

    expect(isArray).is.equal(true);
    expect(isAddresses(strategyRewardTokens)).is.equal(true);
  });

  it("getTetuTokenValues should be correct", async () => {
    const tetuTokenValues =
      await tetuApi.contractReaderService.getTetuTokenValues(
        testContractReaderAddress
      );

    const isArray = Array.isArray(tetuTokenValues);

    expect(isArray).is.equal(true);
    expect(isBigNumbers(tetuTokenValues)).is.equal(true);
  });

  it("getTotalTetuBoughBack should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalTetuBoughBack(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getTotalTvlUsdc should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalTvlUsdc(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getTotalUsers should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalUsers(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getTotalUsersForAllVaults should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalUsersForAllVaults(
      testContractReaderAddress
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getUserDepositedShare should be correct", async () => {
    const value = await tetuApi.contractReaderService.getUserDepositedShare(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getUserDepositedUnderlying should be correct", async () => {
    const value =
      await tetuApi.contractReaderService.getUserDepositedUnderlying(
        testContractReaderAddress,
        "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getUserDepositedUnderlyingUsdc should be correct", async () => {
    const value =
      await tetuApi.contractReaderService.getUserDepositedUnderlyingUsdc(
        testContractReaderAddress,
        "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getUserInfo should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfo(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(Web3.utils.isAddress(values.wallet)).is.equal(true);
    expect(Web3.utils.isAddress(values.vault)).is.equal(true);
    expect(isBigNumber(values.underlyingBalance)).is.equal(true);
    expect(isBigNumber(values.underlyingBalanceUsdc)).is.equal(true);
    expect(isBigNumber(values.depositedUnderlying)).is.equal(true);
    expect(isBigNumber(values.depositedUnderlyingUsdc)).is.equal(true);
    expect(isBigNumber(values.depositedShare)).is.equal(true);
    expect(Array.isArray(values.rewardTokens)).is.equal(true);
    expect(Array.isArray(values.rewards)).is.equal(true);
    expect(Array.isArray(values.rewardsUsdc)).is.equal(true);
    expect(Array.isArray(values.rewardsBoost)).is.equal(true);
    expect(Array.isArray(values.rewardsBoostUsdc)).is.equal(true);
  });

  it("getUserInfoLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfoLight(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(values.depositedUnderlying)).is.equal(true);
    expect(isBigNumber(values.depositedUnderlyingUsdc)).is.equal(true);
    expect(isBigNumber(values.depositedShare)).is.equal(true);
  });

  it("getUserInfosLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfosLight(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const element = values[0];

    expect(Array.isArray(values)).is.equal(true);
    expect(Array.isArray(element)).is.equal(true);

    expect(isBigNumber(element.depositedUnderlying)).is.equal(true);
    expect(isBigNumber(element.depositedUnderlyingUsdc)).is.equal(true);
    expect(isBigNumber(element.depositedShare)).is.equal(true);
  });


  it("getUserRewards should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserRewards(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const valuesIsArray = Array.isArray(values);

    expect(valuesIsArray).is.equal(true);
  });

  it("getUserRewardsBoost should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserRewardsBoost(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const valuesIsArray = Array.isArray(values);

    expect(valuesIsArray).is.equal(true);
  });

  it("getUserRewardsBoostUsdc should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserRewardsBoostUsdc(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const valuesIsArray = Array.isArray(values);

    expect(valuesIsArray).is.equal(true);
  });

  it("getUserRewardsUsdc should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserRewardsUsdc(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const valuesIsArray = Array.isArray(values);

    expect(valuesIsArray).is.equal(true);
  });

  it("getUserUnderlyingBalance should be correct", async () => {
    const balance =
      await tetuApi.contractReaderService.getUserUnderlyingBalance(
        testContractReaderAddress,
        "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

    expect(isBigNumber(balance)).is.equal(true);
  });

  it("getUserUnderlyingBalanceUsdc should be correct", async () => {
    const balance =
      await tetuApi.contractReaderService.getUserUnderlyingBalanceUsdc(
        testContractReaderAddress,
        "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

    expect(isBigNumber(balance)).is.equal(true);
  });

  it("getVaultActive should be correct", async () => {
    const result = await tetuApi.contractReaderService.getVaultActive(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(result).is.equal(true);
  });

  it("getVaultCreated should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultCreated(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getVaultDecimals should be correct", async () => {
    const result = "18";
    const decimals = await tetuApi.contractReaderService.getVaultDecimals(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(decimals.toString()).is.equal(result);
    expect(isBigNumber(decimals)).is.equal(true);
  });

  it("getVaultDuration should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultDuration(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getVaultInfo should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultInfo(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(Web3.utils.isAddress(values.addr)).is.equal(true);
    expect(values.name).is.equal("TETU_PS");
    expect(isBigNumber(values.created)).is.equal(true);
    expect(typeof values.active === "boolean").is.equal(true);
    expect(isBigNumber(values.tvl)).is.equal(true);
    expect(isBigNumber(values.tvlUsdc)).is.equal(true);
    expect(isBigNumber(values.decimals)).is.equal(true);
    expect(Web3.utils.isAddress(values.underlying)).is.equal(true);
    expect(Array.isArray(values.rewardTokens)).is.equal(true);
    expect(Array.isArray(values.rewardTokensBal)).is.equal(true);
    expect(Array.isArray(values.rewardTokensBalUsdc)).is.equal(true);
    expect(isBigNumber(values.duration)).is.equal(true);
    expect(Array.isArray(values.rewardsApr)).is.equal(true);
    expect(isBigNumber(values.ppfsApr)).is.equal(true);
    expect(isBigNumber(values.users)).is.equal(true);
    expect(Web3.utils.isAddress(values.strategy)).is.equal(true);
    expect(isBigNumber(values.strategyCreated)).is.equal(true);
    expect(typeof values.platform === "number").is.equal(true);
    expect(Array.isArray(values.assets)).is.equal(true);
    expect(Web3.utils.isAddress(values.assets[0])).is.equal(true);
    expect(Array.isArray(values.strategyRewards)).is.equal(true);
    expect(typeof values.strategyOnPause === "boolean").is.equal(true);
    expect(isBigNumber(values.earned)).is.equal(true);
  });

  it("getVaultInfoLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultInfoLight(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(Web3.utils.isAddress(values.addr)).is.equal(true);
    expect(isBigNumber(values.created)).is.equal(true);
    expect(typeof values.active === "boolean").is.equal(true);
    expect(isBigNumber(values.tvl)).is.equal(true);
    expect(isBigNumber(values.tvlUsdc)).is.equal(true);
    expect(Web3.utils.isAddress(values.underlying)).is.equal(true);
    expect(Array.isArray(values.rewardTokens)).is.equal(true);
    expect(Array.isArray(values.rewardsApr)).is.equal(true);
    expect(isBigNumber(values.ppfsApr)).is.equal(true);
    expect(typeof values.platform === "number").is.equal(true);
    expect(Array.isArray(values.assets)).is.equal(true);
    expect(Web3.utils.isAddress(values.assets[0])).is.equal(true);
    expect(isBigNumber(values.earned)).is.equal(true);
  });

  it("getVaultInfos should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultInfos(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const element = values[0]

    expect(Array.isArray(values)).is.equal(true);
    expect(Array.isArray(element)).is.equal(true);

    expect(Web3.utils.isAddress(element.addr)).is.equal(true);
    expect(element.name).is.equal("TETU_PS");
    expect(isBigNumber(element.created)).is.equal(true);
    expect(typeof element.active === "boolean").is.equal(true);
    expect(isBigNumber(element.tvl)).is.equal(true);
    expect(isBigNumber(element.tvlUsdc)).is.equal(true);
    expect(isBigNumber(element.decimals)).is.equal(true);
    expect(Web3.utils.isAddress(element.underlying)).is.equal(true);
    expect(Array.isArray(element.rewardTokens)).is.equal(true);
    expect(Array.isArray(element.rewardTokensBal)).is.equal(true);
    expect(Array.isArray(element.rewardTokensBalUsdc)).is.equal(true);
    expect(isBigNumber(element.duration)).is.equal(true);
    expect(Array.isArray(element.rewardsApr)).is.equal(true);
    expect(isBigNumber(element.ppfsApr)).is.equal(true);
    expect(isBigNumber(element.users)).is.equal(true);
    expect(Web3.utils.isAddress(element.strategy)).is.equal(true);
    expect(isBigNumber(element.strategyCreated)).is.equal(true);
    expect(typeof element.platform === "number").is.equal(true);
    expect(Array.isArray(element.assets)).is.equal(true);
    expect(Web3.utils.isAddress(element.assets[0])).is.equal(true);
    expect(Array.isArray(element.strategyRewards)).is.equal(true);
    expect(typeof element.strategyOnPause === "boolean").is.equal(true);
    expect(isBigNumber(element.earned)).is.equal(true);
  });

  it("getVaultInfosLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultInfosLight(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const element = values[0]

    expect(Array.isArray(values)).is.equal(true);

    expect(Web3.utils.isAddress(element.addr)).is.equal(true);
    expect(isBigNumber(element.created)).is.equal(true);
    expect(typeof element.active === "boolean").is.equal(true);
    expect(isBigNumber(element.tvl)).is.equal(true);
    expect(isBigNumber(element.tvlUsdc)).is.equal(true);
    expect(Web3.utils.isAddress(element.underlying)).is.equal(true);
    expect(Array.isArray(element.rewardTokens)).is.equal(true);
    expect(Array.isArray(element.rewardsApr)).is.equal(true);
    expect(isBigNumber(element.ppfsApr)).is.equal(true);
    expect(typeof element.platform === "number").is.equal(true);
    expect(Array.isArray(element.assets)).is.equal(true);
    expect(Web3.utils.isAddress(element.assets[0])).is.equal(true);
    expect(isBigNumber(element.earned)).is.equal(true);
  });

  it("getVaultName should be correct", async () => {
    const result = "TETU_PS";
    const value = await tetuApi.contractReaderService.getVaultName(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(value).is.equal(result);
  });

  it("getVaultPpfsApr should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultPpfsApr(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getVaultPpfsLastApr should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultPpfsLastApr(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getVaultRewardTokens should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultRewardTokens(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isArray = Array.isArray(value);

    expect(isArray).is.equal(true);
  });

  it("getVaultRewardTokensBal should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultRewardTokensBal(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isArray = Array.isArray(value);

    expect(isArray).is.equal(true);
  });

  it("getVaultRewardTokensBalUsdc should be correct", async () => {
    const value =
      await tetuApi.contractReaderService.getVaultRewardTokensBalUsdc(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

    const isArray = Array.isArray(value);

    expect(isArray).is.equal(true);
  });

  it("getVaultRewardsApr should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultRewardsApr(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isArray = Array.isArray(value);

    expect(isArray).is.equal(true);
  });

  it("getVaultTvl should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultTvl(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getVaultTvlUsdc should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultTvlUsdc(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getVaultUnderlying should be correct", async () => {
    const result = "0x255707B70BF90aa112006E1b07B9AeA6De021424".toLowerCase();
    const value = await tetuApi.contractReaderService.getVaultUnderlying(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(value.toLowerCase()).is.equal(result);
  });

  it("getVaultUsers should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultUsers(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    expect(isBigNumber(value)).is.equal(true);
  });

  it("getVaultWithUserInfoPages should be correct", async () => {
    const values =
      await tetuApi.contractReaderService.getVaultWithUserInfoPages(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
        BigNumber.from(1),
        BigNumber.from(1)
      );
    
    const vault = values[0].vault
    const user = values[0].user

    expect(Array.isArray(values)).is.equal(true);

    // Check vault
    expect(Web3.utils.isAddress(vault.addr)).is.equal(true);
    expect(vault.name).is.equal("TETU_SUSHI_WMATIC_WETH");
    expect(isBigNumber(vault.created)).is.equal(true);
    expect(typeof vault.active === "boolean").is.equal(true);
    expect(isBigNumber(vault.tvl)).is.equal(true);
    expect(isBigNumber(vault.tvlUsdc)).is.equal(true);
    expect(isBigNumber(vault.decimals)).is.equal(true);
    expect(Web3.utils.isAddress(vault.underlying)).is.equal(true);
    expect(Array.isArray(vault.rewardTokens)).is.equal(true);
    expect(Array.isArray(vault.rewardTokensBal)).is.equal(true);
    expect(Array.isArray(vault.rewardTokensBalUsdc)).is.equal(true);
    expect(isBigNumber(vault.duration)).is.equal(true);
    expect(Array.isArray(vault.rewardsApr)).is.equal(true);
    expect(isBigNumber(vault.ppfsApr)).is.equal(true);
    expect(isBigNumber(vault.users)).is.equal(true);
    expect(Web3.utils.isAddress(vault.strategy)).is.equal(true);
    expect(isBigNumber(vault.strategyCreated)).is.equal(true);
    expect(typeof vault.platform === "number").is.equal(true);
    expect(Array.isArray(vault.assets)).is.equal(true);
    expect(Web3.utils.isAddress(vault.assets[0])).is.equal(true);
    expect(Array.isArray(vault.strategyRewards)).is.equal(true);
    expect(typeof vault.strategyOnPause === "boolean").is.equal(true);
    expect(isBigNumber(vault.earned)).is.equal(true);

    // Check user
    expect(Web3.utils.isAddress(user.wallet)).is.equal(true);
    expect(Web3.utils.isAddress(user.vault)).is.equal(true);
    expect(isBigNumber(user.underlyingBalance)).is.equal(true);
    expect(isBigNumber(user.underlyingBalanceUsdc)).is.equal(true);
    expect(isBigNumber(user.depositedUnderlying)).is.equal(true);
    expect(isBigNumber(user.depositedUnderlyingUsdc)).is.equal(true);
    expect(isBigNumber(user.depositedShare)).is.equal(true);
    expect(Array.isArray(user.rewardTokens)).is.equal(true);
    expect(Array.isArray(user.rewards)).is.equal(true);
    expect(Array.isArray(user.rewardsUsdc)).is.equal(true);
    expect(Array.isArray(user.rewardsBoost)).is.equal(true);
    expect(Array.isArray(user.rewardsBoostUsdc)).is.equal(true);
  });

  it("getVaultWithUserInfoPagesLight should be correct", async () => {
    const values =
      await tetuApi.contractReaderService.getVaultWithUserInfoPagesLight(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
        BigNumber.from(1),
        BigNumber.from(1)
      );

    const vault = values[0].vault
    const user = values[0].user

    expect(Array.isArray(values)).is.equal(true);

    // Check vault
    expect(Web3.utils.isAddress(vault.addr)).is.equal(true);
    expect(isBigNumber(vault.created)).is.equal(true);
    expect(typeof vault.active === "boolean").is.equal(true);
    expect(isBigNumber(vault.tvl)).is.equal(true);
    expect(isBigNumber(vault.tvlUsdc)).is.equal(true);
    expect(Web3.utils.isAddress(vault.underlying)).is.equal(true);
    expect(Array.isArray(vault.rewardTokens)).is.equal(true);
    expect(Array.isArray(vault.rewardsApr)).is.equal(true);
    expect(isBigNumber(vault.ppfsApr)).is.equal(true);
    expect(typeof vault.platform === "number").is.equal(true);
    expect(Array.isArray(vault.assets)).is.equal(true);
    expect(Web3.utils.isAddress(vault.assets[0])).is.equal(true);
    expect(isBigNumber(vault.earned)).is.equal(true);

    // Check user
    expect(isBigNumber(user.depositedUnderlying)).is.equal(true);
    expect(isBigNumber(user.depositedUnderlyingUsdc)).is.equal(true);
    expect(isBigNumber(user.depositedShare)).is.equal(true);
  });

  it("getVaultWithUserInfos should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultWithUserInfos(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const vault = values[0].vault
    const user = values[0].user

    expect(Array.isArray(values)).is.equal(true);

    // Check vault
    expect(Web3.utils.isAddress(vault.addr)).is.equal(true);
    expect(vault.name).is.equal("TETU_PS");
    expect(isBigNumber(vault.created)).is.equal(true);
    expect(typeof vault.active === "boolean").is.equal(true);
    expect(isBigNumber(vault.tvl)).is.equal(true);
    expect(isBigNumber(vault.tvlUsdc)).is.equal(true);
    expect(isBigNumber(vault.decimals)).is.equal(true);
    expect(Web3.utils.isAddress(vault.underlying)).is.equal(true);
    expect(Array.isArray(vault.rewardTokens)).is.equal(true);
    expect(Array.isArray(vault.rewardTokensBal)).is.equal(true);
    expect(Array.isArray(vault.rewardTokensBalUsdc)).is.equal(true);
    expect(isBigNumber(vault.duration)).is.equal(true);
    expect(Array.isArray(vault.rewardsApr)).is.equal(true);
    expect(isBigNumber(vault.ppfsApr)).is.equal(true);
    expect(isBigNumber(vault.users)).is.equal(true);
    expect(Web3.utils.isAddress(vault.strategy)).is.equal(true);
    expect(isBigNumber(vault.strategyCreated)).is.equal(true);
    expect(typeof vault.platform === "number").is.equal(true);
    expect(Array.isArray(vault.assets)).is.equal(true);
    expect(Web3.utils.isAddress(vault.assets[0])).is.equal(true);
    expect(Array.isArray(vault.strategyRewards)).is.equal(true);
    expect(typeof vault.strategyOnPause === "boolean").is.equal(true);
    expect(isBigNumber(vault.earned)).is.equal(true);

    // Check user
    expect(Web3.utils.isAddress(user.wallet)).is.equal(true);
    expect(Web3.utils.isAddress(user.vault)).is.equal(true);
    expect(isBigNumber(user.underlyingBalance)).is.equal(true);
    expect(isBigNumber(user.underlyingBalanceUsdc)).is.equal(true);
    expect(isBigNumber(user.depositedUnderlying)).is.equal(true);
    expect(isBigNumber(user.depositedUnderlyingUsdc)).is.equal(true);
    expect(isBigNumber(user.depositedShare)).is.equal(true);
    expect(Array.isArray(user.rewardTokens)).is.equal(true);
    expect(Array.isArray(user.rewards)).is.equal(true);
    expect(Array.isArray(user.rewardsUsdc)).is.equal(true);
    expect(Array.isArray(user.rewardsBoost)).is.equal(true);
    expect(Array.isArray(user.rewardsBoostUsdc)).is.equal(true);
  });

  it("getVaultWithUserInfosLight should be correct", async () => {
    const values =
      await tetuApi.contractReaderService.getVaultWithUserInfosLight(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
        ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
      );

      const vault = values[0].vault
      const user = values[0].user
  
      expect(Array.isArray(values)).is.equal(true);
  
      // Check vault
      expect(Web3.utils.isAddress(vault.addr)).is.equal(true);
      expect(isBigNumber(vault.created)).is.equal(true);
      expect(typeof vault.active === "boolean").is.equal(true);
      expect(isBigNumber(vault.tvl)).is.equal(true);
      expect(isBigNumber(vault.tvlUsdc)).is.equal(true);
      expect(Web3.utils.isAddress(vault.underlying)).is.equal(true);
      expect(Array.isArray(vault.rewardTokens)).is.equal(true);
      expect(Array.isArray(vault.rewardsApr)).is.equal(true);
      expect(isBigNumber(vault.ppfsApr)).is.equal(true);
      expect(typeof vault.platform === "number").is.equal(true);
      expect(Array.isArray(vault.assets)).is.equal(true);
      expect(Web3.utils.isAddress(vault.assets[0])).is.equal(true);
      expect(isBigNumber(vault.earned)).is.equal(true);
  
      // Check user
      expect(isBigNumber(user.depositedUnderlying)).is.equal(true);
      expect(isBigNumber(user.depositedUnderlyingUsdc)).is.equal(true);
      expect(isBigNumber(user.depositedShare)).is.equal(true);
  });

  it("getVaults should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaults(
      testContractReaderAddress
    );

    const isArray = Array.isArray(values);

    expect(isArray).is.equal(true);
    expect(isAddresses(values)).is.equal(true);
  });

  it("getVaultsLength should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultsLength(
      testContractReaderAddress
    );

    expect(isBigNumber(value)).is.equal(true);
  });
});
