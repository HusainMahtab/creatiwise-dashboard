'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar 
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          />
          <main className={`
            flex-1 
            p-4 md:p-8 
            transition-all duration-300
            ${isCollapsed ? 'md:ml-[80px]' : 'md:ml-[220px]'}
          `}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}