'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Analyzing data and Engineering intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">One word which drives me - "Curiosity"</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m an aspiring Data Scientist and Software Engineer pursuing Information Science and Engineering at M. S. Ramaiah University of Applied Sciences. With a strong foundation in full-stack development, data analytics, and applied machine learning, I’m passionate about building intelligent, data-driven applications that create real-world impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From developing AI-powered solutions to designing scalable software systems, I enjoy blending analytical thinking with engineering creativity to solve complex problems. My curiosity and drive for innovation push me to explore automation, optimize performance, and continuously enhance the systems I build.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4" />
              <span>M. S. Ramaiah University of Applied Sciences [ Information Science ] </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-2 border-blue-100 dark:border-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">Driven by Innovation</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Turning bold ideas into intelligent AI systems that redefine how technology empowers people and businesses.  
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-100 dark:border-teal-900/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                    <Heart className="w-5 h-5 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">Building with Purpose</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Transforming complex data into meaningful, real-world solutions that create measurable impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 dark:border-purple-900/20 hover:border-purple-300 dark:hover:border-purple-700 transition-colors bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">Evolving Every Day</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                 constantly learning, and adapting to new technologies in AI, ML, and software engineering to stay at the forefront of innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
