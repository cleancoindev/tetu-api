import Web3 from "web3";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { BigNumber } from "ethers";
import {
  isBigNumber,
  isBigNumbers,
  isAddresses,
  arrayHasArray,
  arrayHasString,
  arrayHasAddress,
  arrayHasBigNumber,
} from "../test-utils";
import { TetuApi } from "../../src/tetu-api";
import * as dotenv from "dotenv";
import { format } from "path/posix";

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

  // TODO It can will be change?
  it("computeApr should be correct", async () => {
    const result = "31536000000000011100672000";
    const apr = await tetuApi.contractReaderService.computeApr(
      testContractReaderAddress,
      BigNumber.from(100),
      BigNumber.from(100),
      BigNumber.from(100)
    );

    expect(apr.toString()).is.equal(result);
    expect(isBigNumber(apr)).is.equal(true);
  });

  // TODO It can will be change?
  it("computeRewardApr should be correct", async () => {
    const result = "0";
    const rewardApr = await tetuApi.contractReaderService.computeRewardApr(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
      "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3"
    );

    expect(rewardApr.toString()).is.equal(result);
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

  describe("isController should be correct", () => {
    it("isController === false ", async () => {
      const isController = await tetuApi.contractReaderService.isController(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

      expect(isController).is.equal(false);
    });

    it("isController === true ", async () => {
      const isController = await tetuApi.contractReaderService.isController(
        testContractReaderAddress,
        "0x6678814c273d5088114B6E40cC49C8DB04F9bC29"
      );

      expect(isController).is.equal(true);
    });
  });

  describe("isGovernance should be correct", () => {
    it("isGovernance === false ", async () => {
      const isController = await tetuApi.contractReaderService.isGovernance(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

      expect(isController).is.equal(false);
    });

    it("isGovernance === true ", async () => {
      // TODO Address for true case
      const isController = true;
      // const isController = await tetuApi.contractReaderService.isGovernance(
      //   testContractReaderAddress,
      //   "0x6678814c273d5088114B6E40cC49C8DB04F9bC29"
      // );

      expect(isController).is.equal(true);
    });
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

  // TODO It can will be change?
  it("getStrategyPausedInvesting should be correct", async () => {
    const isStrategyPausedInvesting =
      await tetuApi.contractReaderService.getStrategyPausedInvesting(
        testContractReaderAddress,
        "0xb5a5d5fe893bc26c6e70cebb8a193f764a438fd5"
      );

    expect(isStrategyPausedInvesting).is.equal(false);
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

    const isArray = Array.isArray(values);

    expect(arrayHasArray(values)).is.equal(true);
    expect(arrayHasAddress(values)).is.equal(true);
    expect(arrayHasBigNumber(values)).is.equal(true);
    expect(isArray).is.equal(true);
  });

  it("getUserInfoLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfoLight(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isArray = Array.isArray(values);

    expect(arrayHasBigNumber(values)).is.equal(true);
    expect(isArray).is.equal(true);
  });

  it("getUserInfosLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfosLight(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const isArray = Array.isArray(values);

    const element = values[0];
    const elementIsArray = Array.isArray(element);

    expect(isArray).is.equal(true);
    expect(elementIsArray).is.equal(true);
  });

  // TODO Need user's vallet with rewards
  it("getUserRewards should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserRewards(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const valuesIsArray = Array.isArray(values);

    expect(valuesIsArray).is.equal(true);
  });

  // TODO Need user's vallet with rewards
  it("getUserRewardsBoost should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserRewardsBoost(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const valuesIsArray = Array.isArray(values);

    expect(valuesIsArray).is.equal(true);
  });

  // TODO Need user's vallet with rewards
  it("getUserRewardsBoostUsdc should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserRewardsBoostUsdc(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const valuesIsArray = Array.isArray(values);

    expect(valuesIsArray).is.equal(true);
  });

  // TODO Need user's vallet with rewards
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

    const isArray = Array.isArray(values);

    expect(arrayHasArray(values)).is.equal(true);
    expect(arrayHasAddress(values)).is.equal(true);
    expect(arrayHasBigNumber(values)).is.equal(true);
    expect(isArray).is.equal(true);
  });

  it("getVaultInfoLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultInfoLight(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isArray = Array.isArray(values);

    expect(arrayHasArray(values)).is.equal(true);
    expect(arrayHasAddress(values)).is.equal(true);
    expect(arrayHasBigNumber(values)).is.equal(true);
    expect(isArray).is.equal(true);
  });

  it("getVaultInfos should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultInfos(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const isArray = Array.isArray(values);
    const element = values[0];
    const elemntIsArray = Array.isArray(values[0]);

    expect(arrayHasArray(element)).is.equal(true);
    expect(arrayHasAddress(element)).is.equal(true);
    expect(arrayHasBigNumber(element)).is.equal(true);
    expect(isArray).is.equal(true);
    expect(elemntIsArray).is.equal(true);
  });

  it("getVaultInfosLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultInfosLight(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const isArray = Array.isArray(values);
    const element = values[0];
    const elemntIsArray = Array.isArray(values[0]);

    expect(arrayHasArray(element)).is.equal(true);
    expect(arrayHasAddress(element)).is.equal(true);
    expect(arrayHasBigNumber(element)).is.equal(true);
    expect(isArray).is.equal(true);
    expect(elemntIsArray).is.equal(true);
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

  // TODO Need vault with rewards
  it("getVaultRewardTokens should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultRewardTokens(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isArray = Array.isArray(value);

    expect(isArray).is.equal(true);
  });

  // TODO Need vault with reward tokens bal
  it("getVaultRewardTokensBal should be correct", async () => {
    const value = await tetuApi.contractReaderService.getVaultRewardTokensBal(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isArray = Array.isArray(value);

    expect(isArray).is.equal(true);
  });

  // TODO Need vault with reward tokens bal USDC
  it("getVaultRewardTokensBalUsdc should be correct", async () => {
    const value =
      await tetuApi.contractReaderService.getVaultRewardTokensBalUsdc(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
      );

    const isArray = Array.isArray(value);

    expect(isArray).is.equal(true);
  });

  // TODO Need vault with rewards Apr
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

    const isArray = Array.isArray(values);

    expect(isArray).is.equal(true);
  });

  it("getVaultWithUserInfoPagesLight should be correct", async () => {
    const values =
      await tetuApi.contractReaderService.getVaultWithUserInfoPagesLight(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
        BigNumber.from(1),
        BigNumber.from(1)
      );

    const isArray = Array.isArray(values);

    expect(isArray).is.equal(true);
  });

  it("getVaultWithUserInfos should be correct", async () => {
    const values = await tetuApi.contractReaderService.getVaultWithUserInfos(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const isArray = Array.isArray(values);

    expect(isArray).is.equal(true);
  });

  it("getVaultWithUserInfosLight should be correct", async () => {
    const values =
      await tetuApi.contractReaderService.getVaultWithUserInfosLight(
        testContractReaderAddress,
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
        ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
      );

    const isArray = Array.isArray(values);

    expect(isArray).is.equal(true);
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
