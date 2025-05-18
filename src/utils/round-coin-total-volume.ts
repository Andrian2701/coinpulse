export const roundCoinTotalVolume = (volume: string) => {
  const volumeToNum = Number(volume.replace(/[^0-9.-]+/g, ""));

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(volumeToNum);
};
