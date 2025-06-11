import { useQuery } from '@tanstack/react-query'

import { coinsService } from '../services/coins-service'

export const useTrendingCoins = () => {
  return useQuery({
    queryKey: ['coins', 'trending-list'],
    queryFn: () => coinsService.getTrendingCoins(),
    select: (data) => data?.map((coin) => ({ ...coin.item })),
    refetchOnWindowFocus: true,
  })
}
