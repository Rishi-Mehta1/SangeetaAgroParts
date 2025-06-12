import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Leaf, Truck, Shield, Heart, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: 'Sustainability',
      description: 'Committed to eco-friendly farming solutions that protect our environment for future generations.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Quality',
      description: 'Premium agricultural equipment and parts that meet the highest industry standards.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Community',
      description: 'Supporting farming communities with reliable products and expert guidance.'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Service',
      description: 'Dedicated customer service ensuring farmer satisfaction and success.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Farmers' },
    { number: '500+', label: 'Products' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Cities Served' }
  ];

  const team = [
    {
      name: 'Sangeeta Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1dd?w=300&h=300&fit=crop',
      description: 'With over 20 years in agriculture, Sangeeta founded the company to bridge the gap between farmers and quality equipment.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description: 'Agricultural engineer with expertise in modern farming technologies and equipment maintenance.'
    },
    {
      name: 'Priya Patel',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      description: 'Ensures smooth operations and timely delivery of products to farmers across the region.'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Sangeeta Agro Parts</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been empowering farmers with premium agricultural equipment and parts, 
            helping them achieve better yields and sustainable farming practices.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="agricultural-gradient text-primary-foreground">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed">
                To provide farmers with high-quality, reliable agricultural equipment and parts that enhance 
                productivity, promote sustainable farming practices, and contribute to food security.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 mr-3 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To be the leading provider of agricultural solutions, fostering innovation and sustainability 
                in farming while supporting the growth of agricultural communities across the nation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by Sangeeta Sharma, a passionate advocate for sustainable agriculture, 
                  Sangeeta Agro Parts began as a small local supplier of farming equipment in a rural district.
                </p>
                <p>
                  Recognizing the challenges farmers faced in accessing quality agricultural tools and parts, 
                  Sangeeta set out to bridge this gap by establishing direct relationships with manufacturers 
                  and providing farmers with reliable, affordable solutions.
                </p>
                <p>
                  Today, we've grown to serve over 10,000 farmers across 50+ cities, maintaining our commitment 
                  to quality, sustainability, and farmer success. Our extensive catalog includes everything from 
                  basic hand tools to advanced irrigation systems.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop"
                alt="Agricultural landscape"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 agricultural-gradient opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Certifications & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-6 w-6 text-primary" />
              <span className="font-medium">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-medium">Quality Assurance Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="font-medium">Best Service Provider 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;