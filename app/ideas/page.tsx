'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiRefreshCw, FiClock, FiStar, FiCode } from 'react-icons/fi'
import ideasData from '@/content/project-ideas.json'

export default function Ideas() {
  const [currentIdea, setCurrentIdea] = useState<any>(null)
  const [isRandom, setIsRandom] = useState(false)

  useEffect(() => {
    // Get today's idea based on date
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    const ideaIndex = dayOfYear % ideasData.ideas.length
    setCurrentIdea(ideasData.ideas[ideaIndex])
  }, [])

  const getRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideasData.ideas.length)
    setCurrentIdea(ideasData.ideas[randomIndex])
    setIsRandom(true)
  }

  const getDailyIdea = () => {
    setIsRandom(false)
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    const ideaIndex = dayOfYear % ideasData.ideas.length
    setCurrentIdea(ideasData.ideas[ideaIndex])
  }

  if (!currentIdea) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Project Ideas
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          {isRandom ? 'Random idea for you' : "Today's featured project idea"}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={isRandom ? 'random' : 'daily'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          <div className="p-8 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-400/40 transition-all">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {isRandom ? (
                <span className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-xs font-medium border border-amber-400/20">
                  Random Pick
                </span>
              ) : (
                <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-400/20">
                  Daily Challenge
                </span>
              )}
            </div>

            <div className="space-y-6 max-w-3xl">
              <div>
                <span className="text-sm font-mono text-emerald-400">#{currentIdea.id}</span>
                <h2 className="text-3xl font-bold text-white mt-1">{currentIdea.title}</h2>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {currentIdea.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FiCode className="text-emerald-400" />
                    <span className="text-gray-400">Field:</span>
                    <span className="text-white">{currentIdea.field}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FiStar className="text-emerald-400" />
                    <span className="text-gray-400">Difficulty:</span>
                    <span className="text-white">{currentIdea.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FiClock className="text-emerald-400" />
                    <span className="text-gray-400">Time Estimate:</span>
                    <span className="text-white">{currentIdea.timeEstimate}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-gray-400">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {currentIdea.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {currentIdea.challenge && (
                <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-lg">
                  <p className="text-sm text-amber-400">✨ Challenge:</p>
                  <p className="text-gray-300 text-sm">{currentIdea.challenge}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={getDailyIdea}
          className="px-6 py-3 bg-emerald-400 text-black font-medium rounded-lg hover:bg-emerald-500 transition-all hover:scale-[1.02] flex items-center gap-2"
        >
          <FiRefreshCw className="w-4 h-4" />
          Today's Idea
        </button>
        <button
          onClick={getRandomIdea}
          className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all hover:scale-[1.02] flex items-center gap-2"
        >
          <FiRefreshCw className="w-4 h-4" />
          Random Idea
        </button>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        💡 {ideasData.ideas.length} ideas available • New one every day
      </div>
    </motion.div>
  )
}