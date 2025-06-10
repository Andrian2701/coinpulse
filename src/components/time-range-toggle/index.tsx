import { Dispatch, SetStateAction } from 'react'
import { useTheme } from 'next-themes'

import { ThemeEnum, TimeRange } from '@/types/coins-types'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'

interface Props {
  timeRange: TimeRange | null
  setTimeRange: Dispatch<SetStateAction<TimeRange | null>>
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
      onValueChange={(timeRange) => timeRange && setTimeRange(+timeRange)}
    >
      {timeRanges.map((item) => (
        <ToggleGroupItem
          key={item.label}
          value={String(item.value)}
          aria-label={`Toggle ${item.value}`}
          className={
            timeRange === item.value
              ? `${resolvedTheme === ThemeEnum.dark || resolvedTheme === ThemeEnum.system ? 'bg-text-secondary text-white' : 'bg-border'}`
              : `${resolvedTheme === ThemeEnum.dark || resolvedTheme === ThemeEnum.system ? 'hover:bg-text-secondary hover:text-white' : 'hover:bg-border hover:text-text-secondary'}`
          }
        >
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
