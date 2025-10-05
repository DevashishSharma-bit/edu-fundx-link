import { useState } from 'react';
import { StartupCard } from '@/components/StartupCard';
import { mockStartups } from '@/data/mockData';
import { Trophy, Medal, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Leaderboard() {
  const [sortedStartups] = useState(
    [...mockStartups].sort((a, b) => b.aiScore - a.aiScore)
  );

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 1:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 2:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold">
            Global{' '}
            <span className="bg-gradient-to-r from-purple-start via-purple-mid to-purple-end bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Top student startups ranked by AI evaluation scores
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {/* 2nd Place */}
          {sortedStartups[1] && (
            <div className="md:order-1">
              <div className="glass-card p-6 text-center space-y-4 h-full">
                <div className="flex justify-center">
                  <Medal className="h-12 w-12 text-gray-400" />
                </div>
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-400">
                  <img
                    src={sortedStartups[1].imageUrl}
                    alt={sortedStartups[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">{sortedStartups[1].aiScore}</div>
                  <h3 className="font-semibold line-clamp-1">{sortedStartups[1].title}</h3>
                  <p className="text-sm text-muted-foreground">{sortedStartups[1].studentName}</p>
                </div>
                <Badge variant="secondary">{sortedStartups[1].domain}</Badge>
              </div>
            </div>
          )}

          {/* 1st Place */}
          {sortedStartups[0] && (
            <div className="md:order-2 md:-mt-8">
              <div className="glass-card p-8 text-center space-y-4 h-full gradient-purple/10 border-2 border-primary">
                <div className="flex justify-center animate-glow">
                  <Trophy className="h-16 w-16 text-yellow-500" />
                </div>
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-500">
                  <img
                    src={sortedStartups[0].imageUrl}
                    alt={sortedStartups[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1 text-primary">{sortedStartups[0].aiScore}</div>
                  <h3 className="font-bold text-lg line-clamp-1">{sortedStartups[0].title}</h3>
                  <p className="text-sm text-muted-foreground">{sortedStartups[0].studentName}</p>
                </div>
                <Badge className="gradient-purple text-white">{sortedStartups[0].domain}</Badge>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {sortedStartups[2] && (
            <div className="md:order-3">
              <div className="glass-card p-6 text-center space-y-4 h-full">
                <div className="flex justify-center">
                  <Award className="h-12 w-12 text-amber-600" />
                </div>
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-amber-600">
                  <img
                    src={sortedStartups[2].imageUrl}
                    alt={sortedStartups[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">{sortedStartups[2].aiScore}</div>
                  <h3 className="font-semibold line-clamp-1">{sortedStartups[2].title}</h3>
                  <p className="text-sm text-muted-foreground">{sortedStartups[2].studentName}</p>
                </div>
                <Badge variant="secondary">{sortedStartups[2].domain}</Badge>
              </div>
            </div>
          )}
        </div>

        {/* Rest of Rankings */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">All Startups</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedStartups.map((startup, index) => (
              <div key={startup.id} className="relative">
                {/* Rank Badge */}
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center shadow-lg">
                    {getRankIcon(index) || (
                      <span className="text-white font-bold">#{index + 1}</span>
                    )}
                  </div>
                </div>
                <StartupCard startup={startup} showActions={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
