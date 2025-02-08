"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart, 
  Zap, 
  Shield, 
  Globe, 
  Code, 
  Database,
  School,
  CloudCog,
  Users,
  Lightbulb
} from 'lucide-react'

const services = [
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Project Assistance",
    description: `We provide end-to-end support for your web projects, ensuring that your websites are fully responsive, optimized for performance, and aligned with your business objectives. Our team is skilled in modern web technologies to build sites that not only look great but also deliver results.`,
    features: ["Comprehensive Planning", "Responsive & Optimized Design", "Continuous Support"]

  }
  ,
  {
    icon: <Code className="h-6 w-6" />,
    title: "Mobile and Web Applications",
    description: `Whether you are looking to develop a mobile app or a web
                application, we specialize in creating user-friendly, secure,
                and scalable solutions. We focus on seamless functionality and
                design to deliver a smooth experience for your users across
                platforms.`,
    features: ["Responsive & User-Centric Design", "Cross-Platform Compatibility", "Scalable & Secure Solutions"]
  },
  {
    icon: <School className="h-6 w-6" />,
    title: "Trainging & Workshops",
    description: `Our hands-on training programs and workshops are designed to
                equip your team with the latest industry knowledge and practical
                skills. From coding bootcamps to digital marketing, we tailor
                sessions to fit your needs, ensuring your team stays ahead of
                the curve.`,
    features: ["Customized Curriculum", "Expert-Led Sessions", "Interactive Learning"]
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: " Industry-Specific Consulting",
    description: ` We provide expert consulting services tailored to the specific
                demands of your industry. Whether it is technology, or any other
                sector, our experienced consultants work closely with you to
                identify challenges, develop strategies, and implement solutions
                that drive success.`,
    features: ["Tailored Strategies", "Deep Market Insights", "Actionable Roadmaps"]
  },
  
]

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <Badge className="mb-4">Our Expertise</Badge>
            <h1 className="text-4xl font-bold mb-6">All-in-One Business Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our services that help your business grow and succeed in today's digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}