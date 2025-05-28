import { useQuery } from '@tanstack/react-query'

import { coinsService } from '@/services/coins-service'

export const useNews = () => {
  return useQuery({
    queryKey: ['coins', 'news'],
    queryFn: coinsService.getNews,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  })
}
