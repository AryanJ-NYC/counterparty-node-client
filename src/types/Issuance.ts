export type Issuance = {
  tx_index: number;
  tx_hash: string;
  block_index: number;
  msg_index: number;
  asset: string;
  quantity: number;
  divisible: number;
  source: string;
  issuer: string;
  transfer: number;
  callable: number;
  call_date: number;
  call_price: number;
  description: string;
  fee_paid: number;
  status: string;
  locked: number;
  asset_longname: string | null;
};