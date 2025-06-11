import Link from 'next/link'

interface FooterLinksInterface {
  title: string
  links: string[]
}

const footerLinks: FooterLinksInterface[] = [
  {
    title: 'Products',
    links: [
      'Academy',
      'Advertise',
      'Coinpulse Labs',
      'Coinpulse Updates',
      'Bitcoin ETFs',
      'Crypto API',
      'DexScan',
      'Global Charts',
      'NFT',
      'Portfolio',
      'Watchlist',
      'Doodles',
      'Sitemap',
    ],
  },
  {
    title: 'Company',
    links: [
      'About us',
      'Terms of use',
      'Privacy Policy',
      'Cookie preferences',
      'Cookie policy',
      'Community Rules',
      'Disclaimer',
      'Methodology',
      'Careers',
    ],
  },
  {
    title: 'Support',
    links: ['Get Listed', 'Request Form', 'Contact Support', 'FAQ', 'Glossary'],
  },
  {
    title: 'Socials',
    links: ['X (Twitter)', 'Community', 'Telegram', 'Instagram', 'Facebook', 'Reddit', 'LinkedIn'],
  },
]

export const Footer = () => {
  return (
    <footer className="px-4 py-6 pt-16 sm:px-6 mt-auto text-text-secondary font-light text-sm border-t border-t-border flex flex-col gap-8 md:gap-12">
      <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-row xl:justify-between gap-8 xl:gap-4">
        {footerLinks.map(({ title, links }) => (
          <ul key={title} className="flex flex-col items-start gap-4">
            <span className="font-medium text-[14px] text-text-primary pb-2 md:pb-4">{title}</span>
            {links.map((link) => (
              <Link
                href="#"
                key={link}
                className="text-text-secondary text-[12px] hover:text-text-primary"
              >
                {link}
              </Link>
            ))}
          </ul>
        ))}
      </nav>
      <div className="mt-8 md:mt-0">&copy; {new Date().getFullYear()} Coinpulse.</div>
    </footer>
  )
}
