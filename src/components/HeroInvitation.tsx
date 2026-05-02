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
          background: 'linear-gradient(180deg, rgba(15,25,20,0.8) 0%, rgba(15,25,20,0.6) 45%, rgba(15,25,20,0.85) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 w-full max-w-5xl">

        {/* Bismillah */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-serif italic text-3xl md:text-4xl mb-6"
          style={{ color: 'rgba(220,205,185,0.85)', letterSpacing: '0.05em' }}
        >
          With joyful hearts
        </motion.p>

        {/* "Together with their families" */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.35em] uppercase mb-10"
          style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Lato' }}
        >
          we are getting married
        </motion.p>

        {/* Name — Mohamed */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1.0 }}
          className="font-serif italic font-light leading-none"
          style={{ fontSize: 'clamp(5rem, 18vw, 9rem)', color: '#FFFFFF', lineHeight: 1.05, textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
        >
          Mohamed
        </motion.h1>

        {/* Ampersand */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="font-serif italic"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', color: 'rgba(220,205,175,0.9)', lineHeight: 1.3 }}
        >
          &amp;
        </motion.p>

        {/* Name — Omar */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 1.0 }}
          className="font-serif italic font-light leading-none"
          style={{ fontSize: 'clamp(5rem, 18vw, 9rem)', color: '#FFFFFF', lineHeight: 1.05, textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
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
          <p className="font-serif italic text-xl md:text-2xl" style={{ color: 'rgba(220,205,175,0.95)' }}>
            Friday, 22 May 2026
          </p>
          <p className="text-sm md:text-base tracking-[0.25em]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Lato' }}>
            10TH OF RAMADAN CITY
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm md:text-base tracking-[0.25em] uppercase transition-all duration-300"
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
