import { useQuery } from '@tanstack/react-query'

import { coinsService } from '../services/coins-service'

export const useGlobals = () => {
  return useQuery({
    queryKey: ['coins', 'globals'],
    queryFn: coinsService.getGlobals,
    refetchOnWindowFocus: true,
  })
}
