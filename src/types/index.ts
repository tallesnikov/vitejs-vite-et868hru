export interface OrderDetails {
  singer: string
  song_name: string
  music_platform: string
  base_engraving: string
  color: string
}

export interface Order {
  id: string
  status: 'need_artwork' | 'missing_info' | 'can_produce' | 'can_produce_other'
  sourcing_agent: string
  factory: string
  order_details: OrderDetails
  product_name: string
  thumbnail: string
  design_preview: string
  designer: string
  comments: Array<{
    date: string
    user: string
    text: string
  }>
}