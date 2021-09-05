import Web3 from "web3";
import chai, {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import {Addresses} from "../../src/addresses";
import {assertBN} from "../test-utils";
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
});
