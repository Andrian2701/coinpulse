import { axiosInstance } from '@/lib/axios-instance'
import {
  TrendingCoinInterface,
  GlobalsInterface,
  CoinInterface,
  CoinPriceType,
  CoinPriceParamsInterface,
} from '../types/coins-types'

class CoinsService {
  async getTrendingCoins(): Promise<{ item: TrendingCoinInterface }[] | null> {
    try {
      const res = await axiosInstance.get('search/trending')

      if (res.data?.error) {
        throw new Error()
      }

      return res.status === 200 ? res.data.coins : null
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getGlobals(): Promise<GlobalsInterface | null> {
    try {
      const res = await axiosInstance.get('global')

      if (res.data?.error) {
        throw new Error()
      }

      return res.status === 200 ? res.data.data : null
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getCoinList(): Promise<CoinInterface[] | null> {
    try {
      const res = await axiosInstance.get('coins/markets?vs_currency=usd')

      if (res.data?.error) {
        throw new Error()
      }

      return res.status === 200 ? res.data : null
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getCoinPrice(params: CoinPriceParamsInterface): Promise<CoinPriceType[] | null> {
    try {
      const res = await axiosInstance.get(
        encodeURIComponent(`coins/${params.coin}/market_chart?vs_currency=usd&days=${params.days}`)
      )

      if (res.data?.error) {
        throw new Error()
      }

      return res.status === 200 ? res.data : null
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export const coinsService = new CoinsService()
