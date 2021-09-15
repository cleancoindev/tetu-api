import type { TVaultInfoLight } from "./t-vault-info-light";
import type { TUserInfoLight } from "./t-user-info-light";

export type TVaultWithUserInfoPagesLight = ([
  TVaultInfoLight,
  TUserInfoLight
] & { vault: TVaultInfoLight; user: TUserInfoLight })[];
