'use client'

import Image from "next/image"

import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { TrendingCoinInterface } from "@/types/coins-types"

export const TrendingCoin = ({ data }: { data: TrendingCoinInterface }) => {
    const roundCoinPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 1,
        }).format(price);
    };

    const roundCoinTotalVolume = (volume: string) => {
        const volumeToNum = Number(volume.replace(/[^0-9.-]+/g, ""));

        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 1,
        }).format(volumeToNum);
    };


    return (
        <TableRow className="h-14">
            <TableCell className="flex items-center gap-2 whitespace-nowrap">
                <Image
                    src={data.small}
                    alt={data.name}
                    width={20}
                    height={20}
                    className="rounded-full"
                />
                <span className="truncate">{data.name}</span>
            </TableCell>
            <TableCell className="text-center">
                {roundCoinPrice(data.data.price)}
            </TableCell>
            <TableCell className="text-center">
                {roundCoinTotalVolume(data.data.total_volume)}
            </TableCell>
            <TableCell
                className={`text-right ${data.data.price_change_percentage_24h.usd >= 0
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
            >
                {data.data.price_change_percentage_24h.usd.toFixed(1)}%
            </TableCell>
        </TableRow>
    )
}
