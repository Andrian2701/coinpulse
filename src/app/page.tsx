import { Metadata } from 'next'

import {
  CoinPriceChart,
  GlobalsCard,
  MarketShareList,
  TrendingCoinsTable,
} from '@/features /charts/components'

export const metadata: Metadata = {
  title: 'My Analytics',
}

export default async function Home() {
  return (
    <main className="flex flex-col gap-6">
      <MarketShareList />
      <CoinPriceChart />
      <div className="flex flex-col lg:flex-row gap-6">
        <TrendingCoinsTable />
        <div className="w-full lg:flex-1 flex flex-col h-[408px] gap-6">
          <GlobalsCard title="Market Cap Change" />
          <GlobalsCard title="Markets" />
        </div>
      </div>
    </main>
  )
}
