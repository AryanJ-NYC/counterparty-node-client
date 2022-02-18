export type Message = {
  message_index: number;
  block_index: number;
  command: MessageCommands;
  category: MessageCategories;
  bindings: string;
  timestamp: number;
};
export type MessageField = keyof Message;

export type MempoolMessage = {
  tx_hash: string;
  command: MessageCommands;
  category: MessageCategories;
  bindings: string;
  timestamp: number;
};

type MessageCategories =
  | 'credits'
  | 'debits'
  | 'dispenses'
  | 'dispensers'
  | 'sends'
  | 'orders';
type MessageCommands = 'insert' | 'update';
