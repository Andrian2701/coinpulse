import { Dispatch, SetStateAction, useMemo } from 'react'
import Image from 'next/image'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { Spinner } from '@/shared/ui/spinner'
import { ErrorMessage } from '@/shared/components'
import { CoinInterface } from '../../types/coins-types'

interface Props {
  selectedCoinId: string
  setSelectedCoinId: Dispatch<SetStateAction<string>>
  coinList: CoinInterface[] | null | undefined
  isPending: boolean
  isError: boolean
}

export const CoinSelect = ({
  selectedCoinId,
  setSelectedCoinId,
  coinList,
  isPending,
  isError,
}: Props) => {
  const selectedCoin = useMemo(
    () => coinList?.find((coin) => coin.id === selectedCoinId),
    [coinList, selectedCoinId]
  )

  return (
    <Select value={selectedCoinId} onValueChange={(value) => setSelectedCoinId(value)}>
      <SelectTrigger className="w-full sm:w-[125px] border border-border cursor-pointer">
        <SelectValue>
          {selectedCoin && (
            <span className="flex items-center gap-2">
              <Image
                src={selectedCoin.image}
                alt={selectedCoin.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="font-light text-[12px]">{`${selectedCoin.name} (${selectedCoin.symbol.toUpperCase()})`}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {isError && <ErrorMessage>Couldn&apos;t fetch coins</ErrorMessage>}
          {isPending && <Spinner size="small" />}
          {coinList &&
            coinList.map((coin) => (
              <SelectItem key={coin.id} value={coin.id}>
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                {`${coin.name} (${coin.symbol.toUpperCase()})`}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
