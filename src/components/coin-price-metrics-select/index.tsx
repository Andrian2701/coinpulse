import { Dispatch, SetStateAction } from 'react'

import { CoinPriceMetricsEnum } from '@/types/coins-types'

const metrics = [
  {
    title: 'Price Analytics',
    value: CoinPriceMetricsEnum.prices,
  },
  {
    title: 'Market Caps',
    value: CoinPriceMetricsEnum.caps,
  },
  {
    title: 'Total Volumes',
    value: CoinPriceMetricsEnum.volumes,
  },
]

interface Props {
  setCoinChartMetrics: Dispatch<SetStateAction<CoinPriceMetricsEnum>>
  coinChartMetrics: CoinPriceMetricsEnum
}

export const CoinPriceMetricsSelect = ({ setCoinChartMetrics, coinChartMetrics }: Props) => {
  return (
    <ul className="flex gap-10 w-full sm:w-auto py-2 sm:p-0 overflow-x-scroll">
      {metrics.map((metric) => (
        <li
          key={metric.title}
          className={`text-text-secondary text-[12px] cursor-pointer flex-shrink-0 hover:text-text-primary ${coinChartMetrics === metric.value ? '!text-text-primary' : ''}`}
          onClick={() => setCoinChartMetrics(metric.value)}
        >
          {metric.title}
        </li>
      ))}
    </ul>
  )
}
