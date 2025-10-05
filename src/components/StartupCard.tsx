import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Startup } from '@/data/mockData';
import { Shield, ExternalLink, TrendingUp } from 'lucide-react';

interface StartupCardProps {
  startup: Startup;
  onViewDetails?: () => void;
  showActions?: boolean;
}

export const StartupCard = ({ startup, onViewDetails, showActions = true }: StartupCardProps) => {
  return (
    <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <img
          src={startup.imageUrl}
          alt={startup.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* AI Score Badge */}
        <div className="absolute top-4 right-4 score-badge">
          {startup.aiScore}
        </div>

        {/* Verified Badge */}
        {startup.verified && (
          <div className="absolute top-4 left-4 p-2 rounded-full glass">
            <Shield className="h-4 w-4 text-primary" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg line-clamp-1">{startup.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{startup.studentName}</span>
            <span>•</span>
            <span>{startup.university}</span>
            <span>•</span>
            <span>{startup.country}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">{startup.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{startup.domain}</Badge>
          {startup.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Funding Progress */}
        {startup.fundingGoal && startup.raised && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Funding Progress</span>
              <span className="font-semibold text-primary">
                ${(startup.raised / 1000).toFixed(0)}K / ${(startup.fundingGoal / 1000).toFixed(0)}K
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full gradient-purple transition-all duration-500"
                style={{ width: `${(startup.raised / startup.fundingGoal) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Blockchain Hash */}
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="text-xs text-muted-foreground mb-1">Blockchain Verified</p>
          <p className="text-xs font-mono truncate">{startup.blockchainHash}</p>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2 pt-2">
            <Button
              variant="gradient"
              className="flex-1"
              onClick={onViewDetails}
            >
              View Details
            </Button>
            {startup.pitchDeckUrl && (
              <Button variant="glass" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
