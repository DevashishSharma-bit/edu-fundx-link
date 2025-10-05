import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockIdeaRooms } from '@/data/mockData';
import { Search, Users, TrendingUp, MapPin } from 'lucide-react';

export default function ExploreRooms() {
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');
  const [stageFilter, setStageFilter] = useState('all');

  const filteredRooms = mockIdeaRooms.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = domainFilter === 'all' || room.domain === domainFilter;
    const matchesStage = stageFilter === 'all' || room.stage === stageFilter;
    return matchesSearch && matchesDomain && matchesStage;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-yellow-50 py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-black mb-2">
            Explore Idea Rooms
          </h1>
          <p className="text-muted-foreground">
            Discover innovative startups and connect with talented teams
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-gray-200"
                />
              </div>
            </div>
            <Select value={domainFilter} onValueChange={setDomainFilter}>
              <SelectTrigger className="bg-white border-gray-200">
                <SelectValue placeholder="All Domains" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Domains</SelectItem>
                <SelectItem value="HealthTech">HealthTech</SelectItem>
                <SelectItem value="EdTech">EdTech</SelectItem>
                <SelectItem value="FinTech">FinTech</SelectItem>
                <SelectItem value="AgriTech">AgriTech</SelectItem>
                <SelectItem value="ClimaTech">ClimaTech</SelectItem>
                <SelectItem value="E-commerce">E-commerce</SelectItem>
              </SelectContent>
            </Select>
            <Select value={stageFilter} onValueChange={setStageFilter}>
              <SelectTrigger className="bg-white border-gray-200">
                <SelectValue placeholder="All Stages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="Idea">Idea</SelectItem>
                <SelectItem value="Prototype">Prototype</SelectItem>
                <SelectItem value="MVP">MVP</SelectItem>
                <SelectItem value="Ready to Pitch">Ready to Pitch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={room.creatorAvatar}
                    alt={room.creatorName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{room.title}</h3>
                    <p className="text-xs text-muted-foreground">{room.creatorName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 border border-blue-200">
                    <TrendingUp className="h-3 w-3 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600">{room.progress}%</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {room.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">{room.domain}</Badge>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">{room.stage}</Badge>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{room.teamSize} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{room.country}</span>
                </div>
              </div>

              <Link to={`/idea-room/${room.id}`}>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-orange-400 hover:from-blue-600 hover:to-orange-500 text-white">
                  View Details
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No idea rooms found matching your filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
