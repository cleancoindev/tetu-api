import Web3 from "web3";
import {VaultService} from "./vault-service";
import {Networkish} from "@ethersproject/networks";

const MAX_RETRY = 3;

export class TetuApi {

  public readonly web3Instance: Web3;
  public readonly vaultService: VaultService;
  public readonly net: Networkish;

  constructor(web3Instance: Web3, net: Networkish) {
    this.web3Instance = web3Instance;
    this.net = net;
    this.vaultService = new VaultService(this);
  }

  public async web3Call0<T>(call: () => T, msg: string, retry = 0): Promise<T> {
    return Promise.resolve(call.call(this))
    .catch((reason) => {
      if (retry < MAX_RETRY
          && reason.toString().indexOf('execution reverted') === -1) {
        console.error(`Retry ${retry + 1} ${msg}`);
        return this.web3Call0(call, msg, retry + 1);
      }
      return Promise.reject(`Error web3 call ${msg} ${reason}`);
    });
  }

  public async web3Call1<T, K>(call: (a1: K) => T, a1: K, msg: string, retry = 0): Promise<T> {
    return Promise.resolve(call.call(this, a1))
    .catch((reason) => {
      if (retry < MAX_RETRY
          && reason.toString().indexOf('execution reverted') === -1) {
        console.error(`Retry ${retry + 1} ${msg}`);
        return this.web3Call1(call, a1, msg, retry + 1);
      }
      return Promise.reject(`Error web3 call ${msg} ${reason}`);
    });
  }

  public async web3Call2<T, K, G>(call: (a1: K, a2: G) => T, a1: K, a2: G, msg: string, retry = 0): Promise<T> {
    return Promise.resolve(call.call(this, a1, a2))
    .catch((reason) => {
      if (retry < MAX_RETRY
          && reason.toString().indexOf('execution reverted') === -1) {
        console.error(`Retry ${retry + 1} ${msg}`);
        return this.web3Call2(call, a1, a2, msg, retry + 1);
      }
      return Promise.reject(`Error web3 call ${msg} ${reason}`);
    });
  }
}
