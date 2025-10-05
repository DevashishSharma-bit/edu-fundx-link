import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Brain, Send, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIMentor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hello! I'm your AI Startup Mentor. I can help you with idea validation, market research, business strategy, and more. What would you like to discuss today?",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Mock AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me break it down for you...",
        "Based on market trends, I'd suggest focusing on...",
        "Here's what successful startups in your domain typically do...",
        "To validate your idea, consider these key steps...",
        "Your approach shows promise. Have you considered...",
      ];
      const aiMessage: Message = {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)] + 
          " This is a mock response. In production, this would connect to a real AI service to provide detailed, context-aware startup advice.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="w-20 h-20 mx-auto rounded-2xl gradient-purple flex items-center justify-center animate-glow">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold">
            AI Startup{' '}
            <span className="bg-gradient-to-r from-purple-start via-purple-mid to-purple-end bg-clip-text text-transparent">
              Mentor
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Get personalized advice to turn your idea into reality
          </p>
        </div>

        {/* Chat Container */}
        <div className="glass-card p-6 space-y-6">
          {/* Messages */}
          <div className="space-y-4 min-h-[400px] max-h-[600px] overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'gradient-purple text-white'
                      : 'glass border'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-primary">AI Mentor</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Textarea
              placeholder="Ask me anything about your startup..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              rows={3}
              className="flex-1"
            />
            <Button
              variant="gradient"
              size="icon"
              className="h-auto w-12"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>

          {/* Suggestions */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {[
                'How do I validate my idea?',
                'What should be in my pitch deck?',
                'How to find co-founders?',
                'Market sizing strategies',
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="text-xs px-3 py-1.5 rounded-lg glass hover:bg-primary/10 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="glass-card p-4 text-center">
            <Brain className="h-6 w-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm mb-1">Smart Analysis</h3>
            <p className="text-xs text-muted-foreground">
              AI-powered insights for your startup
            </p>
          </div>
          <div className="glass-card p-4 text-center">
            <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm mb-1">24/7 Available</h3>
            <p className="text-xs text-muted-foreground">
              Get advice anytime, anywhere
            </p>
          </div>
          <div className="glass-card p-4 text-center">
            <Send className="h-6 w-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm mb-1">Instant Feedback</h3>
            <p className="text-xs text-muted-foreground">
              Real-time responses to your questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
