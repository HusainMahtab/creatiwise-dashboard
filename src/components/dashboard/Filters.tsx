// components/dashboard/Filters.tsx
'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DateRange } from 'react-day-picker'
import { useState } from 'react'

interface FiltersProps {
  onFilter: (filters: {
    search: string
    status: string
    dateRange: DateRange | undefined
  }) => void
}

export function Filters({ onFilter }: FiltersProps) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  const handleFilter = () => {
    onFilter({
      search,
      status,
      dateRange,
    })
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input 
        placeholder="Search orders..." 
        className="max-w-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="paid">Paid</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
        </SelectContent>
      </Select>
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        className="rounded-md border"
        numberOfMonths={1}
      />
      <Button onClick={handleFilter}>Filter</Button>
    </div>
  )
}