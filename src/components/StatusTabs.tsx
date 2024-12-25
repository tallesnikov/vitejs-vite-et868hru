import { Button } from "@/components/ui/button"
import { STATUSES } from "@/constants/dashboardConstants"

interface StatusTabsProps {
 selectedStatus: string
 statusCounts: Record<string, number>
 onStatusChange: (status: string) => void
}

export function StatusTabs({ selectedStatus, statusCounts, onStatusChange }: StatusTabsProps) {
 return (
   <div className="flex gap-2 mb-6 flex-wrap">
     <Button 
       variant="outline"
       className={`rounded-full ${selectedStatus === 'all' ? 'bg-[#F7BD31] text-white border-[#F7BD31]' : ''}`}
       onClick={() => onStatusChange('all')}
     >
       All Orders
     </Button>
     {Object.entries(STATUSES).map(([status, { label }]) => {
       const bgColors = {
         need_artwork: 'bg-[#FFEBEE] border-[#FFEBEE]',
         missing_info: 'bg-[#FFF3E0] border-[#FFF3E0]',
         can_produce: 'bg-[#E8F5E9] border-[#E8F5E9]',
         can_produce_other: 'bg-white'
       }
       
       return (
         <Button
           key={status}
           variant="outline"
           className={`rounded-full ${selectedStatus === status ? bgColors[status] : ''}`}
           onClick={() => onStatusChange(status)}
         >
           {label} ({statusCounts[status] || 0})
         </Button>
       )
     })}
   </div>
 )
}