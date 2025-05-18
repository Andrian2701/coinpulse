export interface CoinInterface {
  coin_id: number;
  small: string;
  name: string;
  data: {
    price: number;
    total_volume: string;
    price_change_percentage_24h: {
      usd: number;
    };
  };
}
