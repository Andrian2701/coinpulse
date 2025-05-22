import { useQuery } from "@tanstack/react-query";

import { coinsService } from "@/services/coins-service";
import { CoinPriceParamsInterface } from "@/types/coins-types";

export const useCoinPrice = (params: CoinPriceParamsInterface) => {
  return useQuery({
    queryKey: ["coins", params, "price-history"],
    queryFn: () => coinsService.getCoinPrice(params),
    refetchOnWindowFocus: true,
    enabled: !!params,
  });
};
