import { Logo } from '../logo'
import { ThemeSwitch } from '../theme-switch'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-2">
      <Logo />
      <ThemeSwitch />
    </header>
  )
}
