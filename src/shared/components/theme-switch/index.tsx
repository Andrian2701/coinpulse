'use client'

import * as React from 'react'
import { ChevronDownIcon, Moon, Sun, CheckIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { ThemeEnum } from '@/shared/types/theme-types'

export const ThemeSwitch = () => {
  const { setTheme, resolvedTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="cursor-pointer flex items-center justify-center gap-2">
          {resolvedTheme === ThemeEnum.light ? (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-text-primary" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  text-text-primary" />
          )}
          <ChevronDownIcon className="size-4 opacity-50" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme(ThemeEnum.light)}
          className="flex justify-between"
        >
          Light {theme === ThemeEnum.light && <CheckIcon className="size-3.5 opacity-50" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(ThemeEnum.dark)} className="flex justify-between">
          Dark {theme === ThemeEnum.dark && <CheckIcon className="size-3.5 opacity-50" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme(ThemeEnum.system)}
          className="flex justify-between"
        >
          System {theme === ThemeEnum.system && <CheckIcon className="size-3.5 opacity-50" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
