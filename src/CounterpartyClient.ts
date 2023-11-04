import type { O } from 'ts-toolbelt';
import {
  Asset,
  AssetInfo,
  Balance,
  BlockInfo,
  Dispense,
  DispenseField,
  Dispenser,
  DispenserField,
  Issuance,
  MempoolMessage,
  Message,
  Order,
} from './types';
import { toBase64 } from './lib';

export class CounterpartyClient {
  constructor(
    private readonly url: string,
    private readonly username: string,
    private readonly password: string
  ) {}

  getAssetInfo = async (assets: string[]): Promise<AssetInfo[]> => {
    const response = await this.fetch('get_asset_info', { assets });
    const { result } = await response.json();
    return result;
  };

  getAssets = async (
    optionalParameters?: Parameters<keyof Asset>
  ): Promise<Asset[]> => {
    const response = await this.fetch('get_assets', optionalParameters);
    const { result } = await response.json();
    return result;
  };

  getBalances = async (
    optionalParameters?: Parameters<keyof Balance>
  ): Promise<Balance[]> => {
    const response = await this.fetch('get_balances', optionalParameters);
    const { result } = await response.json();
    return result;
  };

  getBlockInfo = async (block_index: number): Promise<BlockInfo> => {
    const response = await this.fetch('get_block_info', { block_index });
    const { result } = await response.json();
    return result;
  };

  getBlocks = async (block_indexes: number[]): Promise<BlockInfo[]> => {
    const response = await this.fetch('get_blocks', { block_indexes });
    const { result } = await response.json();
    return result;
  };

  getDispensers = async (
    optionalParameters?: Parameters<DispenserField>
  ): Promise<Dispenser[]> => {
    const response = await this.fetch('get_dispensers', optionalParameters);
    const { result } = await response.json();
    return result;
  };

  getDispenses = async (
    optionalParameters?: Parameters<DispenseField>
  ): Promise<Dispense[]> => {
    const response = await this.fetch('get_dispenses', optionalParameters);
    const { result } = await response.json();
    return result;
  };

  getMempool = async (): Promise<MempoolMessage[]> => {
    const response = await this.fetch('get_mempool');
    const { result } = await response.json();
    return result;
  };

  getMessages = async (block_index: number): Promise<Message[]> => {
    const response = await this.fetch('get_messages', { block_index });
    const { result } = await response.json();
    return result;
  };

  getOrders = async (
    optionalParameters?: Parameters<keyof Order>
  ): Promise<Order[]> => {
    const response = await this.fetch('get_orders', optionalParameters);
    const { result } = await response.json();
    return result;
  };

  getIssuances = async (
    optionalParameters?: Parameters<keyof Issuance>
  ): Promise<Issuance[]> => {
    const response = await this.fetch('get_issuances', optionalParameters);
    const { result } = await response.json();
    return result;
  };

  private fetch = async <T extends FetchParameters>(
    method: Method,
    optionalParameters?: T
  ) => {
    const authorization = toBase64(`${this.username}:${this.password}`);
    const body = JSON.stringify({
      method,
      params: optionalParameters,
      jsonrpc: '2.0',
      id: 0,
    });
    const response = await fetch(this.url, {
      headers: {
        authorization: `Basic ${authorization}`,
        'content-type': 'application/json',
      },
      body,
      method: 'POST',
    });
    if (response.ok) {
      return response;
    }
    throw new Error(response.statusText);
  };
}

type Parameters<T> = {
  filters?: O.Overwrite<
    Filter,
    {
      field: T;
    }
  >[];
  filterop?: 'AND' | 'OR';
  offset?: number;
  limit?: number;
  order_by?: T;
  order_dir?: OrderDir;
  status?: FetchParameters['status'];
};

type Filter = {
  field: string;
  op: Op;
  value: number | number[] | string | string[];
};
type FetchParameters = {
  assets?: string[];
  block_index?: number;
  block_indexes?: number[];
  filters?: Filter[];
  offset?: number;
  order_by?: string;
  order_dir?: OrderDir;
  limit?: number;
  status?: 0 | 1 | 10 | 'filled' | 'open';
};
type Method =
  | 'get_assets'
  | 'get_balances'
  | 'get_bets'
  | 'get_bet_expirations'
  | 'get_bet_matches'
  | 'get_bet_match_expirations'
  | 'get_bet_match_resolutions'
  | 'get_broadcasts'
  | 'get_btcpays'
  | 'get_burns'
  | 'get_cancels'
  | 'get_credits'
  | 'get_debits'
  | 'get_destructions'
  | 'get_dispensers'
  | 'get_dispenses'
  | 'get_dividends'
  | 'get_issuances'
  | 'get_mempool'
  | 'get_orders'
  | 'get_order_expirations'
  | 'get_order_matches'
  | 'get_order_match_expirations'
  | 'get_sends'
  | 'get_asset_info'
  | 'get_supply'
  | 'get_asset_names'
  | 'get_holder_count'
  | 'get_holders'
  | 'get_messages'
  | 'get_messages_by_index'
  | 'get_block_info'
  | 'get_blocks'
  | 'get_running_info'
  | 'get_element_counts'
  | 'get_unspent_txouts';
type OrderDir = 'asc' | 'desc';
type Op =
  | '=='
  | '!='
  | '>'
  | '<'
  | '>='
  | '<='
  | 'IN'
  | 'LIKE'
  | 'NOT IN'
  | 'NOT LIKE';
