export type BlockInfo = {
  block_index: number;
  block_hash: string;
  block_time: number;
  previous_block_hash: string;
  difficulty: number;
  ledger_hash: string;
  txlist_hash: string;
  messages_hash: string;
};
