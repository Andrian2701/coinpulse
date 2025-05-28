import { Dispatch, SetStateAction } from 'react'

import { TimeRange } from '@/types/coins-types'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { useTheme } from 'next-themes'

interface Props {
  timeRange: TimeRange
  setTimeRange: Dispatch<SetStateAction<TimeRange>>
}

const timeRanges = [
  { label: '24 H', value: TimeRange.day },
  { label: '7 D', value: TimeRange.week },
  { label: '1 M', value: TimeRange.month },
  { label: '1 Y', value: TimeRange.year },
]

export const TimeRangeToggle = ({ timeRange, setTimeRange }: Props) => {
  const { resolvedTheme } = useTheme()

  return (
    <ToggleGroup
      type="single"
      className="w-full sm:w-auto overflow-x-scroll pb-2"
      defaultValue={String(timeRange)}
      value={String(timeRange)}
      onValueChange={(timeRange) => setTimeRange(+timeRange)}
    >
      {timeRanges.map((item) => (
        <ToggleGroupItem
          key={item.label}
          value={String(item.value)}
          aria-label={`Toggle ${item.value}`}
          className={
            timeRange === item.value
              ? `${resolvedTheme === 'dark' || resolvedTheme === 'system' ? 'bg-text-secondary text-white' : 'bg-border'}`
              : ''
          }
        >
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
