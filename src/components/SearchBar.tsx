// components/SearchBar.tsx
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search orders..."
        className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200"
      />
    </div>
  )
}