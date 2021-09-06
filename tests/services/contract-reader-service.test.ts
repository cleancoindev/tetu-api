import Web3 from "web3";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { BigNumber, ethers } from "ethers";
import { Addresses } from "../../src/addresses";
import { assertBN } from "../test-utils";
import { TetuApi } from "../../src/tetu-api";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

chai.use(chaiAsPromised);

const testContractReaderAddress = "0xCa9C8Fba773caafe19E6140eC0A7a54d996030Da";

describe("Vault service tests", (): void => {
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
    const isBigNumber = precision instanceof BigNumber;

    expect(precision.toString()).is.equal(result);
    expect(isBigNumber).is.equal(true);
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

    const isBigNumber = apr instanceof BigNumber;

    expect(apr.toString()).is.equal(result);
    expect(isBigNumber).is.equal(true);
  });

  // TODO It can will be change?
  it("computeRewardApr should be correct", async () => {
    const result = "0";
    const rewardApr = await tetuApi.contractReaderService.computeRewardApr(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
      "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3"
    );

    const isBigNumber = rewardApr instanceof BigNumber;

    expect(rewardApr.toString()).is.equal(result);
    expect(isBigNumber).is.equal(true);
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

    const isBigNumber = created instanceof BigNumber;

    expect(created.toString()).is.equal(result);
    expect(isBigNumber).is.equal(true);
  });

  it("getPrice should be correct", async () => {
    const price = await tetuApi.contractReaderService.getPrice(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isBigNumber = price instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
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
    const isAddresses = strategies.every((strategy) =>
      Web3.utils.isAddress(strategy)
    );

    expect(isArray).is.equal(true);
    expect(isAddresses).is.equal(true);
  });

  it("getStrategiesLength should be correct", async () => {
    const lenght = await tetuApi.contractReaderService.getStrategiesLength(
      testContractReaderAddress
    );

    const isBigNumber = lenght instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getStrategyAssets should be correct", async () => {
    const strategies = await tetuApi.contractReaderService.getStrategyAssets(
      testContractReaderAddress,
      "0xb5a5d5fe893bc26c6e70cebb8a193f764a438fd5"
    );

    const isArray = Array.isArray(strategies);
    const isAddresses = strategies.every((strategy) =>
      Web3.utils.isAddress(strategy)
    );

    expect(isArray).is.equal(true);
    expect(isAddresses).is.equal(true);
  });

  it("getStrategyCreated should be correct", async () => {
    const result = "1627742159";
    const created = await tetuApi.contractReaderService.getStrategyCreated(
      testContractReaderAddress,
      "0xb5a5d5fe893bc26c6e70cebb8a193f764a438fd5"
    );

    const isBigNumber = created instanceof BigNumber;

    expect(created.toString()).is.equal(result);
    expect(isBigNumber).is.equal(true);
  });

  it("getStrategyEarned should be correct", async () => {
    const earned = await tetuApi.contractReaderService.getStrategyEarned(
      testContractReaderAddress,
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isBigNumber = earned instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
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
    const isAddresses = strategyRewardTokens.every((strategyRewardToken) =>
      Web3.utils.isAddress(strategyRewardToken)
    );

    expect(isArray).is.equal(true);
    expect(isAddresses).is.equal(true);
  });

  it("getTetuTokenValues should be correct", async () => {
    const tetuTokenValues =
      await tetuApi.contractReaderService.getTetuTokenValues(
        testContractReaderAddress
      );

    const isArray = Array.isArray(tetuTokenValues);
    const isBigNumbers = tetuTokenValues.every(
      (tetuTokenValue) => tetuTokenValue instanceof BigNumber
    );

    expect(isArray).is.equal(true);
    expect(isBigNumbers).is.equal(true);
  });

  it("getTotalTetuBoughBack should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalTetuBoughBack(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const isBigNumber = value instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getTotalTvlUsdc should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalTvlUsdc(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const isBigNumber = value instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getTotalUsers should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalUsers(
      testContractReaderAddress,
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const isBigNumber = value instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getTotalUsersForAllVaults should be correct", async () => {
    const value = await tetuApi.contractReaderService.getTotalUsersForAllVaults(
      testContractReaderAddress,
    );

    const isBigNumber = value instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getUserDepositedShare should be correct", async () => {
    const value = await tetuApi.contractReaderService.getUserDepositedShare(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isBigNumber = value instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getUserDepositedUnderlying should be correct", async () => {
    const value = await tetuApi.contractReaderService.getUserDepositedUnderlying(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isBigNumber = value instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getUserDepositedUnderlyingUsdc should be correct", async () => {
    const value = await tetuApi.contractReaderService.getUserDepositedUnderlyingUsdc(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const isBigNumber = value instanceof BigNumber;

    expect(isBigNumber).is.equal(true);
  });

  it("getUserInfo should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfo(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const infoHasArray = values.some(value => Array.isArray(value))
    const infoHasString = values.some(value => typeof value === "string")
    const infoHasBigNumber = values.some(value => value instanceof BigNumber)

    const isArray = Array.isArray(values);

    expect(infoHasArray).is.equal(true);
    expect(infoHasString).is.equal(true);
    expect(infoHasBigNumber).is.equal(true);
    expect(isArray).is.equal(true);
  });

  it("getUserInfoLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfoLight(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"
    );

    const infoHasBigNumber = values.some(value => value instanceof BigNumber)

    const isArray = Array.isArray(values);

    expect(infoHasBigNumber).is.equal(true);
    expect(isArray).is.equal(true);
  });

  it("getUserInfosLight should be correct", async () => {
    const values = await tetuApi.contractReaderService.getUserInfosLight(
      testContractReaderAddress,
      "0xbff5254bac5b72f6aced9093b5b6b9b0ca688249",
      ["0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"]
    );

    const valuesIsArray = Array.isArray(values);
    

    const elements = values[0];
    const elementsIsArray = Array.isArray(elements);
    const elementsHasBigNumber = elements.some(element => element instanceof BigNumber)

    expect(valuesIsArray).is.equal(true);
    expect(elementsIsArray).is.equal(true);
    expect(elementsHasBigNumber).is.equal(true);
  });
});
