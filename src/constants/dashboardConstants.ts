export const AGENTS = ['MM', 'Phil', 'Own warehouse']
export const FACTORIES = ['Music Glass', 'Stainless Steel', 'Flowers']

export const STATUSES = {
  'need_artwork': { label: 'Need Artwork', color: 'bg-red-100 text-red-800' },
  'missing_info': { label: 'Missing Info', color: 'bg-orange-100 text-orange-800' },
  'can_produce': { label: 'Can Produce', color: 'bg-green-100 text-green-800' },
  'can_produce_other': { label: 'Can Produce Other', color: 'bg-blue-100 text-blue-800' }
} as const