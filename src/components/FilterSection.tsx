import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AGENTS, FACTORIES } from '@/constants/dashboardConstants';

interface FilterSectionProps {
  searchTerm: string;
  selectedAgent: string;
  selectedFactory: string;
  onSearchChange: (value: string) => void;
  onAgentChange: (value: string) => void;
  onFactoryChange: (value: string) => void;
}

export function FilterSection({
  searchTerm,
  selectedAgent,
  selectedFactory,
  onSearchChange,
  onAgentChange,
  onFactoryChange
}: FilterSectionProps) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search orders..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

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
  );
}