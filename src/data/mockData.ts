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
