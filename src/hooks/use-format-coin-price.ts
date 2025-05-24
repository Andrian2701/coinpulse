import { CoinPriceType, TimeRange } from "@/types/coins-types";

export const useFormattedCoinPrices = (
  coinPrice: CoinPriceType[],
  timeRange: number
) => {
  const priceMapByTime = new Map<
    number | string,
    { time: string | number; price: number }
  >();
  let formatedTime: string | number;

  coinPrice?.forEach(([timestamp, price]) => {
    switch (timeRange) {
      case TimeRange.day:
        formatedTime = `${new Date(timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          hour12: false,
        })} H`;
        break;
      case TimeRange.week:
        formatedTime = new Date(timestamp).toLocaleDateString("en-US", {
          weekday: "short",
          timeZone: "UTC",
        });
        break;
      case TimeRange.month:
        formatedTime = new Date(timestamp).getUTCDate();
        break;
      case TimeRange.year:
        formatedTime = new Date(timestamp).toLocaleDateString("en-US", {
          month: "short",
          timeZone: "UTC",
        });
    }

    priceMapByTime.set(formatedTime, {
      time: formatedTime,
      price: price,
    });
  });

  const formattedPrices = Array.from(priceMapByTime.values());

  return formattedPrices;
};
