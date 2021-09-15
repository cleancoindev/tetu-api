import type { TVaultInfoLight } from "./t-vault-info-light";
import type { TUserInfoLight } from "./t-user-info-light";

export type TVaultWithUserInfosLight = ([TVaultInfoLight, TUserInfoLight] & {
  vault: TVaultInfoLight;
  user: TUserInfoLight;
})[];
