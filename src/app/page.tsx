import { CoinPriceChart, MarketShareList, NewsFeed, TrendingCoinsTable } from '@/components'

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
      </div>
    </main>
  )
}
