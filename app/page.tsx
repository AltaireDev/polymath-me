'use client'

import { motion } from 'framer-motion'
import { 
  FiCode, FiCoffee, FiBook, FiMusic, FiAward, FiBriefcase, 
  FiGlobe, FiHeart, FiTrendingUp, FiZap, FiUsers,
  FiGithub, FiTwitter, FiLinkedin, FiSend,
  FiActivity,
  FiCpu
} from 'react-icons/fi'
import { FaBrain, FaDiscord } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import literallyMe from "../public/literally-me.png"
import { allProjects, allArticles } from 'contentlayer/generated'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-full text-sm font-mono border border-emerald-400/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for collaboration
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-gray-200">I'm </span>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Ahmadjon
              </span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl text-emerald-400 font-medium">
                The Polymath Developer Behind <span className="text-white">AltaireDev</span>
              </p>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Full-stack developer, problem solver, and lifelong learner. 
                I build things that matter and share knowledge along the way.
              </p>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-cyan-400 p-[2px] shadow-2xl shadow-emerald-400/20">
              <Image 
                src={literallyMe}
                alt='Profile image'
                className='w-full h-full object-cover rounded-full'
              />
              {/* <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-7xl md:text-8xl">  
              </div> */}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-emerald-400 border border-emerald-400/20">
              Polymath
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Projects Built', value: allProjects.length, icon: FiCode, color: 'emerald' },
          { label: 'Articles Written', value: allArticles.length, icon: FiBook, color: 'cyan' },
          { label: 'Years Coding', value: '2+', icon: FiCoffee, color: 'amber' },
          { label: 'Open Source Contributions', value: '0', icon: FiUsers, color: 'purple' },
          // { label: 'Continuous Learning', value: 'Always', icon: FiActivity, color: 'blue' },
          // { label: 'Technologies Explored', value: '10+', icon: FiCpu, color: 'zinc' },
          // { label: 'Students taught', value: '10+', icon: BsPerson, color: 'fuchsia' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05, y: -4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-emerald-400/30 transition-all"
          >
            <stat.icon className={`w-5 h-5 text-${stat.color}-400 mb-2`} />
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-6 col-span-3">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FaBrain className="text-emerald-400" />
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a young passionate software developer from Uzbekistan!! I am always
                eager to improve myself and learn new technologies constantly. I started my journey
                far back when I was 14, learning programming fundamentals individually by reading books
                and practicing by creating small programs. Throughout my life, I have created numerous real-world
                projects that solve real problems and help people, and I am further ready to continue
                contribute to the tech-field.
              </p>
              <p>
                Today, I specialize in various fields, from Frontend and Backend to AI and Mobile App
                Development. I am constantly exploring new technologies and learning new concepts to sharpen
                my knowledge in tech field.
              </p>
              <p>
                Beyond coding, I am professional in math, having participated in several regional olympiads in my city.
                I love reading books to acquire new knowledge, working out to maintain my physical well-being,
                solving challenging math problems, learning physics, learning languages, playing games,
                exploring nature, travelling, listening to music and playing chess. 
                I believe the best developers are curious about everything.
              </p>
              <p>
                I have IELTS band 8 certificate, which proves my proficiency in English,
                Codeforces rating 1300 (still growing), Youtube channel with a large audience of like-minded developers,
                Chess.com rating of 1400+ and many more.

                I am always ready for collaboration and cooperation. You can reach me out in different ways. All my socials
                are provided above...
              </p>
            </div>
          </div>

          <div className="space-y-6 col-span-2">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FiTrendingUp className="text-cyan-400" />
              My Philosophy
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  icon: FiHeart,
                  title: "Build with Purpose",
                  desc: "Every line of code should solve a real problem or create genuine value."
                },
                {
                  icon: FiBook,
                  title: "Learn in Public",
                  desc: "Share what you know. The best way to master something is to teach it."
                },
                {
                  icon: FiZap,
                  title: "Iterate Relentlessly",
                  desc: "Done is better than perfect, but continuous improvement is the goal."
                },
                {
                  icon: FiUsers,
                  title: "Community First",
                  desc: "Open source and collaboration make technology better for everyone."
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-emerald-400/20 transition-all">
                  <item.icon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <FiCode className="text-emerald-400" />
            Tech Stack & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-medium text-white mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Svelte'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-emerald-400/10 text-emerald-400 rounded text-xs border border-emerald-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-medium text-white mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Django', 'Flask', 'Go', 'Database', 'Express.js'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded text-xs border border-cyan-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-medium text-white mb-2">Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {['Dart', 'Flutter', 'Kotlin'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-cyan-400/10 text-violet-400 rounded text-xs border border-cyan-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-medium text-white mb-2">AI</h3>
              <div className="flex flex-wrap gap-2">
                {['Tensorflow', 'Pytorch', 'Python', 'Data Science'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-cyan-400/10 text-violet-400 rounded text-xs border border-cyan-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-medium text-white mb-2">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Figma', 'Linux', 'Docker'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-amber-400/10 text-amber-400 rounded text-xs border border-amber-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <FiBriefcase className="text-emerald-400" />
            Career Journey
          </h2>
          
          <div className="space-y-4">
            {[
              {
                year: '2026 - Present',
                title: 'Professional Developer',
                company: 'AltaireDev (Independent)',
                desc: 'Building various applications, consulting, and creating digital products.'
              },
              {
                year: '2024 - 2026',
                title: 'Start of a journey',
                company: 'Very first steps...',
                desc: 'Explored and learned several languages and technologies. My old young ages full of curiosity...🙂‍↔️'
              },
              {
                year: '2023',
                title: 'Python Mastery',
                company: '14 year old prodigy',
                desc: 'The absolute beginning of the journey of a future polymath..'
              }
            ].map((job) => (
              <div key={job.year} className="flex flex-col md:flex-row gap-2 md:gap-8 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-400/20 transition-all">
                <span className="font-mono text-emerald-400 text-sm whitespace-nowrap">{job.year}</span>
                <div>
                  <h3 className="font-medium text-white">{job.title}</h3>
                  <p className="text-emerald-400 text-sm">{job.company}</p>
                  <p className="text-gray-400 text-sm mt-1">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <FiCoffee className="text-amber-400" />
            Beyond the Code
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '📚', label: 'Reading Everything' },
              { icon: '🎵', label: 'Listening Music' },
              { icon: '✍️', label: 'Always writing' },
              { icon: '⚛️', label: 'Physics' },
              { icon: '🏔️', label: 'Exploring Nature' },
              { icon: '🎮', label: 'Action Games' },
              { icon: '🌍', label: 'Learning Languages' },
              { icon: '🔢', label: 'Math' },
              { icon: '💪', label: 'Working out' },
              { icon: '🧠', label: 'Collaborating' },
              { icon: '♟️', label: 'Playing Chess' },
              { icon: '🎯', label: 'To be continued..' },
            ].map((interest) => (
              <div key={interest.label} className="p-4 bg-white/5 rounded-xl border border-white/5 text-center hover:border-emerald-400/20 transition-all hover:scale-105">
                <div className="text-2xl mb-1">{interest.icon}</div>
                <span className="text-sm text-gray-400">{interest.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t border-white/10 pt-8"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">🏗️</span> Building in Public
          <span className="text-sm font-normal text-gray-500 ml-2">— What I've been up to</span>
        </h2>
        
        <div className="space-y-4">
          {[
            { 
              date: 'Dec 15, 2024', 
              content: 'Launched v2 of AltaireDev with a new project ideas feature 🚀',
              type: 'launch'
            },
          ].map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="font-mono text-emerald-400 text-sm whitespace-nowrap min-w-[120px]">
                {update.date}
              </span>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                  update.type === 'launch' ? 'bg-emerald-400/20 text-emerald-400' :
                  update.type === 'code' ? 'bg-blue-400/20 text-blue-400' :
                  update.type === 'writing' ? 'bg-amber-400/20 text-amber-400' :
                  update.type === 'community' ? 'bg-purple-400/20 text-purple-400' :
                  'bg-gray-400/20 text-gray-400'
                }`}>
                  {update.type}
                </span>
                <span className="text-gray-300">{update.content}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div> */}
    </motion.div>
  )
}