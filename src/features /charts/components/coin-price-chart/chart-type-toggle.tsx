import { Dispatch, SetStateAction } from 'react'
import { LineChart, BarChart2 } from 'lucide-react'

import { ChartTypeEnum } from '../../types/coins-types'

interface Props {
  chartType: ChartTypeEnum
  setChartType: Dispatch<SetStateAction<ChartTypeEnum>>
}

export const ChartTypeToggle = ({ chartType, setChartType }: Props) => {
  return (
    <>
      {chartType === ChartTypeEnum.line ? (
        <BarChart2
          size={20}
          className="text-text-secondary hover:text-text-primary cursor-pointer"
          onClick={() => setChartType(ChartTypeEnum.bar)}
        />
      ) : (
        <LineChart
          size={20}
          className="text-text-secondary hover:text-text-primary cursor-pointer"
          onClick={() => setChartType(ChartTypeEnum.line)}
        />
      )}
    </>
  )
}
