'use client'

import CountUp from 'react-countup'

import { useGlobals } from '@/hooks/use-globals'
import { TableHeading, ErrorMessage } from '../index'

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
        <CountUp start={0.0} end={data?.markets || 0} />
      ) : (
        <CountUp
          start={0.0}
          end={data?.market_cap_change_percentage_24h_usd || 0}
          decimals={2}
          suffix=" %"
        />
      )}
    </div>
  )
}
