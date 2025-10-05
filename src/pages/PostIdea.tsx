import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Upload, Plus, X } from 'lucide-react';

export default function PostIdea() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState('');

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Idea Room Created!",
      description: "Your collaboration room is now live and ready for team members.",
    });
    // Mock navigation to the created room
    navigate('/idea-room/1');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4"
          >
            <Lightbulb className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Post Your Startup Idea
          </h1>
          <p className="text-muted-foreground">Create a collaboration room and build your dream team</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Idea Title *</Label>
              <Input
                id="title"
                placeholder="e.g., AI-Powered Mental Health App"
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Short Description *</Label>
              <Textarea
                id="description"
                placeholder="Briefly describe your startup idea in 2-3 sentences..."
                rows={3}
                required
                className="bg-background/50"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="domain">Domain *</Label>
                <Select required>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="agritech">AgriTech</SelectItem>
                    <SelectItem value="climatech">ClimaTech</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="ai">AI/ML</SelectItem>
                    <SelectItem value="blockchain">Blockchain</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stage">Project Stage *</Label>
                <Select required>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Idea</SelectItem>
                    <SelectItem value="prototype">Prototype</SelectItem>
                    <SelectItem value="mvp">MVP</SelectItem>
                    <SelectItem value="ready">Ready to Pitch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem">Problem Statement *</Label>
              <Textarea
                id="problem"
                placeholder="What problem are you solving? Include relevant statistics if possible..."
                rows={4}
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Proposed Solution *</Label>
              <Textarea
                id="solution"
                placeholder="How does your solution address the problem? What makes it unique?"
                rows={4}
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Expected Duration *</Label>
              <Input
                id="duration"
                placeholder="e.g., 4-6 months"
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label>Required Skills *</Label>
              <div className="flex gap-2">
                <Input
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  placeholder="e.g., React, Python, UI/UX Design"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  className="bg-background/50"
                />
                <Button type="button" onClick={addSkill} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="gap-1">
                      {skill}
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-destructive"
                        onClick={() => removeSkill(skill)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="pitch-deck">Upload Pitch Deck (Optional)</Label>
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer bg-background/50">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, PPT, or PPTX (Max 10MB)
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Create Idea Room
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
