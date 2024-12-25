import { STATUSES } from '@/constants/dashboardConstants'

interface StatusBadgeProps {
  status: keyof typeof STATUSES
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUSES[status]?.color}`}>
      {STATUSES[status]?.label}
    </span>
  )
}