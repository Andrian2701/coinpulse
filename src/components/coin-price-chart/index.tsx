'use client'

import { useState } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from "recharts";

import { CoinSelect, TimeRangeToggle } from "..";
import { useCoinList } from "@/hooks/use-coin-list";
import { useFormattedCoinPrices } from "@/hooks/use-format-coin-price";
import { useCoinPrice } from "@/hooks/use-coin-price";
import { TimeRange } from "@/types/coins-types";

export const CoinPriceChart = () => {
    const [selectedCoinId, setSelectedCoinId] = useState('bitcoin');
    const [timeRange, setTimeRange] = useState(TimeRange.day)

    const { data: coinList } = useCoinList()
    const { data: coinPrice } = useCoinPrice({ coin: selectedCoinId, days: timeRange })
    const formattedPrices = useFormattedCoinPrices(coinPrice ?? [], timeRange)

    const formatPrice = (price: number): string => {
        if (price >= 1000) {
            return `${(price / 1000).toFixed(0)}K`;
        } else if (price >= 1) {
            return price.toFixed(2);
        } else if (price >= 0.01) {
            return price.toFixed(4);
        } else if (price >= 0.0001) {
            return price.toFixed(6);
        } else {
            return price.toExponential(2);
        }
    };

    return (
        <div className="w-full md:w-[60%] border border-light-gray rounded-lg p-4 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 sm:gap-4 w-full">
                <TimeRangeToggle timeRange={timeRange} setTimeRange={setTimeRange} />
                <CoinSelect selectedCoinId={selectedCoinId} setSelectedCoinId={setSelectedCoinId} coinList={coinList ?? []} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    data={formattedPrices}
                    syncId="anyId"
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#5c5c61", fontWeight: "light" }} />
                    <YAxis
                        domain={['dataMin - dataMin * 0.02', 'dataMax + dataMax * 0.02']}
                        tick={{ fontSize: 12, fill: "#5c5c61", fontWeight: "light" }}
                        tickFormatter={(value: number) => `$${formatPrice(value)}`}
                    />
                    <Tooltip formatter={(value: number) => [`$${formatPrice(value)}`, "Price"]}
                        contentStyle={{
                            border: "1px solid #e5e7eb",
                            borderRadius: "9px",
                            color: "#fff",
                        }}
                        labelStyle={{
                            color: "#5c5c61",
                            fontSize: "12px"
                        }}
                        itemStyle={{
                            color: "#2c2c2e",
                            fontSize: "14px",
                        }} />
                    <Area type="monotone" dataKey="price" stroke="#ff3b30" fill="#ff3b301a" />
                </AreaChart>
            </ResponsiveContainer>
            <span className="text-gray font-light text-[14px] flex justify-center">
                Price Analytics
            </span>
        </div>
    )
}
