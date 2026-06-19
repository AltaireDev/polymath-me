'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { allArticles, Article } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { FiTag, FiClock, FiChevronDown } from 'react-icons/fi'

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(allArticles.map((article: Article) => article.category))]
    return cats
  }, [])

  const filteredArticles = useMemo(() => {
    return allArticles
      .filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              article.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
      })
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  }, [selectedCategory, searchQuery])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Articles
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          Thoughts, tutorials, and cheat sheets on tech I'm learning
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-400 text-black'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid gap-4">
        <AnimatePresence mode="wait">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <Link href={`/articles/${article.slug}`}>
                <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-400/40 transition-all hover:scale-[1.01]">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="font-mono text-emerald-400">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        {article.isCheatsheet && (
                          <span className="px-2 py-0.5 bg-amber-400/20 text-amber-400 rounded-full text-xs font-medium border border-amber-400/20">
                            Cheatsheet
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-gray-400 line-clamp-2">
                        {article.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <span className="px-2 py-0.5 bg-white/5 rounded-full text-xs text-gray-500">
                          {article.category}
                        </span>
                        {article.tags?.slice(0, 3).map(tag => (
                          <span key={tag} className="flex items-center gap-1 text-xs text-gray-500">
                            <FiTag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative glow on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 blur-xl" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500"
        >
          <p className="text-lg">No articles found matching your criteria</p>
        </motion.div>
      )}
    </motion.div>
  )
}