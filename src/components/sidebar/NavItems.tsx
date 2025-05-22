'use client'

import Link from 'next/link'
import { Home, Users, Settings, Package, Calendar } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface NavItemsProps {
  collapsed?: boolean
}

export function NavItems({ collapsed }: NavItemsProps) {
  const items = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'Users', href: '/users' },
    { icon: Package, label: 'Products', href: '/products' },
    { icon: Calendar, label: 'Calendar', href: '#' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  return (
    <>
      {items.map((item, index) => (
        <Tooltip key={index} delayDuration={0}>
          <TooltipTrigger asChild>
            <Link
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                collapsed ? 'justify-center' : ''
              }`}
            >
              <item.icon className="h-4 w-4" />
              {!collapsed && item.label}
            </Link>
          </TooltipTrigger>
          {collapsed && (
            <TooltipContent side="right" className="flex items-center gap-4">
              {item.label}
            </TooltipContent>
          )}
        </Tooltip>
      ))}
    </>
  )
}