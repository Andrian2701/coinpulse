import { Logo } from '../logo'
import { ThemeSwitch } from '../theme-switch'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <Logo />
      <ThemeSwitch />
    </header>
  )
}
