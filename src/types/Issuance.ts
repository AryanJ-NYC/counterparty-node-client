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
  status: number;
  locked: number;
  asset_longname: string | null;
};

/*
{
			"tx_index": 1846055,
			"tx_hash": "38b73acdb9d29459bb69b7cd7cc57994a22164fc98dc9cdf8d21feae05583efa",
			"msg_index": 0,
			"block_index": 717904,
			"asset": "SPACECOASTER",
			"quantity": 0,
			"divisible": 0,
			"source": "193HJNQrEhvP4nJf359uDVxobQBCzvFLtd",
			"issuer": "193HJNQrEhvP4nJf359uDVxobQBCzvFLtd",
			"transfer": 0,
			"callable": 0,
			"call_date": 0,
			"call_price": 0.0,
			"description": "",
			"fee_paid": 50000000,
			"locked": 0,
			"status": "valid",
			"asset_longname": null
		},
*/
