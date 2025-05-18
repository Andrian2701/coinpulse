import { axiosInstance } from "@/lib/axios-instance";
import { CoinInterface } from "@/types/coins-types";

class CoinsService {
  async getTrendingCoins(): Promise<{ item: CoinInterface }[] | null> {
    try {
      const res = await axiosInstance.get("/search/trending");

      return res.status === 200 ? res.data.coins : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export const coinsService = new CoinsService();
