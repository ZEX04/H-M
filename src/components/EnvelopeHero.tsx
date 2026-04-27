import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EnvelopeHero() {
  const [opened, setOpened] = useState(false)
  const [cardVisible, setCardVisible] = useState(false)

  const handleOpen = () => {
    if (opened) return
    setOpened(true)
    setTimeout(() => setCardVisible(true), 600)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #FDFBF7 0%, #F5F0E8 60%, #EDE5D4 100%)' }}
    >
      {/* Background decorative ornaments */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="float-anim absolute top-8 left-6 text-4xl opacity-10 font-arabic"
          style={{ color: '#2D463E', animationDelay: '0s' }}
        >
          ❋
        </div>
        <div
          className="float-anim absolute top-20 right-8 text-3xl opacity-10"
          style={{ color: '#C9A84C', animationDelay: '2s' }}
        >
          ✦
        </div>
        <div
          className="float-anim absolute bottom-24 left-10 text-2xl opacity-10"
          style={{ color: '#2D463E', animationDelay: '4s' }}
        >
          ✦
        </div>
        <div
          className="float-anim absolute bottom-16 right-12 text-4xl opacity-10 font-arabic"
          style={{ color: '#C9A84C', animationDelay: '1s' }}
        >
          ❋
        </div>
        {/* Corner vines */}
        <svg className="absolute top-0 left-0 opacity-8" width="200" height="200" viewBox="0 0 200 200">
          <path d="M0,0 Q50,50 20,100 Q-10,150 40,200" stroke="#2D463E" strokeWidth="1" fill="none" opacity="0.15"/>
          <circle cx="20" cy="100" r="3" fill="#C9A84C" opacity="0.2"/>
          <circle cx="40" cy="160" r="2" fill="#C9A84C" opacity="0.15"/>
        </svg>
        <svg className="absolute top-0 right-0 opacity-8 scale-x-[-1]" width="200" height="200" viewBox="0 0 200 200">
          <path d="M0,0 Q50,50 20,100 Q-10,150 40,200" stroke="#2D463E" strokeWidth="1" fill="none" opacity="0.15"/>
          <circle cx="20" cy="100" r="3" fill="#C9A84C" opacity="0.2"/>
        </svg>
      </div>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-8 z-10"
      >
        <p
          className="font-arabic text-3xl tracking-wide mb-2"
          style={{ color: '#2D463E', direction: 'rtl' }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
        <div className="divider-ornament" style={{ color: '#C9A84C', maxWidth: '220px', margin: '0 auto' }}>
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: '#6B7B73', fontFamily: 'Lato' }}>
            You are cordially invited
          </span>
        </div>
      </motion.div>

      {/* ─── Envelope ─── */}
      <div className="envelope-scene relative z-10 w-full max-w-sm px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, type: 'spring', damping: 20 }}
          className="relative cursor-pointer select-none"
          onClick={handleOpen}
          style={{ filter: 'drop-shadow(0 20px 40px rgba(45,70,62,0.2))' }}
        >
          {/* ── Envelope body ── */}
          <div
            className="relative rounded-2xl overflow-visible"
            style={{
              background: 'linear-gradient(160deg, #F8F2E6 0%, #F0E8D4 60%, #E8DCC4 100%)',
              border: '1px solid rgba(201,168,76,0.35)',
              boxShadow: '0 8px 32px rgba(45,70,62,0.12), 0 2px 8px rgba(201,168,76,0.15), inset 0 1px 0 rgba(255,255,255,0.7)',
              paddingTop: opened ? '0px' : '0px',
              minHeight: '240px',
            }}
          >
            {/* Inner V-fold lines (decorative) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <svg width="100%" height="100%" viewBox="0 0 320 240" preserveAspectRatio="none">
                <line x1="0" y1="240" x2="160" y2="140" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
                <line x1="320" y1="240" x2="160" y2="140" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
              </svg>
            </div>

            {/* ── Top Flap ── */}
            <motion.div
              className="absolute top-0 left-0 right-0 envelope-flap rounded-t-2xl"
              style={{
                height: '130px',
                background: 'linear-gradient(180deg, #EFE5CC 0%, #E8DBC4 100%)',
                borderBottom: '1px solid rgba(201,168,76,0.25)',
                transformOrigin: 'top center',
                zIndex: opened ? 5 : 20,
                clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
              }}
              animate={{
                rotateX: opened ? -175 : 0,
                zIndex: opened ? 5 : 20,
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Flap paper lines texture */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(45,70,62,0.15) 12px, rgba(45,70,62,0.15) 13px)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
                }}
              />
            </motion.div>

            {/* ── Wax Seal ── */}
            <motion.div
              className="absolute left-1/2 z-30 pulse-glow"
              style={{
                top: opened ? '-50px' : '75px',
                transform: 'translateX(-50%)',
                transition: 'top 0.5s ease',
              }}
              animate={{
                scale: opened ? 0 : 1,
                opacity: opened ? 0 : 1,
              }}
              transition={{ duration: 0.4, delay: opened ? 0 : 0.2 }}
            >
              <div
                className="wax-seal rounded-full flex items-center justify-center"
                style={{ width: '72px', height: '72px', border: '2px solid rgba(255,220,100,0.4)' }}
              >
                {/* Seal star pattern */}
                <svg width="44" height="44" viewBox="0 0 44 44">
                  <g fill="#F5E6BE" opacity="0.9">
                    <polygon points="22,4 24.5,17 37,11 27.5,20 38,28 24.5,27 22,40 19.5,27 6,28 16.5,20 7,11 19.5,17" />
                    <circle cx="22" cy="22" r="5" fill="none" stroke="#F5E6BE" strokeWidth="1.5"/>
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* Tap hint (before open) */}
            {!opened && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase"
                style={{ color: '#6B7B73', whiteSpace: 'nowrap', fontFamily: 'Lato' }}
              >
                ✦ tap to open ✦
              </motion.p>
            )}

            {/* ── Hidden Card (slides up when opened) ── */}
            <AnimatePresence>
              {cardVisible && (
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: -160, opacity: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-4 right-4 bottom-0 rounded-xl overflow-hidden z-10"
                  style={{
                    background: 'linear-gradient(160deg, #FDFBF7 0%, #F8F2E6 100%)',
                    border: '1px solid rgba(201,168,76,0.4)',
                    boxShadow: '0 -8px 40px rgba(45,70,62,0.15), 0 4px 20px rgba(201,168,76,0.1)',
                    padding: '28px 20px',
                  }}
                >
                  {/* Card top ornament */}
                  <div className="text-center mb-3">
                    <span className="gold-shimmer font-arabic text-xl">❋</span>
                  </div>

                  <p className="font-serif text-center italic text-sm mb-3" style={{ color: '#6B7B73' }}>
                    Together with their families
                  </p>

                  {/* Names */}
                  <div className="text-center mb-2">
                    <h1
                      className="font-serif font-light leading-none tracking-wide"
                      style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)', color: '#2D463E' }}
                    >
                      Layla
                    </h1>
                    <div className="divider-ornament my-2" style={{ maxWidth: '160px', margin: '8px auto' }}>
                      <span className="font-arabic text-lg" style={{ color: '#C9A84C' }}>و</span>
                    </div>
                    <h1
                      className="font-serif font-light leading-none tracking-wide"
                      style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)', color: '#2D463E' }}
                    >
                      Omar
                    </h1>
                  </div>

                  {/* Date */}
                  <div className="text-center mt-4">
                    <p className="text-xs tracking-[0.25em] uppercase" style={{ color: '#6B7B73', fontFamily: 'Lato' }}>
                      Friday · 15 August 2025
                    </p>
                    <p className="font-serif italic text-sm mt-1" style={{ color: '#C9A84C' }}>
                      Cairo, Egypt
                    </p>
                  </div>

                  {/* Scroll cue */}
                  <motion.div
                    className="flex justify-center mt-4"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3v12M4 10l5 5 5-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Envelope bottom spacer */}
            <div style={{ height: '240px' }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {cardVisible && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-48 text-xs tracking-[0.3em] uppercase z-10"
          style={{ color: '#6B7B73', fontFamily: 'Lato' }}
        >
          scroll to explore
        </motion.p>
      )}
    </section>
  )
}
