"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Llango ",
    role: "Founder, ORGANIC GURU",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
    content:
      "Working with Zimulate Consultech has truly transformed Organic Guru. Their innovative, tailor-made tech solutions streamlined our operations and unlocked new avenues for growth. The team's expertise and unwavering commitment have significantly impacted our digital journey. I highly recommend their services to any business ready to elevate its strategy.",
    rating: 5
  },
  {
    name: "Vishnu",
    role: "Founder, Tradito",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    content:
      "The expertise and professionalism of the team are unmatched. They delivered beyond our expectations.",
    rating: 5
  },
  {
    name: "Edric",
    role: "Director, Halocraft",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
    content:
      "Working with Zimulate Consultech was a game-changer for our digital transformation journey.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our valued clients about their experience working with
              Zimulate Consultech.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground flex-grow">
                  {testimonial.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
