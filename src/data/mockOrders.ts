import type { Order } from "@/types"

export const mockOrders: Order[] = [
  {
    id: '65269',
    status: 'need_artwork',
    sourcing_agent: 'MM',
    factory: 'Music Glass',
    order_details: {
      singer: 'שרית חדד',
      song_name: 'יש חתונה',
      music_platform: 'Spotify',
      base_engraving: 'No',
      color: 'White'
    },
    product_name: 'Your Moment - מיוזיקגלאס מנורת לילה עם שיר - לבן',
    thumbnail: 'https://yourmoment.co.il/wp-content/uploads/2023/02/xhd490_761d051a-fb2e-4f56-821e-fb90bb30fb9c-0-150x150.webp',
    design_preview: 'https://yourmoment.co.il/wp-content/uploads/2023/02/xhd490_761d051a-fb2e-4f56-821e-fb90bb30fb9c-0-150x150.webp',
    designer: 'Sarah',
    comments: [
      { date: '2024-12-23 10:00', user: 'MM', text: 'Design needs revision' },
      { date: '2024-12-23 11:30', user: 'Sarah', text: 'Updated the layout' }
    ]
  },
  {
    id: '65270',
    status: 'missing_info',
    sourcing_agent: 'Phil',
    factory: 'Stainless Steel',
    order_details: {
      singer: 'עומר אדם',
      song_name: 'קסם',
      music_platform: 'Spotify',
      base_engraving: 'Yes',
      color: 'Silver'
    },
    product_name: 'Your Moment - Stainless Steel Music Display',
    thumbnail: 'https://yourmoment.co.il/wp-content/uploads/2023/02/xhd490_761d051a-fb2e-4f56-821e-fb90bb30fb9c-0-150x150.webp',
    design_preview: 'https://yourmoment.co.il/wp-content/uploads/2023/02/xhd490_761d051a-fb2e-4f56-821e-fb90bb30fb9c-0-150x150.webp',
    designer: 'Mike',
    comments: [
      { date: '2024-12-23 09:00', user: 'Phil', text: 'Missing song details' }
    ]
  }
]