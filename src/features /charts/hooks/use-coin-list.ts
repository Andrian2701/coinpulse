import { useQuery } from '@tanstack/react-query'

import { coinsService } from '../services/coins-service'

export const useCoinList = () => {
  return useQuery({
    queryKey: ['coins', 'list'],
    queryFn: () => coinsService.getCoinList(),
    refetchOnWindowFocus: true,
  })
}
