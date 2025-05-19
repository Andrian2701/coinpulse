'use client'

import Image from "next/image"
import SlotCounter from 'react-slot-counter';

import { useGlobals } from "@/hooks/use-globals"

export const GlobalsList = () => {
    const { data } = useGlobals()

    return (
        <div className="flex justify-between flex-col md:flex-row gap-4">
            <div className="p-8 w-full h-[125px] border border-light-gray flex items-center justify-start gap-4 rounded-lg">
                <Image src="/images/coins/bitcoin.webp" alt="bitcoin" width={40} height={40} className="rounded-full" />
                <div className="flex flex-col gap-4">
                    <span className="text-gray text-[12px]">Bitcoin (BTC)</span>
                    <span className="text-[16px] font-bold text-black">
                        <SlotCounter
                            direction="top-down"
                            value={`${data?.market_cap_percentage.btc.toFixed(2)}%`}
                            animateOnVisible={{ triggerOnce: true, }}
                        />
                    </span>
                </div>
            </div>
            <div className="p-8 w-full h-[125px] border border-light-gray flex items-center justify-start gap-4 rounded-lg">
                <Image src="/images/coins/ethereum.png" alt="ethereum" width={40} height={40} className="rounded-full" />
                <div className="flex flex-col gap-4">
                    <span className="text-gray text-[12px]">Ethereum (ETH)</span>
                    <span className="text-[16px] font-bold text-black">
                        <SlotCounter
                            direction="top-down"
                            value={`${data?.market_cap_percentage.eth.toFixed(2)}%`}
                            animateOnVisible={{ triggerOnce: true, }}
                        />
                    </span>
                </div>
            </div>
            <div className="p-8 w-full h-[125px] border border-light-gray flex items-center justify-start gap-4 rounded-lg">
                <Image src="/images/coins/tether.png" alt="tether" width={40} height={40} className="rounded-full" />
                <div className="flex flex-col gap-4">
                    <span className="text-gray text-[12px]">Tether (USDT)</span>
                    <span className="text-[16px] font-bold text-black">
                        <SlotCounter
                            direction="top-down"
                            value={`${data?.market_cap_percentage.usdt.toFixed(2)}%`}
                            animateOnVisible={{ triggerOnce: true, }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}