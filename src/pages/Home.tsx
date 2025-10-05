import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StartupCard } from '@/components/StartupCard';
import { mockStartups } from '@/data/mockData';
import { Sparkles, Users, TrendingUp, Shield, Rocket, Target, Heart } from 'lucide-react';

export default function Home() {
  const topStartups = mockStartups.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-purple-radial opacity-20" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-mid/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Blockchain-Verified Student Innovation Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Empowering Students to{' '}
              <span className="bg-gradient-to-r from-purple-start via-purple-mid to-purple-end bg-clip-text text-transparent">
                Build the Future
              </span>
              , Together
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect verified students with global investors. Showcase AI-scored startups. 
              Collaborate on world-changing innovations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/auth?role=student">
                <Button variant="hero" size="xl">
                  <Rocket className="h-5 w-5" />
                  Join as Student
                </Button>
              </Link>
              <Link to="/auth?role=investor">
                <Button variant="glass" size="xl">
                  <TrendingUp className="h-5 w-5" />
                  Join as Investor
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 justify-center pt-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Student Startups</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Active Investors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$5M+</div>
                <div className="text-sm text-muted-foreground">Funding Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to launch your startup or discover the next big innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="glass-card p-8 text-center space-y-4 hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">1. Register & Verify</h3>
              <p className="text-muted-foreground">
                Sign up as a student or investor. Get blockchain-verified to build trust and credibility.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-8 text-center space-y-4 hover:scale-105 transition-all" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">2. Submit & Score</h3>
              <p className="text-muted-foreground">
                Students submit startups. Our AI evaluates potential, originality, and feasibility.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-8 text-center space-y-4 hover:scale-105 transition-all" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">3. Connect & Grow</h3>
              <p className="text-muted-foreground">
                Investors discover top startups. Students get funding, mentorship, and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Startups Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Top AI-Scored Startups</h2>
              <p className="text-xl text-muted-foreground">
                Discover the most innovative student projects
              </p>
            </div>
            <Link to="/leaderboard">
              <Button variant="gradient">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} showActions={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 mx-auto rounded-2xl gradient-purple flex items-center justify-center animate-glow">
              <Heart className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe every student with a great idea deserves a chance to make it real. 
              EduFundX democratizes access to funding and mentorship, connecting the next 
              generation of innovators with investors who believe in their vision.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="glass-card p-6">
                <Shield className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-bold mb-2">Verified Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Blockchain verification ensures authenticity
                </p>
              </div>
              <div className="glass-card p-6">
                <Sparkles className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-bold mb-2">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Smart scoring evaluates startup potential
                </p>
              </div>
              <div className="glass-card p-6">
                <Users className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-bold mb-2">Global Network</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with students and investors worldwide
                </p>
              </div>
            </div>

            <Link to="/auth">
              <Button variant="hero" size="xl">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
