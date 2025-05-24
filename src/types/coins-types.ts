export interface TrendingCoinInterface {
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

export interface GlobalsInterface {
  market_cap_percentage: {
    btc: number;
    eth: number;
    usdt: number;
  };
  total_market_cap: {
    usd: number;
  };
  total_volume: {
    usd: number;
  };
}

export interface CoinInterface {
  id: string;
  image: string;
  name: string;
  symbol: string;
}

export type CoinPriceType = [number, number];

export enum TimeRange {
  day = 1,
  week = 7,
  month = 30,
  year = 365,
}

export interface CoinPriceParamsInterface {
  coin: string;
  days: TimeRange;
}

export interface NewArticleInterface {
  article_id: string;
  image_url: string;
  pubDate: Date;
  title: string;
}
