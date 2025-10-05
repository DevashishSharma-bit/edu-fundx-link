import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { StartupCard } from '@/components/StartupCard';
import { mockStartups, mockCollaborationPosts } from '@/data/mockData';
import { Plus, Brain, Users, Trophy, User, Settings, LogOut, Heart, MessageCircle, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function StudentDashboard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('startups');
  const [showNewStartupForm, setShowNewStartupForm] = useState(false);
  const [aiEvalInput, setAiEvalInput] = useState('');
  const [aiEvalResult, setAiEvalResult] = useState<any>(null);

  const myStartups = mockStartups.slice(0, 2);
  const leaderboardData = [...mockStartups].sort((a, b) => b.aiScore - a.aiScore).slice(0, 10);

  const handleAIEvaluate = () => {
    // Mock AI evaluation
    setAiEvalResult({
      potential: 85,
      originality: 92,
      feasibility: 78,
      overallScore: 85,
      feedback: 'Strong concept with innovative approach. Consider expanding market research and clarifying go-to-market strategy.',
    });
    toast({
      title: 'AI Evaluation Complete',
      description: 'Your startup has been analyzed.',
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen glass-card border-r p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center text-white font-bold">
                SC
              </div>
              <div>
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">MIT Student</div>
              </div>
            </div>

            <Button
              variant={activeTab === 'startups' ? 'gradient' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('startups')}
            >
              <TrendingUp className="h-4 w-4" />
              My Startups
            </Button>

            <Button
              variant={activeTab === 'ai-eval' ? 'gradient' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('ai-eval')}
            >
              <Brain className="h-4 w-4" />
              AI Evaluator
            </Button>

            <Button
              variant={activeTab === 'feed' ? 'gradient' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('feed')}
            >
              <Users className="h-4 w-4" />
              Collaboration Feed
            </Button>

            <Button
              variant={activeTab === 'leaderboard' ? 'gradient' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveTab('leaderboard')}
            >
              <Trophy className="h-4 w-4" />
              Leaderboard
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
          {/* My Startups */}
          {activeTab === 'startups' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">My Startups</h1>
                  <p className="text-muted-foreground">Manage and showcase your innovations</p>
                </div>
                <Button variant="gradient" onClick={() => setShowNewStartupForm(!showNewStartupForm)}>
                  <Plus className="h-4 w-4" />
                  New Startup
                </Button>
              </div>

              {showNewStartupForm && (
                <div className="glass-card p-6 space-y-4">
                  <h2 className="text-xl font-bold">Create New Startup</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input placeholder="AI Medical Diagnosis" />
                    </div>
                    <div className="space-y-2">
                      <Label>Domain</Label>
                      <Input placeholder="HealthTech" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label>Description</Label>
                      <Textarea placeholder="Describe your startup..." rows={4} />
                    </div>
                    <div className="space-y-2">
                      <Label>Team Size</Label>
                      <Input type="number" placeholder="4" />
                    </div>
                    <div className="space-y-2">
                      <Label>Project Links</Label>
                      <Input placeholder="https://github.com/..." />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="gradient">Submit for AI Evaluation</Button>
                    <Button variant="ghost" onClick={() => setShowNewStartupForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {myStartups.map((startup) => (
                  <StartupCard key={startup.id} startup={startup} />
                ))}
              </div>
            </div>
          )}

          {/* AI Evaluator */}
          {activeTab === 'ai-eval' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h1 className="text-3xl font-bold mb-2">AI Startup Evaluator</h1>
                <p className="text-muted-foreground">Get instant AI feedback on your startup idea</p>
              </div>

              <div className="glass-card p-6 space-y-4">
                <Label>Describe Your Startup</Label>
                <Textarea
                  placeholder="Paste your startup description here..."
                  rows={8}
                  value={aiEvalInput}
                  onChange={(e) => setAiEvalInput(e.target.value)}
                />
                <Button variant="gradient" onClick={handleAIEvaluate} disabled={!aiEvalInput}>
                  <Brain className="h-4 w-4" />
                  Evaluate with AI
                </Button>
              </div>

              {aiEvalResult && (
                <div className="glass-card p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Evaluation Results</h2>
                    <div className="score-badge text-2xl">{aiEvalResult.overallScore}</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Market Potential</span>
                        <span className="text-primary font-bold">{aiEvalResult.potential}%</span>
                      </div>
                      <Progress value={aiEvalResult.potential} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Originality</span>
                        <span className="text-primary font-bold">{aiEvalResult.originality}%</span>
                      </div>
                      <Progress value={aiEvalResult.originality} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Feasibility</span>
                        <span className="text-primary font-bold">{aiEvalResult.feasibility}%</span>
                      </div>
                      <Progress value={aiEvalResult.feasibility} className="h-2" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <h3 className="font-semibold mb-2">AI Feedback</h3>
                    <p className="text-sm text-muted-foreground">{aiEvalResult.feedback}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Collaboration Feed */}
          {activeTab === 'feed' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h1 className="text-3xl font-bold mb-2">Collaboration Feed</h1>
                <p className="text-muted-foreground">Connect with students building amazing projects</p>
              </div>

              <div className="glass-card p-4">
                <Textarea placeholder="Share an update, ask for help, or find collaborators..." rows={3} />
                <div className="flex justify-end mt-2">
                  <Button variant="gradient" size="sm">Post</Button>
                </div>
              </div>

              <div className="space-y-4">
                {mockCollaborationPosts.map((post) => (
                  <div key={post.id} className="glass-card p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <img src={post.userAvatar} alt={post.userName} className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{post.userName}</span>
                          <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                        </div>
                        <p className="text-sm mb-3">{post.content}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leaderboard */}
          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
                <p className="text-muted-foreground">Top startups ranked by AI score</p>
              </div>

              <div className="space-y-3">
                {leaderboardData.map((startup, index) => (
                  <div key={startup.id} className="glass-card p-4 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      index < 3 ? 'gradient-purple text-white' : 'bg-muted'
                    }`}>
                      #{index + 1}
                    </div>
                    <img src={startup.imageUrl} alt={startup.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{startup.title}</h3>
                      <p className="text-sm text-muted-foreground">{startup.studentName} • {startup.university}</p>
                    </div>
                    <Badge variant="secondary">{startup.domain}</Badge>
                    <div className="score-badge">{startup.aiScore}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile */}
          {activeTab === 'profile' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h1 className="text-3xl font-bold mb-2">Profile</h1>
                <p className="text-muted-foreground">Manage your account information</p>
              </div>

              <div className="glass-card p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-full gradient-purple flex items-center justify-center text-white text-3xl font-bold">
                    SC
                  </div>
                  <Button variant="outline">Change Avatar</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="Sarah Chen" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="sarah.chen@mit.edu" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label>University</Label>
                    <Input defaultValue="MIT" />
                  </div>
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Input defaultValue="USA" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label>Bio</Label>
                    <Textarea defaultValue="CS major passionate about AI in healthcare." rows={3} />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label>Domain Interests</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge>AI</Badge>
                      <Badge>Healthcare</Badge>
                      <Badge>Machine Learning</Badge>
                      <Button variant="outline" size="sm">+ Add</Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border">
                  <p className="text-sm font-medium mb-1">Blockchain Verification</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385
                  </p>
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
