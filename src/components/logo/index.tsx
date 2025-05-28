'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useTheme } from 'next-themes'

export const Logo = () => {
  const { resolvedTheme } = useTheme()

  const logoToUse = resolvedTheme === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'

  return (
    <Link href="/" className="relative w-30 h-4">
      <Image src={logoToUse} alt="Logo" fill className="object-contain" priority />
    </Link>
  )
}
