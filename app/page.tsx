"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  BarChart,
  Zap,
  Code,
  Shield,
  Users,
  School
} from "lucide-react";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-44 pb-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <Badge className="mb-4">✨ Inspiration through Innovation</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Transform Your Business with <br />
              <span className="text-primary"> Zimulate Consultech</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering Innovation, Inspiring Growth
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative, personalized tech solutions designed to unlock your
              business’s full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart className="h-6 w-6" />}
              title="Project Assistance"
              description="We provide end-to-end support for your web projects, ensuring
                that your websites are fully responsive, optimized for
                performance, and aligned with your business objectives. Our team
                is skilled in modern web technologies to build sites that not
                only look great but also deliver results."
            />
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Mobile and Web Applications"
              description="Whether you are looking to develop a mobile app or a web
                application, we specialize in creating user-friendly, secure,
                and scalable solutions. We focus on seamless functionality and
                design to deliver a smooth experience for your users across
                platforms."
            />
            <FeatureCard
              icon={<School className="h-6 w-6" />}
              title="Training & Workshops"
              description="Our hands-on training programs and workshops are designed to
                equip your team with the latest industry knowledge and practical
                skills. From coding bootcamps to digital marketing, we tailor
                sessions to fit your needs, ensuring your team stays ahead of
                the curve."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-muted-foreground mb-6">
                Zimulate Consultech LLP began as a passion project by a small
                team of tech enthusiasts in Kerala. With a commitment to
                innovation and a drive to empower local businesses, we quickly
                evolved into a growing tech consultancy. Our journey is defined
                by our relentless pursuit of excellence and our desire to help
                companies overcome digital challenges from day one.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">10+</h3>
                  <p className="text-muted-foreground">Projects Built </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">10+</h3>
                  <p className="text-muted-foreground">Workshops Conducted</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">99%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">15+</h3>
                  <p className="text-muted-foreground">Developed Apps and websites   </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="./zim.png"
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
