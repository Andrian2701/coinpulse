import Link from "next/link"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="relative w-30 h-4">
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>
    </header>
  )
}
