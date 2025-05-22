// components/dashboard/DataTable.tsx
'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { orders } from '@/lib/data'

interface DataTableProps {
  data: typeof orders
}

export function DataTable({ data }: DataTableProps) {
  console.log('Rendering table with data:', data) // Debug log
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  order.status === 'Paid' 
                    ? 'bg-green-100 text-green-800' 
                    : order.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {order.status}
                </span>
              </TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">${order.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}