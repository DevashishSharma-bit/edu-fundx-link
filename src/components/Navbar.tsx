import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  userRole?: 'student' | 'investor' | null;
}

export const Navbar = ({ userRole }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl gradient-purple">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-start to-purple-end bg-clip-text text-transparent">
              EduFundX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore-rooms"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/explore-rooms') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Idea Rooms
            </Link>
            <Link
              to="/leaderboard"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/leaderboard') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Leaderboard
            </Link>
            <Link
              to="/ai-mentor"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/ai-mentor') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              AI Mentor
            </Link>

            {userRole ? (
              <>
                {userRole === 'student' && (
                  <Link to="/post-idea">
                    <Button variant="outline" size="sm">
                      Post Idea
                    </Button>
                  </Link>
                )}
                <Link to={userRole === 'student' ? '/student-dashboard' : '/investor-dashboard'}>
                  <Button variant="gradient" size="sm">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="gradient" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 rounded-lg hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/explore-rooms"
              className="block px-4 py-2 rounded-lg hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Idea Rooms
            </Link>
            <Link
              to="/leaderboard"
              className="block px-4 py-2 rounded-lg hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              to="/ai-mentor"
              className="block px-4 py-2 rounded-lg hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Mentor
            </Link>
            {userRole ? (
              <>
                {userRole === 'student' && (
                  <Link to="/post-idea" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full mb-2">
                      Post Idea
                    </Button>
                  </Link>
                )}
                <Link
                  to={userRole === 'student' ? '/student-dashboard' : '/investor-dashboard'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="gradient" size="sm" className="w-full">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="gradient" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
