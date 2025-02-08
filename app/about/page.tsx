"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Target, Heart } from "lucide-react";

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Mission",
    description:
      "We are dedicated to helping businesses reach their full potential. By providing tailored and impactful tech solutions, our mission is to address unique challenges and drive measurable results. Every project is a promise to deliver personalized service that not only meets our clients’ needs but also paves the way for sustainable growth."
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Vision",
    description:
      "We envision a thriving digital ecosystem where both startups and established enterprises flourish. By leveraging cutting-edge technologies and industry best practices, we aspire to be at the forefront of innovation. Our goal is to foster an environment that nurtures creativity, entrepreneurship, and lasting success for businesses throughout Kerala and beyond."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Values",
    description:
      "At the heart of Zimulate Consultech LLP are the values of collaboration, innovation, and commitment. We believe in working closely with our clients to truly understand their challenges, ensuring our solutions are both effective and forward-thinking. Our dedication to integrity, excellence, and continuous learning drives us to create a positive impact and foster an entrepreneurial spirit in everything we do."
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-4xl font-bold mb-6">zimulate Consultech LLP</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zimulate Consultech LLP began as a passion project by a small team
              of tech enthusiasts in Kerala. With a commitment to innovation and
              a drive to empower local businesses, we quickly evolved into a
              growing tech consultancy. Our journey is defined by our relentless
              pursuit of excellence and our desire to help companies overcome
              digital challenges from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                We are dedicated to helping businesses reach their full
                potential. By providing tailored and impactful tech solutions,
                our mission is to address unique challenges and drive measurable
                results. Every project is a promise to deliver personalized
                service that not only meets our clients’ needs but also paves
                the way for sustainable growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                We envision a thriving digital ecosystem where both startups and
                established enterprises flourish. By leveraging cutting-edge
                technologies and industry best practices, we aspire to be at the
                forefront of innovation. Our goal is to foster an environment
                that nurtures creativity, entrepreneurship, and lasting success
                for businesses throughout Kerala and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At the heart of Zimulate Consultech LLP are the values of
              collaboration, innovation, and commitment. We believe in working
              closely with our clients to truly understand their challenges,
              ensuring our solutions are both effective and forward-thinking.
              Our dedication to integrity, excellence, and continuous learning
              drives us to create a positive impact and foster an
              entrepreneurial spirit in everything we do.
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            )}
          </div> */}
        </div>
      </section>
    </div>
  );
}
