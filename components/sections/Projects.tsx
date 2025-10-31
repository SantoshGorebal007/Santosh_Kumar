'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award, TrendingUp, Calendar } from 'lucide-react';

const projects = [
  // {
  //   title: 'Ingredient Analyzer',
  //   description: 'Interactive web tool to visualize light pollution severity across 28 Indian states with real VIIRS satellite data',
  //   image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   date: 'March 2025',
  //   achievements: [
  //     'Built interactive visualization using React.js and Node.js',
  //     'Automated shapefile generation and per-state light intensity extraction via Python',
  //     'Enabled 10-year trend plots with 40% reduction in preprocessing time'
  //   ],
  //   technologies: ['React.js', 'Node.js', 'Python', 'GeoPandas', 'Rasterio', 'Web Development', 'Data Visualization'],
  //   demoUrl: 'https://light-pollution-explorer.lovable.app/',
  //   githubUrl: '',
  //   award: ''
  // },
  // {
  //   title: 'Expense Tracker',
  //   description: 'Mobile/web platform for second-hand item exchange at IIT Mandi with real-time updates and authentication',
  //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   date: 'February 2025',
  //   achievements: [
  //     'Built a mobile/web platform for second-hand item exchange at IIT Mandi using React (TypeScript)',
  //     'Developed backend with Node.js and Supabase (PostgreSQL) for real-time updates and auth',
  //     'Won 3rd place in KrackHack 2.0 (GDG)'
  //   ],
  //   technologies: ['PostgreSQL', 'React', 'Node.js', 'Express', 'TypeScript', 'Supabase'],
  //   githubUrl: '',
  //   award: '3rd Place - KrackHack 2.0 (GDG)'
  // },
  {
    title: 'Zomato Analysis Dashboard',
    description: 'Comprehensive Power BI dashboard analyzing Zomato restaurant data across India to derive insights on trends, ratings, and cuisines',
    image: 'https://github.com/SantoshGorebal007/zomato-dashboard/raw/main/pictures/overview.png',
    date: 'Jun 2025',
    achievements: [
      'Dynamic and Interactive: Filter, slice, and dice the data to uncover hidden gems and gain a competitive edge',
      'Visualize Your Success: Present data in visually stunning and easy-to-understand ways',
      'Real-time Analysis: Explore restaurant trends, customer preferences, and more in real-time'
    ],
    technologies: ['Python', 'Excel', 'Power BI', 'MySql', 'Jupyter Notebook'],
    demoUrl: 'https://santoshgorebal007.github.io/zomato-dashboard/',
    githubUrl: 'https://github.com/SantoshGorebal007/zomato-dashboard',
    award: ''
  },
  {
    title: 'Hospital Management & Analytical Dashboard',
    description: 'Created an interactive dashboard using Power BI to reveal key trends in hospital visitor data for informed decision-making. Utilized DAX for insights into patient demographics and service usage, boosting operational efficiency and patient satisfaction',
    image: 'https://github.com/SantoshGorebal007/Hospital-Dashboard/raw/main/pictures/Patient.png',
    date: 'Aug 2025',
    achievements: [
      '✅ Developed complex data models in Power BI using relationships and star schema for efficient analysis',
      '✅ Created interactive visualizations (maps, charts, slicers) for user-friendly data exploration',
      '✅ Automated Excel data uploads into MySQL with Python scripts for seamless integration',
    ],
    technologies: ['Power BI','Power Query Editor','Data Analysis Expressions (DAX)','Excel'],
    demoUrl: 'https://santoshgorebal007.github.io/Hospital-Dashboard/',
    githubUrl: 'https://github.com/SantoshGorebal007/Hospital-Dashboard',
    award: ''
  },
    {
    title: 'Sales Analysis Dashboard',
    description: 'This project analyzes Superstore sales data using Tableau, focusing on over 8,500 sales records. The goal is to uncover insights and trends to support business decisions. The analysis includes data cleaning (ETL/ELT), visualization, and dashboard creation',
    image: 'https://github.com/SantoshGorebal007/Superstore-Sales-Data-Analytics-/raw/main/Images/Dashboard.png',
    date: 'May 2025',
    achievements: [
      'ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) methods were used to clean and prepare the sales data for analysis.',
      ' Created interactive visualizations and dashboards in Tableau to present key sales metrics and trends.',
      ' Analyzed sales performance across different regions, product categories, and time periods to identify growth opportunities and areas for improvement.'
    ],
    technologies: ['Python', 'Excel', 'Tableau', 'MySql', 'Jupyter Notebook'],
    demoUrl: 'https://santoshgorebal007.github.io/Superstore-Sales-Data-Analytics-/',
    githubUrl: 'https://github.com/SantoshGorebal007/Superstore-Sales-Data-Analytics-',
    award: ''
  },
    {
    title: 'Sundown website Clone',
    description: 'A visually immersive, interactive website inspired by modern creative studios. This project showcases advanced web design and animation techniques for a stunning user experience',
    image: 'https://github.com/SantoshGorebal007/Sundown-Web/raw/main/Asset/SundownHome.png',
    date: 'Aug 2024',
    achievements: [
      'Custom Typography: Uses Neue Haas Display font family for a modern, clean look',
      'Video Backgrounds: Immersive video integration for hero sections',
      'Animated Loaders & Shapes: Loader screens and animated SVG/CSS shapes for visual interest','Responsive Design: Mobile-friendly layouts and adaptive components for all devices',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll', 'Responsive Design'],
    demoUrl: 'https://santoshgorebal007.github.io/Sundown-Web/',
    githubUrl: 'https://github.com/SantoshGorebal007/Sundown-Web',
    award: ''
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work blending Data science and Software engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-200 border bg-card">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                  {project.award && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                        <Award className="w-3 h-3 mr-1" />
                        {project.award}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    {project.demoUrl && (
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-2" />
                          View Source
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}