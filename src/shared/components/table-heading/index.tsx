import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  align?: 'start' | 'center'
}

export const TableHeading = ({ children, align = 'start' }: Props) => {
  return (
    <span
      className={`text-text-secondary font-light text-[14px] ${align === 'center' ? 'flex justify-center' : ''}`}
    >
      {children}
    </span>
  )
}
