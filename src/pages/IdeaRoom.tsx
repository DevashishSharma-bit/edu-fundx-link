import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { mockIdeaRooms, mockTeamMembers, mockTasks, mockMilestones, mockChatMessages } from '@/data/mockData';
import { Users, MessageCircle, CheckCircle2, Calendar, Send, UserPlus } from 'lucide-react';

export default function IdeaRoom() {
  const { id } = useParams();
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);

  const room = mockIdeaRooms[0];
  const teamMembers = mockTeamMembers.filter(m => m.roomId === 1);
  const tasks = mockTasks.filter(t => t.roomId === 1);
  const milestones = mockMilestones.filter(m => m.roomId === 1);
  const messages = mockChatMessages.filter(m => m.roomId === 1);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast({ title: "Message sent!" });
      setMessage('');
    }
  };

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Join Request Sent!",
      description: "The founder will review your request shortly.",
    });
    setJoinDialogOpen(false);
  };

  const tasksByStatus = {
    todo: tasks.filter(t => t.status === 'todo'),
    inProgress: tasks.filter(t => t.status === 'inProgress'),
    done: tasks.filter(t => t.status === 'done'),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={room.creatorAvatar}
                  alt={room.creatorName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-3xl font-bold">{room.title}</h1>
                  <p className="text-sm text-muted-foreground">
                    by {room.creatorName} • {room.createdAt}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{room.domain}</Badge>
                <Badge className="bg-blue-600">{room.stage}</Badge>
                <Badge variant="outline">{room.country}</Badge>
                {room.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>

              <p className="text-muted-foreground mb-4">{room.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Project Progress</span>
                  <span className="font-semibold">{room.progress}%</span>
                </div>
                <Progress value={room.progress} className="h-2" />
              </div>
            </div>

            <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <UserPlus className="h-4 w-4" />
                  Join This Room
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join {room.title}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleJoinRoom} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Your Role *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frontend">Frontend Developer</SelectItem>
                        <SelectItem value="backend">Backend Developer</SelectItem>
                        <SelectItem value="ml">ML Engineer</SelectItem>
                        <SelectItem value="design">UI/UX Designer</SelectItem>
                        <SelectItem value="product">Product Manager</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Why do you want to join?</Label>
                    <Input placeholder="Tell us about your interest..." />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Send Join Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="overview" className="glass-card">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tasks">Task Board</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
                  <p className="text-muted-foreground">{room.problemStatement}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proposed Solution</h3>
                  <p className="text-muted-foreground">{room.proposedSolution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {room.requiredSkills.map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-muted-foreground">{room.duration}</p>
                </div>
              </TabsContent>

              <TabsContent value="tasks" className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground">TO DO</h4>
                    <div className="space-y-2">
                      {tasksByStatus.todo.map(task => (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-3 rounded-lg bg-background border"
                        >
                          <p className="text-sm font-medium">{task.title}</p>
                          {task.assignee && (
                            <p className="text-xs text-muted-foreground mt-1">{task.assignee}</p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-blue-600">IN PROGRESS</h4>
                    <div className="space-y-2">
                      {tasksByStatus.inProgress.map(task => (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                        >
                          <p className="text-sm font-medium">{task.title}</p>
                          {task.assignee && (
                            <p className="text-xs text-muted-foreground mt-1">{task.assignee}</p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-green-600">DONE</h4>
                    <div className="space-y-2">
                      {tasksByStatus.done.map(task => (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                        >
                          <p className="text-sm font-medium">{task.title}</p>
                          {task.assignee && (
                            <p className="text-xs text-muted-foreground mt-1">{task.assignee}</p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="p-6">
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        milestone.completed
                          ? 'bg-green-500 text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{milestone.title}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {milestone.date}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Team ({teamMembers.length})</h3>
              </div>
              <div className="space-y-3">
                {teamMembers.map(member => (
                  <div key={member.id} className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Team Chat</h3>
              </div>
              <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                {messages.map(msg => (
                  <div key={msg.id} className="flex gap-2">
                    <img
                      src={msg.userAvatar}
                      alt={msg.userName}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{msg.userName}</span>
                        <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm bg-muted p-2 rounded-lg">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="bg-background/50"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
