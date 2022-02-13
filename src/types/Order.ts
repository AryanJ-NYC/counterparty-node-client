export type Order = {
  tx_index: number;
  tx_hash: string;
  block_index: number;
  source: string;
  give_asset: string;
  give_quantity: number;
  give_remaining: number;
  get_asset: string;
  get_quantity: number;
  get_remaining: number;
  expiration: number;
  expire_index: number;
  fee_required: number;
  fee_required_remaining: number;
  fee_provided: number;
  fee_provided_remaining: number;
  status: 'filled' | 'open';
};
