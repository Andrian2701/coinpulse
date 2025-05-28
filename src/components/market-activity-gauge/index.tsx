'use client'

import { PieChart, Pie, Cell } from 'recharts'
import { v4 as uuidv4 } from 'uuid'

import { useGlobals } from '@/hooks/use-globals'
import { TableHeading } from '../table-heading'

interface VolumeMarketCapSectors {
  name: string
  value: number
  color: string
}

const RADIAN = Math.PI / 180
const cx = 95
const cy = 95
const iR = 60
const oR = 65
const maxValue = 10

const data: VolumeMarketCapSectors[] = [
  { name: 'Active', value: maxValue, color: '#ff3b30' },
  { name: 'Inactive', value: 5, color: '#e5e7eb' },
]

export const MarketActivityGauge = () => {
  const { data: globals } = useGlobals()

  const volume = globals?.total_volume?.usd ?? 0
  const marketCap = globals?.total_market_cap?.usd ?? 1
  const rawValue = (volume / marketCap) * 100
  const value = Math.min(rawValue, maxValue)

  const needle = (
    value: number,
    data: VolumeMarketCapSectors[],
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string
  ) => {
    let total = 0
    data.forEach((v) => {
      total += v.value
    })
    const ang = 180.0 * (1 - value / total)
    const length = (iR + 2 * oR) / 3
    const sin = Math.sin(-RADIAN * ang)
    const cos = Math.cos(-RADIAN * ang)
    const r = 2
    const x0 = cx + 5
    const y0 = cy + 5
    const xba = x0 + r * sin
    const yba = y0 - r * cos
    const xbb = x0 - r * sin
    const ybb = y0 + r * cos
    const xp = x0 + length * cos
    const yp = y0 + length * sin

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key={uuidv4()} />,
      <path
        key={uuidv4()}
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />,
    ]
  }

  return (
    <div className="w-full flex flex-col lg:gap-15 lg:h-[408px] border border-border rounded-lg p-4 flex-1">
      <TableHeading>Volume/MarketCap</TableHeading>
      <div className="flex flex-col items-center justify-center w-full">
        <PieChart width={200} height={150}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data?.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, '#5c5c61')}
        </PieChart>
        <span className="text-[16px] text-text-primary font-light flex flex-col justify-center items-center gap-2">
          {value.toFixed(1)}%
          <span className="text-[12px] text-text-secondary font-light">
            Shows how actively a market is trading relative to its size
          </span>
        </span>
      </div>
    </div>
  )
}
