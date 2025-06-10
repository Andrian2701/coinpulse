'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import { useTheme } from 'next-themes'

import {
  CoinPriceChartTypeToggle,
  CoinPriceMetricsSelect,
  CoinSelect,
  ErrorMessage,
  TableHeading,
  TimeRangeToggle,
} from '..'
import { useCoinList } from '@/hooks/use-coin-list'
import { useFormattedCoinPrices } from '@/hooks/use-format-coin-price'
import { useCoinPrice } from '@/hooks/use-coin-price'
import { ChartTypeEnum, CoinPriceMetricsEnum, ThemeEnum, TimeRange } from '@/types/coins-types'
import { Spinner } from '../ui/spinner'

const formatPrice = (price: number): string => {
  const abs = Math.abs(price)

  if (abs >= 1_000_000_000_000) {
    return `${(price / 1_000_000_000_000).toFixed(2)}T`
  } else if (abs >= 1_000_000_000) {
    return `${(price / 1_000_000_000).toFixed(2)}B`
  } else if (abs >= 1_000_000) {
    return `${(price / 1_000_000).toFixed(2)}M`
  } else if (abs >= 1_000) {
    return `${(price / 1_000).toFixed(2)}K`
  } else if (abs >= 1) {
    return price.toFixed(2)
  } else if (abs >= 0.01) {
    return price.toFixed(4)
  } else if (abs >= 0.0001) {
    return price.toFixed(6)
  } else {
    return price.toExponential(2)
  }
}

const getChartTitle = (option: CoinPriceMetricsEnum) => {
  switch (option) {
    case CoinPriceMetricsEnum.prices:
      return 'Price Analytics'
    case CoinPriceMetricsEnum.caps:
      return 'Market Caps'
    case CoinPriceMetricsEnum.volumes:
      return 'Total Volumes'
    default:
      return 'Price Analytics'
  }
}

type CoinDataType = {
  [CoinPriceMetricsEnum.prices]?: number[][]
  [CoinPriceMetricsEnum.caps]?: number[][]
  [CoinPriceMetricsEnum.volumes]?: number[][]
}

export const CoinPriceChart = () => {
  const { resolvedTheme } = useTheme()
  const isDarkTheme = resolvedTheme === ThemeEnum.dark

  const { data: coinList, isPending, isError } = useCoinList()

  const [selectedCoinId, setSelectedCoinId] = useState('')
  const [timeRange, setTimeRange] = useState<number | null>(null)
  const [chartType, setChartType] = useState<ChartTypeEnum>(ChartTypeEnum.line)
  const [coinChartMetrics, setCoinChartMetrics] = useState<CoinPriceMetricsEnum>(
    CoinPriceMetricsEnum.prices
  )

  const {
    data: coinData,
    isPending: pricePending,
    isError: priceError,
  } = useCoinPrice({ coin: selectedCoinId, days: timeRange })

  const filteredCoinData = useMemo<number[][]>(() => {
    return (coinData as CoinDataType)?.[coinChartMetrics] ?? []
  }, [coinData, coinChartMetrics])

  const formattedPrices = useFormattedCoinPrices(filteredCoinData, timeRange)

  useEffect(() => {
    if (coinList) {
      setSelectedCoinId('bitcoin')
      setTimeRange(TimeRange.day)
    }
  }, [coinList])

  return (
    <div className="flex flex-col justify-between gap-6 w-full">
      <CoinPriceMetricsSelect
        setCoinChartMetrics={setCoinChartMetrics}
        coinChartMetrics={coinChartMetrics}
      />
      <div className="w-full border border-border rounded-lg p-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 sm:gap-4 w-full">
          <TimeRangeToggle timeRange={timeRange} setTimeRange={setTimeRange} />
          <div className="w-full sm:w-auto flex gap-4 items-center">
            <CoinPriceChartTypeToggle chartType={chartType} setChartType={setChartType} />
            <CoinSelect
              selectedCoinId={selectedCoinId}
              setSelectedCoinId={setSelectedCoinId}
              isError={isError}
              isPending={isPending}
              coinList={coinList}
            />
          </div>
        </div>
        <div className="w-full h-[250px]">
          {!coinData ? (
            <div className="h-full w-full flex items-center justify-center">
              {pricePending && <Spinner size="medium" />}
              {priceError && <ErrorMessage>Couldn&apos;t fetch price analytics</ErrorMessage>}
            </div>
          ) : chartType === ChartTypeEnum.line ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={formattedPrices}
                syncId="anyId"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tick={{ fontSize: 12, fill: '#5c5c61', fontWeight: 'light' }}
                />
                <YAxis
                  domain={['dataMin - dataMin * 0.02', 'dataMax + dataMax * 0.02']}
                  tick={{ fontSize: 12, fill: '#5c5c61', fontWeight: 'light' }}
                  tickFormatter={(value: number) => `$${formatPrice(value)}`}
                />
                <Tooltip
                  formatter={(value: number) => [`$${formatPrice(value)}`, 'Price']}
                  contentStyle={
                    isDarkTheme
                      ? {
                          border: '1px solid #5c5c61',
                          borderRadius: '9px',
                          background: '#0f0f0f',
                        }
                      : {
                          border: '1px solid #e5e7eb',
                          borderRadius: '9px',
                          background: '#fff',
                        }
                  }
                  labelStyle={{ color: '#5c5c61', fontSize: '12px' }}
                  itemStyle={{ color: isDarkTheme ? '#fff' : '#2c2c2e', fontSize: '14px' }}
                />
                <Area type="monotone" dataKey="price" stroke="#ff3b30" fill="#ff3b301a" />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={formattedPrices}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tick={{ fontSize: 12, fill: '#5c5c61', fontWeight: 'light' }}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: '#5c5c61', fontWeight: 'light' }}
                  tickFormatter={(value: number) => `$${formatPrice(value)}`}
                />
                <Tooltip
                  formatter={(value: number) => [`$${formatPrice(value)}`, 'Price']}
                  contentStyle={
                    isDarkTheme
                      ? {
                          border: '1px solid #5c5c61',
                          borderRadius: '9px',
                          background: '#0f0f0f',
                        }
                      : {
                          border: '1px solid #e5e7eb',
                          borderRadius: '9px',
                          background: '#fff',
                        }
                  }
                  labelStyle={{ color: '#5c5c61', fontSize: '12px' }}
                  itemStyle={{ color: isDarkTheme ? '#fff' : '#2c2c2e', fontSize: '14px' }}
                />
                <Bar dataKey="price" fill="#ff3b30" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        <TableHeading align="center">{getChartTitle(coinChartMetrics)}</TableHeading>
      </div>
    </div>
  )
}
