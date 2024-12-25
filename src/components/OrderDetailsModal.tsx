import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Order } from '@/types'

interface OrderDetailsModalProps {
  order: Order | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function OrderDetailsModal({ order, open, onOpenChange }: OrderDetailsModalProps) {
  if (!order) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Order #{order.id}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Order Information</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Singer:</span> {order.order_details.singer}</p>
                <p><span className="font-medium">Song Name:</span> {order.order_details.song_name}</p>
                <p><span className="font-medium">Music Platform:</span> {order.order_details.music_platform}</p>
                <p><span className="font-medium">Base Engraving:</span> {order.order_details.base_engraving}</p>
                <p><span className="font-medium">Color:</span> {order.order_details.color}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Product Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Factory:</span> {order.factory}</p>
                <p><span className="font-medium">Designer:</span> {order.designer}</p>
                <p><span className="font-medium">Sourcing Agent:</span> {order.sourcing_agent}</p>
              </div>
            </div>
          </div>
          <img
            src={order.design_preview}
            alt="Design preview"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}