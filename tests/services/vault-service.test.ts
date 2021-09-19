import Web3 from "web3";
import chai, {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import {Addresses} from "../../src/addresses";
import {assertBN, isBigNumber} from "../test-utils";
import {TetuApi} from "../../src/tetu-api";
import * as dotenv from "dotenv";

dotenv.config({path: "./.env"});

chai.use(chaiAsPromised);

describe("Vault service tests", (): void => {
  let web3: Web3;
  let tetuApi: TetuApi;

  before(async function () {
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.MATIC_URL as string, {
      keepAlive: true,
      timeout: 120000, // ms
    }));
    tetuApi = new TetuApi(web3, 137);
  });

  it("VERSION should be correct", async () => {
    const result = await tetuApi.vaultService.getVersion("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(typeof result === "string")
    .is.equal(true);
  });

  it("active should be correct", async () => {
    const result = await tetuApi.vaultService.isActive("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(typeof result === "boolean")
    .is.equal(true);
  });

  it("allowance should be correct", async () => {
    const result = await tetuApi.vaultService.getAllowance("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef", "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("availableToInvestOut should be correct", async () => {
    const result = await tetuApi.vaultService.getAvailableToInvestOut("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("balanceOf should be correct", async () => {
    const result = await tetuApi.vaultService.getBalanceOf("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("controller should be correct", async () => {
    const result = await tetuApi.vaultService.getController("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(Web3.utils.isAddress(result))
    .is.equal(true);
  });

  it("created should be correct", async () => {
    const result = await tetuApi.vaultService.getCreated("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("decimals should be correct", async () => {
    const result = await tetuApi.vaultService.getDecimals("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(typeof result === "number")
    .is.equal(true);

    expect(result)
    .is.equal(18);
  });

  it("earned should be correct", async () => {
    const result = await tetuApi.vaultService.getEarned("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef", "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("earnedWithBoost should be correct", async () => {
    const result = await tetuApi.vaultService.getEarnedWithBoost("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef", "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3");

    expect(isBigNumber(result))
    .is.equal(true);
  });


  it("getPricePerFullShare should be correct", async () => {
    const result = await tetuApi.vaultService.getPricePerFullShare("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("getRewardTokenIndex should be correct", async () => {
    const result = await tetuApi.vaultService.getRewardTokenIndex("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("isController should be correct", async () => {
    const result = await tetuApi.vaultService.isController("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef");

    expect(typeof result === "boolean")
    .is.equal(true);
  });

  it("isGovernance should be correct", async () => {
    const result = await tetuApi.vaultService.isGovernance("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef");

    expect(typeof result === "boolean")
    .is.equal(true);
  });

  it("lastTimeRewardApplicable should be correct", async () => {
    const result = await tetuApi.vaultService.getLastTimeRewardApplicable("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("name should be correct", async () => {
    expect(await tetuApi.vaultService.getName("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"))
    .is.equal("TETU_PS");
  });

  it("error for wrong address", async () => {
    await expect(tetuApi.vaultService.getName("0x0D4D9e9E43e97f31C81a75415C4307c4b58AbF59"))
    .rejectedWith("Error web3 call 0x0D4D9e9E43e97f31C81a75415C4307c4b58AbF59 name");
  });

  it("periodFinishForToken should be correct", async () => {
    expect(await tetuApi.vaultService.getPeriodFinishForToken("0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3", "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"))
    .is.not.eq(0);
  });

  it("rewardRateForToken should be correct", async () => {
    expect(await tetuApi.vaultService.getRewardRateForToken("0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3", "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"))
    .is.not.eq(0);
  });

  it("lastUpdateTimeForToken should be correct", async () => {
    expect(await tetuApi.vaultService.getLastUpdateTimeForToken("0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3", "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"))
    .is.not.eq(0);
  });

  it("rewardPerTokenStoredForToken should be correct", async () => {
    expect(await tetuApi.vaultService.getRewardPerTokenStoredForToken("0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3", "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454"))
    .is.not.eq(0);
  });

  it("getUserRewardPerTokenPaidForToken should be correct", async () => {
    assertBN(await tetuApi.vaultService.getUserRewardPerTokenPaidForToken(
        "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3",
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
        Addresses.ZERO_ADDRESS
    ), 0);
  });

  it("rewardsForToken should be correct", async () => {
    assertBN(await tetuApi.vaultService.getRewardsForToken(
        "0x269A36957Bc7aDDee51c24AAC6f07c40dDFaCBC3",
        "0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454",
        Addresses.ZERO_ADDRESS
    ), 0);
  });

  it("rewardTokens should be correct", async () => {
    const result = await tetuApi.vaultService.getRewardTokens("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(Array.isArray(result))
    .is.equal(true);
  });

  it("rewardTokensLength should be correct", async () => {
    const result = await tetuApi.vaultService.getRewardTokensLength("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("strategy should be correct", async () => {
    const result = await tetuApi.vaultService.getStrategy("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(Web3.utils.isAddress(result))
    .is.equal(true);
  });

  it("totalSupply should be correct", async () => {
    const result = await tetuApi.vaultService.getTotalSupply("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("underlying should be correct", async () => {
    const result = await tetuApi.vaultService.getUnderlying("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(Web3.utils.isAddress(result))
    .is.equal(true);
  });

  it("underlyingBalanceInVault should be correct", async () => {
    const result = await tetuApi.vaultService.getUnderlyingBalanceInVault("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("underlyingBalanceWithInvestment should be correct", async () => {
    const result = await tetuApi.vaultService.getUnderlyingBalanceWithInvestment("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("underlyingBalanceWithInvestmentForHolder should be correct", async () => {
    const result = await tetuApi.vaultService.getUnderlyingBalanceWithInvestmentForHolder("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("underlyingUnit should be correct", async () => {
    const result = await tetuApi.vaultService.getUnderlyingUnit("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454");

    expect(isBigNumber(result))
    .is.equal(true);
  });

  it("userBoostTs should be correct", async () => {
    const result = await tetuApi.vaultService.getUserBoostTs("0x225084D30cc297F3b177d9f93f5C3Ab8fb6a1454", "0xA56522BCA0A09f57B85C52c0Cc8Ba1B5eDbc64ef");

    expect(isBigNumber(result))
    .is.equal(true);
  });

});
