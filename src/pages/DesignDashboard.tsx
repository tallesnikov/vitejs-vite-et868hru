import { useState } from 'react'
import { StatusCard } from '@/components/StatusCard'
import { FilterBar } from '@/components/FilterBar'
import { StatusTabs } from '@/components/StatusTabs'
import { OrderCard } from '@/components/OrderCard'
import { OrderDetailsModal } from '@/components/OrderDetailsModal'
import { CommentModal } from '@/components/CommentModal'
import { STATUSES } from '@/constants/dashboardConstants'
import { mockOrders } from '@/data/mockOrders'

export function DesignDashboard() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedAgent, setSelectedAgent] = useState('all')
  const [selectedFactory, setSelectedFactory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [commentModalOpen, setCommentModalOpen] = useState(false)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null)

  // Calculate status counts
  const statusCounts = mockOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const filteredOrders = mockOrders.filter(order => {
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus
    const matchesAgent = selectedAgent === 'all' || order.sourcing_agent === selectedAgent
    const matchesFactory = selectedFactory === 'all' || order.factory === selectedFactory
    const matchesSearch = !searchTerm || 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.order_details.song_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.order_details.singer.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesStatus && matchesAgent && matchesFactory && matchesSearch
  })

  const selectedOrder = mockOrders.find(order => order.id === selectedOrderId)

  return (
    <div className="min-h-screen bg-white px-6 py-4">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Design Dashboard</h1>
          <p className="text-sm text-gray-500">Manage design orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {Object.entries(STATUSES).map(([status, { label }]) => (
            <StatusCard
              key={status}
              label={label}
              count={statusCounts[status] || 0}
              status={status as keyof typeof STATUSES}
            />
          ))}
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-6">
          <FilterBar
            searchTerm={searchTerm}
            selectedAgent={selectedAgent}
            selectedFactory={selectedFactory}
            onSearchChange={setSearchTerm}
            onAgentChange={setSelectedAgent}
            onFactoryChange={setSelectedFactory}
          />

          {/* Status Pills */}
          <StatusTabs
            selectedStatus={selectedStatus}
            statusCounts={statusCounts}
            onStatusChange={setSelectedStatus}
          />
        </div>

        {/* Orders Grid - Always 4 columns */}
        <div className="grid grid-cols-4 gap-4">
          {filteredOrders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
              onViewDetails={() => {
                setSelectedOrderId(order.id)
                setDetailsModalOpen(true)
              }}
              onAddComment={() => {
                setSelectedOrderId(order.id)
                setCommentModalOpen(true)
              }}
            />
          ))}
        </div>

        {/* Show empty state if no orders */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No orders found matching your filters.</p>
          </div>
        )}

        {/* Modals */}
        <OrderDetailsModal
          order={selectedOrder}
          open={detailsModalOpen}
          onOpenChange={setDetailsModalOpen}
        />

        <CommentModal
          order={selectedOrder}
          open={commentModalOpen}
          onOpenChange={setCommentModalOpen}
        />
      </div>
    </div>
  )
}