
import React from "react";
import { Mail, Code, Book, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Smart Resume Analyzer",
      description:
        "The Resume Analyzer is an AI-powered web application designed to rank and evaluate resumes based on job descriptions. Using a fine-tuned BERT model, the system processes resumes and job descriptions to generate attention scores and rank candidates based on role-specific similarities.",
      // Fixed image path
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      github: "https://github.com/username/project-one",
    },
    {
      id: 2,
      title: "Smart AI Reader",
      description:
        "The PDF Chat application leverages Retrieval-Augmented Generation (RAG) techniques to enable dynamic interaction with PDF documents. Users can upload PDFs, which are divided into segments and vectorized for efficient querying.",
      // Fixed image path
      image: "/project-two.png",
      github: "https://github.com/Raz-droid/SmartReaderAI",
    },
  ];

  const skills = [
    "JavaScript (React, Next.js)",
    "TypeScript",
    "HTML & CSS (Tailwind CSS)",
    "Node.js",
    "Git & GitHub",
    "Python",
    "Machine Learning",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20 space-y-32">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient">
            My Portfolio
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Building beautiful and functional web experiences
          </p>
        </div>

        {/* About Me Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                Hi there! I'm Raz, a passionate and driven software developer
                with a focus on AI, web development, and machine learning. I
                specialize in building innovative solutions that bridge the gap
                between technology and user experience.
              </p>
              <p>
                With a background in AI studies at Sree Chitra Thirunal College
                of Engineering, I've honed my skills in developing intelligent
                systems, from fine-tuning BERT models for resume screening to
                building scalable web applications using tools like Django and
                React.
              </p>
              <p>
                I thrive on solving complex problems, especially when it
                involves creating smart, scalable solutions that enhance
                everyday workflows. Whether it's building dynamic front-end
                applications or implementing backend architectures, I'm always
                looking for ways to improve and challenge myself.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300"
                >
                  <Code className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0"
              >
                <div className="h-56 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                  {/* Added actual image display with backup icon */}
                  {project.image ? (
                    <Image
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover absolute inset-0" 
                    />
                  ) : (
                    <Book className="h-16 w-16 text-purple-500 group-hover:scale-110 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 text-lg py-6">
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h2 className="text-4xl font-semibold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach
              out!
            </p>
            <a
              href="mailto:afrazzm04@gmail.com"
              className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span>afrazzm04@gmail.com</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
