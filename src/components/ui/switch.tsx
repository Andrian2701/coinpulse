"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-10 shrink-0 items-center rounded-full border transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        "data-[state=checked]:bg-black data-[state=unchecked]:bg-white",
        "focus-visible:border-ring focus-visible:ring-ring/50",
        "border-gray dark:border-light-gray",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-[1.125rem] rounded-full ring-0 transition-transform",
          "data-[state=checked]:translate-x-[18.7px] data-[state=unchecked]:translate-x-[1px]",
          "data-[state=checked]:bg-gray data-[state=unchecked]:bg-red",
          "dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
