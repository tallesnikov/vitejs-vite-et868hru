import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import type { Order } from '@/types'

interface CommentModalProps {
  order: Order | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommentModal({ order, open, onOpenChange }: CommentModalProps) {
  const [comment, setComment] = useState('')

  if (!order) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comments - Order #{order.id}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Comment History */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            {order.comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{comment.user}</span>
                  <span className="text-gray-500">{comment.date}</span>
                </div>
                <p className="text-sm">{comment.text}</p>
              </div>
            ))}
          </div>

          {/* New Comment Form */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Add New Comment</h4>
            <Textarea
              placeholder="Type your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px] mb-3"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                if (comment.trim()) {
                  // In a real app, this would make an API call
                  const newComment = {
                    date: new Date().toLocaleString(),
                    user: 'Current User',
                    text: comment
                  }
                  // Update comments locally
                  order.comments.push(newComment)
                  setComment('')
                  onOpenChange(false)
                }
              }}>
                Add Comment
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}