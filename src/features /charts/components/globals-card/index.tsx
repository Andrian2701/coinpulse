'use client'

import CountUp from 'react-countup'

import { useGlobals } from '@/features /charts/hooks/use-globals'
import { TableHeading, ErrorMessage } from '@/shared/components'

export const GlobalsCard = ({ title }: { title: string }) => {
  const { data, isError, isSuccess } = useGlobals()

  const isMarkets = title === 'Markets'

  return (
    <div className="border border-border rounded-lg p-4 h-full flex flex-col gap-4">
      <TableHeading>{title}</TableHeading>
      {isError && (
        <ErrorMessage>
          {isMarkets ? 'Couldn&apos;t fetch markets' : 'Couldn&apos;t fetch percentages'}
        </ErrorMessage>
      )}
      {isSuccess && isMarkets ? (
        <CountUp key={data?.markets} start={0.0} end={data?.markets as number} />
      ) : (
        <CountUp
          key={data?.market_cap_change_percentage_24h_usd}
          start={0.0}
          end={data?.market_cap_change_percentage_24h_usd as number}
          decimals={2}
          suffix=" %"
        />
      )}
    </div>
  )
}
