export type AssetInfo = {
  asset: string;
  asset_longname: string | null;
  owner: string;
  divisible: boolean;
  locked: boolean;
  supply: number;
  description: string;
  issuer: string;
};
