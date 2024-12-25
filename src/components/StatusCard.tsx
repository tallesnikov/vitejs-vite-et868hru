// components/StatusCard.tsx
import { Card } from "@/components/ui/card"

interface StatusCardProps {
  title: string;
  count: number;
  variant: 'need-artwork' | 'missing-info' | 'can-produce' | 'can-produce-other';
}

export function StatusCard({ title, count, variant }: StatusCardProps) {
  const bgColor = {
    'need-artwork': 'bg-red-50',
    'missing-info': 'bg-amber-50',
    'can-produce': 'bg-green-50',
    'can-produce-other': 'bg-white'
  }[variant];

  const textColor = {
    'need-artwork': 'text-red-800',
    'missing-info': 'text-amber-800',
    'can-produce': 'text-green-800',
    'can-produce-other': 'text-gray-800'
  }[variant];

  return (
    <Card className={`${bgColor} p-4`}>
      <h3 className={`font-medium ${textColor}`}>{title}</h3>
      <p className="text-2xl font-bold mt-1">{count}</p>
    </Card>
  );
}