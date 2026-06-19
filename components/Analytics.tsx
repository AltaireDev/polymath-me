'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { allArticles, allProjects } from 'contentlayer/generated'

export function Analytics() {
  const [stats, setStats] = useState({
    articles: 0,
    projects: 0,
    totalWords: 0,
    readingTime: 0,
  })

  useEffect(() => {
    const articles = allArticles.length
    const projects = allProjects.length
    
    let totalWords = 0
    allArticles.forEach(article => {
      const body = article.body?.raw || ''
      totalWords += body.split(/\s+/).length
    })
    
    const readingTime = Math.round(totalWords / 200)

    setStats({ articles, projects, totalWords, readingTime })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-20 pt-8 border-t border-white/5"
    >
      <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-4">
          <span>📝 {stats.totalWords.toLocaleString()} words written</span>
          <span>🚀 {new Date().getFullYear() - 2024}+ years coding</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Always learning 🙂‍↔️</span>
        </div>
      </div>
    </motion.div>
  )
}