'use client'

import { useState } from "react"

import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useTrendingCoins } from "@/hooks/use-trending-coins"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { TrendingCoin } from "../trending-coin"

export const TrendingCoinsTable = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { data } = useTrendingCoins()

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full md:w-[60%] border border-light-gray rounded-lg p-4">
            <Table>
                <TableCaption>Trending List</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30%]">Name</TableHead>
                        <TableHead className="text-center w-[20%]">Value</TableHead>
                        <TableHead className="text-center w-[30%]">Total Volume</TableHead>
                        <TableHead className="text-right w-[20%]">24H</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.slice(0, 5).map((coin) => (
                        <TrendingCoin key={coin.coin_id} data={coin} />
                    ))}
                </TableBody>
                <CollapsibleContent asChild>
                    <TableBody>
                        {data?.slice(5).map((coin) => (
                            <TrendingCoin key={coin.coin_id} data={coin} />
                        ))}
                    </TableBody>
                </CollapsibleContent>
            </Table>
            <CollapsibleTrigger className="w-full flex items-center justify-end cursor-pointer text-[12px] text-black">
                {isOpen ? "less" : "more"}
            </CollapsibleTrigger>
        </Collapsible>
    )
}
