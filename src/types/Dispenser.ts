export type Dispenser = {
  tx_index: number;
  tx_hash: string;
  block_index: number;
  source: string;
  asset: string;
  give_quantity: number;
  escrow_quantity: number;
  satoshirate: number;
  status: number;
  give_remaining: number;
};
export type DispenserField = keyof Dispenser;
