import { GlobalsList, TrendingCoinsTable } from "@/components";
import { CoinPriceChart } from "@/components/coin-price-chart";

export default async function Home() {
  return (
    <main className="flex flex-col gap-6">
      <GlobalsList />
      <CoinPriceChart />
      <TrendingCoinsTable />
    </main>
  );
}
