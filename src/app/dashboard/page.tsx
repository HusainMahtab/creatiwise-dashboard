// app/dashboard/page.tsx
'use client'

import { DataTable } from '@/components/dashboard/DataTable'
import { StatsCards } from '@/components/dashboard/StatsCards'
import { Filters } from '@/components/dashboard/Filters'
import { useState, useEffect } from 'react'
import { orders as allOrders } from '@/lib/data'

interface Order {
  id: string
  status: string
  customer: string
  date: string
  amount: string
}

export default function DashboardPage() {
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(allOrders)
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    dateRange: undefined as { from?: Date; to?: Date } | undefined
  })

  useEffect(() => {
    applyFilters()
  }, [filters])

  const applyFilters = () => {
    console.log('Applying filters:', filters)
    
    let result = [...allOrders]

    // Search filter
    if (filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase().trim()
      result = result.filter(order => 
        order.id.toLowerCase().includes(searchTerm) ||
        order.customer.toLowerCase().includes(searchTerm)
      )
    }
    

    // Status filter
    if (filters.status !== 'all') {
      result = result.filter(order => 
        order.status.toLowerCase() === filters.status.toLowerCase())
    }

    console.log('Filtered results:', result)
    setFilteredOrders(result)
  }

  const handleFilter = (newFilters: {
    search: string
    status: string
    dateRange: { from?: Date; to?: Date } | undefined
  }) => {
    setFilters(newFilters)
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <StatsCards />
      <Filters onFilter={handleFilter} />
      <DataTable data={filteredOrders} />
    </div>
  )
}