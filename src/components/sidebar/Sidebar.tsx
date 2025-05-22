'use client'

import { NavItems } from './NavItems'
import { Button } from '@/components/ui/button'
import { PanelLeft, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface SidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
}

export function Sidebar({ isCollapsed, onToggleCollapse }: SidebarProps) {
  return (
    <>
      {/* Mobile Sidebar - remains unchanged */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="sm" className="fixed top-4 left-4 z-50">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] sm:w-[300px]">
          <nav className="grid gap-6 text-lg font-medium">
            <NavItems />
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar - updated for width adjustment */}
      <div className={`
        hidden md:block 
        fixed h-screen 
        border-r bg-muted/40
        transition-all duration-300
        ${isCollapsed ? 'w-[80px]' : 'w-[220px]'}
      `}>
        <div className="flex h-full flex-col gap-2">
          <div className={`
            flex h-14 items-center 
            border-b px-4
            ${isCollapsed ? 'justify-center' : 'justify-between'}
          `}>
            {!isCollapsed && <h1 className="font-semibold">Dashboard</h1>}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onToggleCollapse}
            >
              {isCollapsed ? (
                <PanelLeft className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavItems collapsed={isCollapsed} />
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}