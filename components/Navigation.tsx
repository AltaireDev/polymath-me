'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube, FiInstagram, FiMail } from 'react-icons/fi'
import { FaDiscord, FaTelegram } from 'react-icons/fa'

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Articles', path: '/articles' },
  { name: 'Projects', path: '/projects' },
  { name: 'Ideas', path: '/ideas' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com/AltaireDev' },
  { icon: FiInstagram, href: 'https://instagram.com/altaire_dev/' },
  // { icon: FiLinkedin, href: 'https://linkedin.com/in/' },
  // { icon: FaDiscord, href: 'https://discord.com/users/' },
  { icon: FaTelegram, href: 'https://t.me/altair_daily' },
  { icon: FiYoutube, href: 'https://www.youtube.com/@AltaireDev' },
  { icon: FiMail, href: 'mailto:altairetech2@gmail.com' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-mono text-emerald-400">✦</span>
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-emerald-400 transition-colors">
          <span className="text-white">Altaire</span><span className="text-emerald-400">Dev</span>
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-sm font-medium transition-colors hover:text-emerald-400"
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-400"
                    transition={{ type: 'spring', bounce: 0.2 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3 border-l border-gray-800 pl-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  )
}