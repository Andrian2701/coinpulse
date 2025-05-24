import { CoinPriceChart, MarketActivityGauge, MarketShareList, NewsFeed, TrendingCoinsTable } from "@/components";

export default async function Home() {
  return (
    <main className="flex flex-col gap-6">
      <MarketShareList />
      <div className="flex flex-col lg:flex-row gap-6">
        <CoinPriceChart />
        <NewsFeed />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <TrendingCoinsTable />
        <div className="flex flex-col lg:flex-row md:flex-1 gap-6 lg:h-[408px]">
          <MarketActivityGauge />
          <MarketActivityGauge />
        </div>
      </div>
    </main>
  );
}
