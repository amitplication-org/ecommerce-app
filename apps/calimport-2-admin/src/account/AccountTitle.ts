import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "typeField";

export const AccountTitle = (record: TAccount): string => {
  return record.typeField?.toString() || String(record.id);
};
