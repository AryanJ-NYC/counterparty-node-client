export type Dispense = {
  tx_index: number;
  dispense_index: number;
  tx_hash: string;
  block_index: number;
  source: string;
  destination: string;
  asset: string;
  dispense_quantity: number;
  dispenser_tx_hash: string;
};
export type DispenseField = keyof Dispense;
