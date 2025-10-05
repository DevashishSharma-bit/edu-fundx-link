import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StartupCard } from '@/components/StartupCard';
import { mockStartups, mockInvestorReviews } from '@/data/mockData';
import { Search, Filter, Star, User, Settings, LogOut, TrendingUp, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function InvestorDashboard() {
  const [activeTab, setActiveTab] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDomain, setFilterDomain] = useState('all');

  const filteredStartups = mockStartups.filter((startup) => {
    const matchesSearch = startup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = filterDomain === 'all' || startup.domain === filterDomain;
    return matchesSearch && matchesDomain;
  });

  const domains = ['all', ...Array.from(new Set(mockStartups.map((s) => s.domain)))];

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen glass-card border-r p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div>
                <div className="font-semibold">Michael Roberts</div>
                <div className="text-xs text-muted-foreground">TechVenture Capital</div>
              </div>
            </div>

            <Button
              variant={activeTab === 'explore' ? 'gradient' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('explore')}
            >
              <Search className="h-4 w-4" />
              Explore Startups
            </Button>

            <Button
              variant={activeTab === 'reviews' ? 'gradient' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('reviews')}
            >
              <FileText className="h-4 w-4" />
              My Reviews
            </Button>

            <Button
              variant={activeTab === 'profile' ? 'gradient' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('profile')}
            >
              <User className="h-4 w-4" />
              Profile
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>

          <div className="pt-6 border-t">
            <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Explore Startups */}
          {activeTab === 'explore' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Explore Startups</h1>
                <p className="text-muted-foreground">Discover the next generation of innovators</p>
              </div>

              {/* Search and Filters */}
              <div className="glass-card p-4 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search startups..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={filterDomain} onValueChange={setFilterDomain}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by domain" />
                  </SelectTrigger>
                  <SelectContent>
                    {domains.map((domain) => (
                      <SelectItem key={domain} value={domain}>
                        {domain === 'all' ? 'All Domains' : domain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStartups.map((startup) => (
                  <StartupCard key={startup.id} startup={startup} />
                ))}
              </div>

              {filteredStartups.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No startups found matching your criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* My Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h1 className="text-3xl font-bold mb-2">My Reviews</h1>
                <p className="text-muted-foreground">Feedback you've provided to startups</p>
              </div>

              <div className="space-y-4">
                {mockInvestorReviews.map((review, index) => (
                  <div key={index} className="glass-card p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{review.startupTitle}</h3>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < review.rating ? 'fill-primary text-primary' : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">{review.feedback}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit Review</Button>
                      <Button variant="ghost" size="sm">View Startup</Button>
                    </div>
                  </div>
                ))}
              </div>

              {mockInvestorReviews.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">You haven't reviewed any startups yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Profile */}
          {activeTab === 'profile' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h1 className="text-3xl font-bold mb-2">Profile</h1>
                <p className="text-muted-foreground">Manage your investor profile</p>
              </div>

              <div className="glass-card p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-full gradient-purple flex items-center justify-center text-white text-3xl font-bold">
                    MR
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Michael Roberts</h2>
                    <p className="text-muted-foreground">TechVenture Capital</p>
                    <Badge className="mt-2">Verified Investor</Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="Michael Roberts" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="michael@techinvest.com" type="email" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium">Organization</label>
                    <Input defaultValue="TechVenture Capital" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium">Investment Focus</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge>HealthTech</Badge>
                      <Badge>EdTech</Badge>
                      <Badge>AI</Badge>
                      <Button variant="outline" size="sm">+ Add Domain</Button>
                    </div>
                  </div>
                </div>

                <Button variant="gradient">Save Changes</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
