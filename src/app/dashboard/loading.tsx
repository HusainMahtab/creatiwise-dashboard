// app/dashboard/loading.tsx
import {Skeleton} from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-8 w-[200px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-lg" />
        ))}
      </div>
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-[400px] w-full" />
    </div>
  )
}