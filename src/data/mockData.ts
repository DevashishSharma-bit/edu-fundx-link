// Mock data for EduFundX platform

export interface Startup {
  id: string;
  title: string;
  domain: string;
  description: string;
  aiScore: number;
  teamSize: number;
  studentName: string;
  university: string;
  country: string;
  verified: boolean;
  blockchainHash: string;
  pitchDeckUrl?: string;
  imageUrl: string;
  tags: string[];
  fundingGoal?: number;
  raised?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'investor';
  university?: string;
  organization?: string;
  country: string;
  avatar: string;
  bio: string;
  verified: boolean;
  domains: string[];
}

export interface CollaborationPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
}

export const mockStartups: Startup[] = [
  {
    id: '1',
    title: 'AI Medical Diagnosis Assistant',
    domain: 'HealthTech',
    description: 'Revolutionary AI-powered diagnostic tool that helps doctors detect diseases earlier with 95% accuracy using machine learning and medical imaging.',
    aiScore: 94,
    teamSize: 4,
    studentName: 'Sarah Chen',
    university: 'MIT',
    country: 'USA',
    verified: true,
    blockchainHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    tags: ['AI', 'Healthcare', 'Machine Learning'],
    fundingGoal: 500000,
    raised: 245000,
  },
  {
    id: '2',
    title: 'EcoCharge - Solar Charging Network',
    domain: 'CleanTech',
    description: 'Building a network of solar-powered EV charging stations across rural areas to promote sustainable transportation and green energy adoption.',
    aiScore: 91,
    teamSize: 5,
    studentName: 'Rajesh Kumar',
    university: 'IIT Delhi',
    country: 'India',
    verified: true,
    blockchainHash: '0x8a3fade2c1d68b8bg77bc5fbe8fade2c1d68b8bg77bc5fbe8d3d3fc8c22b02496',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    tags: ['CleanTech', 'Sustainability', 'EVs'],
    fundingGoal: 750000,
    raised: 380000,
  },
  {
    id: '3',
    title: 'EduConnect - Rural Education Platform',
    domain: 'EdTech',
    description: 'Connecting rural students with quality education through offline-first mobile learning platform with AI tutors and peer collaboration.',
    aiScore: 88,
    teamSize: 3,
    studentName: 'Amara Okafor',
    university: 'University of Lagos',
    country: 'Nigeria',
    verified: true,
    blockchainHash: '0x9b4gbef3d2e79c9ch88cd6gcf9gbef3d2e79c9ch88cd6gcf9e4e4gd9d33c13507',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    tags: ['EdTech', 'Social Impact', 'AI'],
    fundingGoal: 300000,
    raised: 150000,
  },
  {
    id: '4',
    title: 'AgroSense - Smart Farming IoT',
    domain: 'AgriTech',
    description: 'IoT sensor network that helps farmers optimize crop yields through real-time soil analysis, weather prediction, and automated irrigation.',
    aiScore: 86,
    teamSize: 4,
    studentName: 'Carlos Silva',
    university: 'USP',
    country: 'Brazil',
    verified: true,
    blockchainHash: '0xac5hcfg4e3f8ad0di99de7hdf0hcfg4e3f8ad0di99de7hdf0f5f5he0e44d24618',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    tags: ['AgriTech', 'IoT', 'Sustainability'],
    fundingGoal: 400000,
    raised: 200000,
  },
  {
    id: '5',
    title: 'FinFlow - Micro-lending Platform',
    domain: 'FinTech',
    description: 'Blockchain-based micro-lending platform connecting underbanked entrepreneurs with global investors for small business loans.',
    aiScore: 92,
    teamSize: 6,
    studentName: 'Li Wei',
    university: 'Tsinghua University',
    country: 'China',
    verified: true,
    blockchainHash: '0xbd6idig5f4g9be1ej0aef8ieg1idig5f4g9be1ej0aef8ieg1g6g6if1f55e35729',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
    tags: ['FinTech', 'Blockchain', 'Social Impact'],
    fundingGoal: 600000,
    raised: 420000,
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@mit.edu',
    role: 'student',
    university: 'MIT',
    country: 'USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'CS major passionate about AI in healthcare. Building solutions to save lives.',
    verified: true,
    domains: ['AI', 'Healthcare', 'Machine Learning'],
  },
  {
    id: '2',
    name: 'Michael Roberts',
    email: 'michael@techinvest.com',
    role: 'investor',
    organization: 'TechVenture Capital',
    country: 'USA',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    bio: 'Angel investor focused on early-stage HealthTech and EdTech startups.',
    verified: true,
    domains: ['HealthTech', 'EdTech', 'AI'],
  },
  {
    id: '3',
    name: 'Rajesh Kumar',
    email: 'rajesh@iitd.ac.in',
    role: 'student',
    university: 'IIT Delhi',
    country: 'India',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    bio: 'Electrical Engineering student working on renewable energy solutions.',
    verified: true,
    domains: ['CleanTech', 'Sustainability', 'IoT'],
  },
];

export const mockCollaborationPosts: CollaborationPost[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Sarah Chen',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: '🚀 Looking for a React developer to join our AI HealthTech startup! We\'re building a diagnostic assistant that could save millions of lives. DM if interested!',
    timestamp: '2h ago',
    likes: 24,
    comments: 8,
    tags: ['React', 'HealthTech', 'Hiring'],
  },
  {
    id: '2',
    userId: '3',
    userName: 'Rajesh Kumar',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
    content: 'Just finished our first solar charging prototype! 🌞 Tested it with 5 EVs and the results are amazing. Looking for partnerships with EV manufacturers.',
    timestamp: '5h ago',
    likes: 42,
    comments: 15,
    tags: ['CleanTech', 'Partnership', 'Milestone'],
  },
  {
    id: '3',
    userId: '4',
    userName: 'Amara Okafor',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amara',
    content: 'Our EdTech platform just reached 10,000 students in rural Nigeria! 🎉 The impact is real. Anyone interested in expanding to other African countries?',
    timestamp: '1d ago',
    likes: 67,
    comments: 23,
    tags: ['EdTech', 'Social Impact', 'Milestone'],
  },
  {
    id: '4',
    userId: '5',
    userName: 'Carlos Silva',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    content: 'Need advice: How do you guys handle hardware scaling for IoT projects? Our sensor network is growing fast and we\'re facing some challenges.',
    timestamp: '2d ago',
    likes: 18,
    comments: 12,
    tags: ['IoT', 'Hardware', 'Advice'],
  },
];

export const mockInvestorReviews = [
  {
    startupId: '1',
    startupTitle: 'AI Medical Diagnosis Assistant',
    rating: 5,
    feedback: 'Exceptional team with strong technical foundation. The medical validation process is thorough and the market potential is enormous.',
    date: '2024-01-15',
  },
  {
    startupId: '2',
    startupTitle: 'EcoCharge - Solar Charging Network',
    rating: 4,
    feedback: 'Great vision for sustainable transportation. Need more clarity on the business model and partnerships with government entities.',
    date: '2024-01-10',
  },
];

// Idea Rooms Data
export interface IdeaRoom {
  id: number;
  title: string;
  creatorName: string;
  creatorAvatar: string;
  description: string;
  problemStatement: string;
  proposedSolution: string;
  requiredSkills: string[];
  domain: string;
  duration: string;
  stage: 'Idea' | 'Prototype' | 'MVP' | 'Ready to Pitch';
  pitchDeck?: string;
  teamSize: number;
  country: string;
  progress: number;
  createdAt: string;
  tags: string[];
}

export interface TeamMember {
  id: number;
  roomId: number;
  name: string;
  avatar: string;
  role: string;
  skills: string[];
}

export interface Task {
  id: number;
  roomId: number;
  title: string;
  status: 'todo' | 'inProgress' | 'done';
  assignee?: string;
}

export interface Milestone {
  id: number;
  roomId: number;
  title: string;
  date: string;
  completed: boolean;
}

export interface ChatMessage {
  id: number;
  roomId: number;
  userName: string;
  userAvatar: string;
  message: string;
  timestamp: string;
}

export const mockIdeaRooms: IdeaRoom[] = [
  {
    id: 1,
    title: "AI-Powered Mental Health App",
    creatorName: "Sarah Chen",
    creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    description: "A mobile app that uses AI to provide personalized mental health support and connect users with therapists.",
    problemStatement: "1 in 5 adults experience mental health issues, but access to affordable, immediate support is limited.",
    proposedSolution: "AI chatbot for 24/7 support, mood tracking, and smart therapist matching based on user needs.",
    requiredSkills: ["React Native", "Python", "Machine Learning", "UI/UX Design"],
    domain: "HealthTech",
    duration: "4-6 months",
    stage: "Prototype",
    pitchDeck: "pitch-deck-mental-health.pdf",
    teamSize: 4,
    country: "USA",
    progress: 45,
    createdAt: "2024-01-15",
    tags: ["AI", "Mental Health", "Mobile App"]
  },
  {
    id: 2,
    title: "Sustainable Fashion Marketplace",
    creatorName: "Alex Martinez",
    creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    description: "A blockchain-verified marketplace for sustainable and ethically-sourced fashion products.",
    problemStatement: "Fast fashion contributes to 10% of global carbon emissions. Consumers want sustainable options but lack trust.",
    proposedSolution: "Blockchain-based verification system to authenticate sustainable fashion brands and products.",
    requiredSkills: ["Blockchain", "React", "Node.js", "Smart Contracts"],
    domain: "E-commerce",
    duration: "6-8 months",
    stage: "MVP",
    pitchDeck: "pitch-deck-fashion.pdf",
    teamSize: 5,
    country: "UK",
    progress: 65,
    createdAt: "2024-01-20",
    tags: ["Blockchain", "Sustainability", "Fashion"]
  },
  {
    id: 3,
    title: "Decentralized Learning Platform",
    creatorName: "Priya Sharma",
    creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    description: "A peer-to-peer learning platform where students can create and monetize educational content.",
    problemStatement: "Quality education is expensive and inaccessible to millions. Students have knowledge but no platform to monetize it.",
    proposedSolution: "Decentralized platform with NFT-based certificates and crypto rewards for content creators.",
    requiredSkills: ["Web3", "React", "Solidity", "Video Streaming"],
    domain: "EdTech",
    duration: "5-7 months",
    stage: "Idea",
    teamSize: 3,
    country: "India",
    progress: 20,
    createdAt: "2024-02-01",
    tags: ["Web3", "Education", "NFT"]
  },
  {
    id: 4,
    title: "Smart Agriculture IoT System",
    creatorName: "John Davis",
    creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    description: "IoT sensors and AI analytics to optimize crop yields and reduce water waste for small farms.",
    problemStatement: "Small farmers lack access to technology that can help optimize resources and increase yields.",
    proposedSolution: "Affordable IoT sensor network with AI-powered recommendations for irrigation, fertilization, and pest control.",
    requiredSkills: ["IoT", "Python", "Data Analytics", "Hardware Design"],
    domain: "AgriTech",
    duration: "8-10 months",
    stage: "Ready to Pitch",
    pitchDeck: "pitch-deck-agriculture.pdf",
    teamSize: 6,
    country: "Kenya",
    progress: 90,
    createdAt: "2023-12-10",
    tags: ["IoT", "AI", "Agriculture"]
  },
  {
    id: 5,
    title: "Carbon Credit Trading Platform",
    creatorName: "Emma Wilson",
    creatorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    description: "A transparent platform for businesses to buy and sell verified carbon credits using blockchain.",
    problemStatement: "Carbon credit markets lack transparency and are prone to fraud, hindering climate action.",
    proposedSolution: "Blockchain-based marketplace with verified carbon projects and automated smart contract trading.",
    requiredSkills: ["Blockchain", "React", "Smart Contracts", "Environmental Science"],
    domain: "ClimaTech",
    duration: "6-8 months",
    stage: "Prototype",
    pitchDeck: "pitch-deck-carbon.pdf",
    teamSize: 4,
    country: "Germany",
    progress: 50,
    createdAt: "2024-01-25",
    tags: ["Blockchain", "Climate", "Trading"]
  }
];

export const mockTeamMembers: TeamMember[] = [
  { id: 1, roomId: 1, name: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", role: "Founder & Product Lead", skills: ["Product Management", "UX"] },
  { id: 2, roomId: 1, name: "Mike Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike", role: "ML Engineer", skills: ["Python", "TensorFlow"] },
  { id: 3, roomId: 1, name: "Lisa Park", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa", role: "Frontend Dev", skills: ["React Native", "UI/UX"] },
  { id: 4, roomId: 1, name: "David Kim", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", role: "Backend Dev", skills: ["Node.js", "PostgreSQL"] },
  
  { id: 5, roomId: 2, name: "Alex Martinez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", role: "Founder & Tech Lead", skills: ["Blockchain", "React"] },
  { id: 6, roomId: 2, name: "Sofia Rodriguez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia", role: "Smart Contract Dev", skills: ["Solidity", "Web3"] },
];

export const mockTasks: Task[] = [
  { id: 1, roomId: 1, title: "Design user onboarding flow", status: "done", assignee: "Lisa Park" },
  { id: 2, roomId: 1, title: "Build AI chatbot backend", status: "inProgress", assignee: "Mike Johnson" },
  { id: 3, roomId: 1, title: "Integrate mood tracking feature", status: "inProgress", assignee: "David Kim" },
  { id: 4, roomId: 1, title: "User testing session", status: "todo" },
  { id: 5, roomId: 1, title: "Deploy beta version", status: "todo" },
  
  { id: 6, roomId: 2, title: "Smart contract audit", status: "done", assignee: "Sofia Rodriguez" },
  { id: 7, roomId: 2, title: "Build product catalog", status: "inProgress", assignee: "Alex Martinez" },
  { id: 8, roomId: 2, title: "Partner with sustainable brands", status: "todo" },
];

export const mockMilestones: Milestone[] = [
  { id: 1, roomId: 1, title: "Project Kickoff", date: "2024-01-15", completed: true },
  { id: 2, roomId: 1, title: "MVP Design Complete", date: "2024-02-01", completed: true },
  { id: 3, roomId: 1, title: "AI Model Training", date: "2024-03-15", completed: false },
  { id: 4, roomId: 1, title: "Beta Launch", date: "2024-05-01", completed: false },
  
  { id: 5, roomId: 2, title: "Blockchain Setup", date: "2024-01-20", completed: true },
  { id: 6, roomId: 2, title: "MVP Launch", date: "2024-03-01", completed: true },
  { id: 7, roomId: 2, title: "First Brand Partnership", date: "2024-04-15", completed: false },
];

export const mockChatMessages: ChatMessage[] = [
  { id: 1, roomId: 1, userName: "Sarah Chen", userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", message: "Hey team! Let's sync up on the AI model progress.", timestamp: "2024-02-15 10:30 AM" },
  { id: 2, roomId: 1, userName: "Mike Johnson", userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike", message: "The sentiment analysis is looking good. Training accuracy is at 87%.", timestamp: "2024-02-15 10:35 AM" },
  { id: 3, roomId: 1, userName: "Lisa Park", userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa", message: "I've finished the onboarding screens. Ready for review!", timestamp: "2024-02-15 11:00 AM" },
  { id: 4, roomId: 1, userName: "David Kim", userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", message: "Backend API for mood tracking is deployed on staging.", timestamp: "2024-02-15 2:15 PM" },
];
