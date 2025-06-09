import {
  CoinPriceChart,
  GlobalsCard,
  MarketShareList,
  NewsFeed,
  TrendingCoinsTable,
} from '@/components'

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
        <div className="w-full lg:flex-1 flex flex-col h-[408px] gap-6">
          <GlobalsCard title="Market Change" />
          <GlobalsCard title="Markets" />
        </div>
      </div>
    </main>
  )
}
