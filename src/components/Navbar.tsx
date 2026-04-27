import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Countdown', href: '#countdown' },
  { label: 'Details', href: '#details' },
  { label: 'RSVP', href: '#rsvp' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(253,251,247,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(45,70,62,0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#home" className="font-serif text-xl font-light" style={{ color: '#2D463E', letterSpacing: '0.05em' }}>
          L <span className="gold-shimmer">✦</span> O
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-7">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-100"
              style={{ color: '#6B7B73', fontFamily: 'Lato', opacity: 0.8 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2D463E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B7B73')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              className="block rounded-full"
              style={{ width: '22px', height: '1.5px', background: '#2D463E' }}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 7 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-4 right-4 z-40 rounded-2xl py-4 px-5 space-y-4"
            style={{
              background: 'rgba(253,251,247,0.95)',
              border: '1px solid rgba(201,168,76,0.3)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 8px 32px rgba(45,70,62,0.12)',
            }}
          >
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-[0.2em] uppercase py-1"
                style={{ color: '#2D463E', fontFamily: 'Lato' }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
