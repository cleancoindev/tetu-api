import type { TVaultInfo } from "./t-vault-info";
import type { TUserInfo } from "./t-user-info";

export type TVaultWithUserInfos = ([
  TVaultInfo,
  TUserInfo
] & { vault: TVaultInfo; user: TUserInfo })[];
