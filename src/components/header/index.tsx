import Link from "next/link"

import { Switch } from "../ui/switch"

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-[24px] font-medium text-black">CoinPulse</Link>
      <Switch id="theme-mode" />
    </header>
  )
}
