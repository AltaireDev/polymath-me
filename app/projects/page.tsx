'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'
import { FiGithub, FiExternalLink, FiCode, FiStar, FiGrid, FiList } from 'react-icons/fi'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const allTech = useMemo(() => {
    const techs = allProjects.flatMap(p => p.tech)
    return ['All', ...new Set(techs)]
  }, [])

  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? allProjects 
      : allProjects.filter(p => p.tech.includes(filter))
  }, [filter])

  const featuredProjects = useMemo(() => {
    return allProjects.filter(p => p.featured)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-gray-400 text-lg">
            A collection of things I've built, learned from, and am proud of
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 mr-2">{filteredProjects.length} projects</span>
            <div className="flex bg-white/5 rounded-lg border border-white/10 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid' ? 'bg-emerald-400/20 text-emerald-400' : 'text-gray-500 hover:text-white'
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list' ? 'bg-emerald-400/20 text-emerald-400' : 'text-gray-500 hover:text-white'
                }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && filter === 'All' && (
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-emerald-400 flex items-center gap-2">
            <FiStar className="w-4 h-4" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} viewMode="grid" featured />
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-2 border-t border-white/5 pt-6">
        {allTech.map(tech => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === tech
                ? 'bg-emerald-400 text-black'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-emerald-400/30'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid/List */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} viewMode={viewMode} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-gray-500"
          >
            <FiCode className="w-12 h-12 mx-auto mb-4 text-gray-700" />
            <p className="text-lg">No projects found with {filter}</p>
            <p className="text-sm">Try selecting a different filter</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Project Card Component
function ProjectCard({ project, viewMode, featured, index = 0 }: any) {
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all hover:bg-white/10"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <span className="px-2 py-0.5 bg-amber-400/20 text-amber-400 rounded-full text-xs border border-amber-400/20">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span key={tech} className="px-2 py-0.5 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 ml-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-emerald-400 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                 className="text-gray-500 hover:text-emerald-400 transition-colors">
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all ${
        featured ? 'border-emerald-400/30 bg-emerald-400/5' : 'border-white/10 hover:border-emerald-400/30'
      } hover:bg-white/10 hover:scale-[1.02]`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1 line-clamp-2">
              {project.description}
            </p>
          </div>
          {project.featured && (
            <FiStar className="w-5 h-5 text-amber-400 flex-shrink-0 ml-2" />
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-white/5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors flex items-center gap-1 text-sm"
            >
              <FiGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors flex items-center gap-1 text-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}