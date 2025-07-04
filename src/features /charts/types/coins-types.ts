export interface TrendingCoinInterface {
  coin_id: number
  small: string
  name: string
  data: {
    price: number
    total_volume: string
    price_change_percentage_24h: {
      usd: number
    }
  }
}

export interface GlobalsInterface {
  market_cap_percentage: {
    btc: number
    eth: number
    usdt: number
  }
  total_market_cap: {
    usd: number
  }
  total_volume: {
    usd: number
  }
  market_cap_change_percentage_24h_usd: number
  markets: number
}

export interface CoinInterface {
  id: string
  image: string
  name: string
  symbol: string
}

export type CoinPriceType = [number, number]

/* eslint-disable no-unused-vars */
export enum TimeRange {
  day = 1,
  week = 7,
  month = 30,
  year = 365,
}

export enum CoinPriceMetricsEnum {
  prices = 'prices',
  caps = 'market_caps',
  volumes = 'total_volumes',
}

export enum ChartTypeEnum {
  line = 'line',
  bar = 'bar',
}
/* eslint-enable no-unused-vars */

export interface CoinPriceParamsInterface {
  coin: string
  days: TimeRange | null
}
