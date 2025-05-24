import { axiosInstance } from "@/lib/axios-instance";
import {
  TrendingCoinInterface,
  GlobalsInterface,
  CoinInterface,
  CoinPriceType,
  CoinPriceParamsInterface,
  NewArticleInterface,
} from "@/types/coins-types";
import axios from "axios";

class CoinsService {
  async getTrendingCoins(): Promise<{ item: TrendingCoinInterface }[] | null> {
    try {
      const res = await axiosInstance.get("search/trending");

      return res.status === 200 ? res.data.coins : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getGlobals(): Promise<GlobalsInterface | null> {
    try {
      const res = await axiosInstance.get("global");

      return res.status === 200 ? res.data.data : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCoinList(): Promise<CoinInterface[] | null> {
    try {
      const res = await axiosInstance.get("coins/markets?vs_currency=usd");

      return res.status === 200 ? res.data : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCoinPrice(
    params: CoinPriceParamsInterface
  ): Promise<CoinPriceType[] | null> {
    try {
      const res = await axiosInstance.get(
        encodeURIComponent(
          `coins/${params.coin}/market_chart?vs_currency=usd&days=${params.days}`
        )
      );

      return res.status === 200 ? res.data.prices : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getNews(): Promise<NewArticleInterface[] | null> {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_NDIO}?apikey=${process.env.NEXT_PUBLIC_API_KEY_NDIO}&q=crypto&language=en`
      );

      return res.status === 200 ? res.data.results : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export const coinsService = new CoinsService();
