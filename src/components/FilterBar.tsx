import { SearchBar } from "@/components/SearchBar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AGENTS, FACTORIES } from "@/constants/dashboardConstants"

interface FilterBarProps {
  searchTerm: string
  selectedAgent: string
  selectedFactory: string
  onSearchChange: (value: string) => void
  onAgentChange: (value: string) => void
  onFactoryChange: (value: string) => void
}

export function FilterBar({
  searchTerm,
  selectedAgent,
  selectedFactory,
  onSearchChange,
  onAgentChange,
  onFactoryChange
}: FilterBarProps) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <SearchBar value={searchTerm} onChange={onSearchChange} />

      <Select value={selectedAgent} onValueChange={onAgentChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sourcing Agent" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Agents</SelectItem>
          {AGENTS.map(agent => (
            <SelectItem key={agent} value={agent}>{agent}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedFactory} onValueChange={onFactoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Factory" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Factories</SelectItem>
          {FACTORIES.map(factory => (
            <SelectItem key={factory} value={factory}>{factory}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}