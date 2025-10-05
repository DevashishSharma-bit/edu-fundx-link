import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { mockIdeaRooms, mockTeamMembers } from '@/data/mockData';
import { Users, Download, Heart, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function RoomDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const room = mockIdeaRooms[0];
  const teamMembers = mockTeamMembers.filter(m => m.roomId === 1);

  const handleShowInterest = () => {
    toast({
      title: "Interest Sent! 🎉",
      description: "Your interest has been sent to the founder. They will reach out soon!",
    });
  };

  const handleRequestPitch = () => {
    toast({
      title: "Pitch Session Requested",
      description: "The team will contact you to schedule a pitch session.",
    });
  };

  const handleLeaveFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback!",
    });
    setFeedbackOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-6"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={room.creatorAvatar}
                  alt={room.creatorName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-3xl font-bold">{room.title}</h1>
                  <p className="text-sm text-muted-foreground">by {room.creatorName}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleShowInterest} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Heart className="h-4 w-4" />
                Show Interest
              </Button>
              <Button onClick={handleRequestPitch} variant="outline">
                <Calendar className="h-4 w-4" />
                Request Pitch
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">{room.domain}</Badge>
            <Badge className="bg-blue-600">{room.stage}</Badge>
            <Badge variant="outline">
              <MapPin className="h-3 w-3 mr-1" />
              {room.country}
            </Badge>
            <Badge variant="outline">
              <Users className="h-3 w-3 mr-1" />
              {room.teamSize} members
            </Badge>
            {room.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Project Progress</span>
              <span className="font-semibold flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                {room.progress}%
              </span>
            </div>
            <Progress value={room.progress} className="h-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
              <p className="text-muted-foreground">{room.problemStatement}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Proposed Solution</h3>
              <p className="text-muted-foreground">{room.proposedSolution}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {room.requiredSkills.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-muted/50 border">
              <p className="text-sm font-medium text-muted-foreground mb-1">Duration</p>
              <p className="font-semibold">{room.duration}</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border">
              <p className="text-sm font-medium text-muted-foreground mb-1">Started</p>
              <p className="font-semibold">{room.createdAt}</p>
            </div>
          </div>

          {room.pitchDeck && (
            <Button variant="outline" className="w-full md:w-auto">
              <Download className="h-4 w-4" />
              Download Pitch Deck (IPFS)
            </Button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Team Members ({teamMembers.length})</h2>
            <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Leave Feedback</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Leave Feedback for {room.title}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleLeaveFeedback} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Your Feedback</Label>
                    <Textarea
                      placeholder="Share your thoughts, suggestions, or questions..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Submit Feedback
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Full Description</h2>
          <p className="text-muted-foreground mb-4">{room.description}</p>
          <p className="text-muted-foreground">
            This project aims to revolutionize the {room.domain} industry by addressing critical challenges 
            and providing innovative solutions. The team is actively seeking funding and strategic partnerships 
            to scale their impact globally.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
