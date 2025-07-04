'use client'

import Image from 'next/image'
import CountUp from 'react-countup'

import { ErrorMessage } from '@/shared/components'
import { useGlobals } from '../../hooks/use-globals'

export const MarketShareList = () => {
  const { data, isError } = useGlobals()

  return (
    <div className="flex justify-between flex-col md:flex-row gap-4">
      <div className="p-8 w-full h-[125px] border border-border flex items-center justify-start gap-4 rounded-lg">
        <Image
          src="/images/coins/bitcoin.webp"
          alt="bitcoin"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col gap-4">
          <span className="text-text-secondary text-[12px]">Bitcoin (BTC)</span>
          <span className="text-[16px] text-text-primary">
            {!isError ? (
              <CountUp
                key={data?.market_cap_percentage.btc}
                start={0.0}
                end={Number(data?.market_cap_percentage.btc)}
                decimals={2}
                suffix=" %"
              />
            ) : (
              <ErrorMessage>Couldn&apos;t fetch percentages</ErrorMessage>
            )}
          </span>
        </div>
      </div>
      <div className="p-8 w-full h-[125px] border border-border flex items-center justify-start gap-4 rounded-lg">
        <Image
          src="/images/coins/ethereum.png"
          alt="ethereum"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col gap-4">
          <span className="text-text-secondary text-[12px]">Ethereum (ETH)</span>
          <span className="text-[16px] text-text-primary">
            {!isError ? (
              <CountUp
                key={data?.market_cap_percentage.eth}
                start={0.0}
                end={Number(data?.market_cap_percentage.eth)}
                decimals={2}
                suffix=" %"
              />
            ) : (
              <ErrorMessage>Couldn&apos;t fetch percentages</ErrorMessage>
            )}
          </span>
        </div>
      </div>
      <div className="p-8 w-full h-[125px] border border-border flex items-center justify-start gap-4 rounded-lg">
        <Image
          src="/images/coins/tether.png"
          alt="tether"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col gap-4">
          <span className="text-text-secondary text-[12px]">Tether (USDT)</span>
          <span className="text-[16px] text-text-primary">
            {!isError ? (
              <CountUp
                key={data?.market_cap_percentage.usdt}
                start={0.0}
                end={Number(data?.market_cap_percentage.usdt)}
                decimals={2}
                suffix=" %"
              />
            ) : (
              <ErrorMessage>Couldn&apos;t fetch percentages</ErrorMessage>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
