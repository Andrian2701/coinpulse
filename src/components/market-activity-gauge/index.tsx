'use client'

import { PieChart, Pie, Cell } from 'recharts';

import { useGlobals } from "@/hooks/use-globals";
import { TableHeading } from '../table-heading';

interface VolumeMarketCapSectors {
    name: string;
    value: number;
    color: string;
}

const RADIAN = Math.PI / 180;
const cx = 75;
const cy = 75;
const iR = 20;
const oR = 35;
const maxValue = 10;

const data: VolumeMarketCapSectors[] = [
    { name: 'Active', value: maxValue, color: '#ff3b30' },
    { name: 'Inactive', value: 5, color: '#e5e7eb' },
];

export const MarketActivityGauge = () => {
    const { data: globals } = useGlobals()

    const volume = globals?.total_volume?.usd ?? 0;
    const marketCap = globals?.total_market_cap?.usd ?? 1;
    const rawValue = (volume / marketCap) * 100;
    const value = Math.min(rawValue, maxValue);

    const needle = (value: number, data: VolumeMarketCapSectors[], cx: number, cy: number, iR: number, oR: number, color: string) => {
        let total = 0;
        data.forEach((v) => {
            total += v.value;
        });
        const ang = 180.0 * (1 - value / total);
        const length = (iR + 2 * oR) / 3;
        const sin = Math.sin(-RADIAN * ang);
        const cos = Math.cos(-RADIAN * ang);
        const r = 2;
        const x0 = cx + 5;
        const y0 = cy + 5;
        const xba = x0 + r * sin;
        const yba = y0 - r * cos;
        const xbb = x0 - r * sin;
        const ybb = y0 + r * cos;
        const xp = x0 + length * cos;
        const yp = y0 + length * sin;

        return [
            <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
            <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
        ];
    };

    return (
        <div className='w-full flex flex-col lg:gap-24 border border-border rounded-lg p-4'>
            <TableHeading>Volume/MarketCap</TableHeading>
            <div className='flex flex-col items-center justify-center w-full'>
                <PieChart width={150} height={100}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx={cx}
                        cy={cy}
                        innerRadius={iR}
                        outerRadius={oR}
                        fill="#8884d8"
                        stroke="none"
                    >
                        {data?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    {needle(value, data, cx, cy, iR, oR, '#5c5c61')}
                </PieChart>
                <span className='text-[12px] text-text-primary font-light'>
                    {value.toFixed(1)}%
                </span>
            </div>
        </div>
    );
};

