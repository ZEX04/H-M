import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface HeroInvitationProps {
  visible: boolean
}

export default function HeroInvitation({ visible }: HeroInvitationProps) {
  const ref = useRef(null)

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* ── Background photo ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(10,20,15,0.55) 0%, rgba(10,20,15,0.3) 40%, rgba(10,20,15,0.65) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 w-full max-w-sm">

        {/* Bismillah */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-serif italic text-2xl mb-6"
          style={{ color: 'rgba(220,205,185,0.85)', letterSpacing: '0.05em' }}
        >
          With joyful hearts
        </motion.p>

        {/* "Together with their families" */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-8"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Lato' }}
        >
          we are getting married
        </motion.p>

        {/* Name — Mohamed */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1.0 }}
          className="font-serif italic font-light leading-none"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 5rem)', color: '#FFFFFF', lineHeight: 1.05, textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
        >
          Mohamed
        </motion.h1>

        {/* Ampersand */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="font-serif italic"
          style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', color: 'rgba(220,205,175,0.85)', lineHeight: 1.3 }}
        >
          &amp;
        </motion.p>

        {/* Name — Omar */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 1.0 }}
          className="font-serif italic font-light leading-none"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 5rem)', color: '#FFFFFF', lineHeight: 1.05, textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
        >
          Hind
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-1"
        >
          <div
            style={{
              width: '40px', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(220,205,175,0.7), transparent)',
              marginBottom: '8px',
            }}
          />
          <p className="font-serif italic text-base" style={{ color: 'rgba(220,205,175,0.9)' }}>
            Friday, 22 May 2026
          </p>
          <p className="text-xs tracking-[0.25em]" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Lato' }}>
            CAIRO, EGYPT
          </p>
        </motion.div>

        {/* CTA scroll button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-12"
        >
          <a
            href="#countdown"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Lato',
              backdropFilter: 'blur(12px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            }}
          >
            <span>View Invitation</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-5"
        style={{ background: 'linear-gradient(to top, #FDFBF7 0%, transparent 100%)' }}
      />
    </motion.section>
  )
}
