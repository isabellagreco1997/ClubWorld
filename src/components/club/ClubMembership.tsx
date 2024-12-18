import { formatCurrency } from '@/lib/utils/currency';

interface ClubMembershipProps {
  fees: {
    annual: number;
    currency: string;
  };
}

export function ClubMembership({ fees }: ClubMembershipProps) {
  return (
    <div className="text-right">
      <p className="text-white font-medium">
        {formatCurrency(fees.annual, fees.currency)}/year
      </p>
    </div>
  );
}