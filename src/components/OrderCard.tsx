import { Eye, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { StatusBadge } from './StatusBadge'
import type { Order } from '@/types'

interface OrderCardProps {
  order: Order
  onViewDetails: () => void
  onAddComment: () => void
}

export function OrderCard({ order, onViewDetails, onAddComment }: OrderCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <span className="font-medium text-base">#{order.id}</span>
            <StatusBadge status={order.status} />
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-3">
          {order.factory} <span className="mx-1.5">•</span> {order.sourcing_agent}
        </div>

        <div className="relative rounded-lg overflow-hidden mb-4">
          {/* Main Preview */}
          <div className="aspect-square relative">
            <img
              src={order.design_preview}
              alt="Design preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Hebrew text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-medium text-lg text-right" dir="rtl">{order.order_details.song_name}</p>
              <p className="text-base text-right opacity-90" dir="rtl">{order.order_details.singer}</p>
            </div>
          </div>

          {/* Action buttons overlay */}
          <div className="absolute top-2 right-2 flex gap-1">
            <Button 
              variant="secondary" 
              size="sm" 
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white/100 shadow-sm"
              onClick={onViewDetails}
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white/100 shadow-sm"
              onClick={onAddComment}
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 items-center mb-4">
          <img
            src={order.thumbnail}
            alt="Product thumbnail"
            className="w-14 h-14 object-cover rounded-lg border border-gray-200"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 leading-snug" dir="rtl">
              {order.product_name}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Designer: {order.designer}
            </p>
          </div>
        </div>

        <Select defaultValue={order.status}>
          <SelectTrigger className="w-full border-gray-200">
            <SelectValue placeholder="Set Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="need_artwork">Need Artwork</SelectItem>
            <SelectItem value="missing_info">Missing Info</SelectItem>
            <SelectItem value="can_produce">Can Produce</SelectItem>
            <SelectItem value="can_produce_other">Can Produce Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  )
}