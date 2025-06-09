'use client'

import { useState } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTrendingCoins } from '@/hooks/use-trending-coins'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { TrendingCoin } from '../trending-coin'
import { Spinner } from '../ui/spinner'
import { ErrorMessage } from '../error-message'

export const TrendingCoinsTable = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { data, isPending, isError } = useTrendingCoins()

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border border-border rounded-lg p-4"
    >
      <Table>
        <TableCaption>Trending Coins</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30%]">Name</TableHead>
            <TableHead className="text-center w-[20%]">Value</TableHead>
            <TableHead className="text-center w-[30%]">Total Volume</TableHead>
            <TableHead className="text-right w-[20%]">24 H</TableHead>
          </TableRow>
        </TableHeader>
        {isPending || isError ? (
          <TableBody className="h-[280px]">
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                <div className="w-full flex justify-center py-4">
                  {isPending && <Spinner size="medium" />}
                  {isError && <ErrorMessage>Couldn&apos;t fetch coins</ErrorMessage>}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <>
            <TableBody>
              {data?.slice(0, 5).map((coin) => <TrendingCoin key={coin.coin_id} data={coin} />)}
            </TableBody>
            <CollapsibleContent asChild>
              <TableBody>
                {data?.slice(5).map((coin) => <TrendingCoin key={coin.coin_id} data={coin} />)}
              </TableBody>
            </CollapsibleContent>
          </>
        )}
      </Table>
      {!isPending && !isError && (
        <span className="flex justify-end w-auto">
          <CollapsibleTrigger className="flex items-center justify-end cursor-pointer text-[12px] text-text-primary hover:text-[#727272]">
            {isOpen ? 'less' : 'more'}
          </CollapsibleTrigger>
        </span>
      )}
    </Collapsible>
  )
}
