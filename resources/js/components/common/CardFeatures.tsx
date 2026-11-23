import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Users, Cloud, BarChart3, Zap, Headphones } from 'lucide-react'

const features = [
  {
    icon: Users,
    iconColor: 'text-blue-500',
    title: 'Team Collaboration',
    description: 'Collaborate seamlessly with your team, share ideas, and work together in real-time.',
  },
  {
    icon: Cloud,
    iconColor: 'text-sky-500',
    title: 'Cloud Storage',
    description: 'Store and access your files securely from anywhere at any time.',
  },
  {
    icon: BarChart3,
    iconColor: 'text-purple-500',
    title: 'Advanced Analytics',
    description: 'Track progress and gain deep insights with automated reports.',
  },
  {
    icon: Zap,
    iconColor: 'text-amber-500',
    title: 'Task Automation',
    description: 'Save time by automating repetitive workflows effortlessly.',
  },
  {
    icon: Headphones,
    iconColor: 'text-green-500',
    title: '24/7 Support',
    description: 'Get dedicated assistance from our team whenever you need help.',
  },
]

function CardFeatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-20 mt-10">
      {features.map((feature, index) => {
        const IconComponent = feature.icon

        return (
          <Card 
            key={index} 
            className="h-full flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-md hover:text-blue-600"
          >
            <CardHeader>
              <div className="mb-2">
                <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              <CardTitle className='font-bold'>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        )
      })}
    </div>
  )
}

export default CardFeatures
