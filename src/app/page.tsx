import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { GlobalsList, TrendingCoinsTable } from "@/components";
import { coinsService } from "@/services/coins-service";
import { getQueryClient } from "@/utils/get-query-client";

export default async function Home() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["coins", "globals"],
    queryFn: () => coinsService.getGlobals(),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-col gap-6">
        <GlobalsList />
        <TrendingCoinsTable />
      </main>
    </HydrationBoundary>
  );
}
