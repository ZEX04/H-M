import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineItems = [
  {
    time: '5:00 PM',
    title: 'Ceremony',
    desc: 'Katb Kitab ceremony',
    icon: '☽',
  },
  {
    time: '6:00 PM',
    title: 'Photos',
    desc: 'Garden photography session with the couple and family.',
    icon: '✦',
  },
]

function MapPlaceholder() {
  return (
    <a
      href="https://maps.app.goo.gl/c94bVeb85ryUNGAMA?g_st=ac"
      target="_blank"
      rel="noopener noreferrer"
      className="map-container rounded-2xl block relative overflow-hidden transition-transform hover:scale-[1.02]"
      style={{
        height: '220px',
        border: '1px solid rgba(201,168,76,0.25)',
        boxShadow: '0 4px 24px rgba(45,70,62,0.08)',
        cursor: 'pointer',
      }}
    >
      {/* Map pin */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <div
            className="rounded-full flex items-center justify-center mb-1 pulse-glow"
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #2D463E, #3D6157)',
              boxShadow: '0 4px 16px rgba(45,70,62,0.35)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#F5E6BE"/>
            </svg>
          </div>
          {/* Pin shadow */}
          <div style={{ width: '8px', height: '4px', background: 'rgba(45,70,62,0.2)', borderRadius: '50%' }} />
        </motion.div>

        <div
          className="mt-3 px-5 py-2 rounded-xl text-center"
          style={{
            background: 'rgba(253,251,247,0.9)',
            border: '1px solid rgba(201,168,76,0.35)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <p className="font-serif text-base font-semibold" style={{ color: '#2D463E' }}>
            Open in Google Maps
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#6B7B73', fontFamily: 'Lato' }}>
            Tap for directions to the venue
          </p>
        </div>
      </div>

      {/* Decorative road lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 320 220" preserveAspectRatio="none">
        <path d="M0,110 Q80,90 160,110 Q240,130 320,110" stroke="#2D463E" strokeWidth="2" fill="none" strokeDasharray="4,6"/>
        <path d="M0,155 Q100,145 200,160 Q280,170 320,150" stroke="#2D463E" strokeWidth="1.5" fill="none" strokeDasharray="3,8" opacity="0.6"/>
        <path d="M60,0 Q70,80 80,220" stroke="#2D463E" strokeWidth="1.5" fill="none" strokeDasharray="3,8" opacity="0.5"/>
        <path d="M220,0 Q230,80 225,220" stroke="#2D463E" strokeWidth="1.5" fill="none" strokeDasharray="3,8" opacity="0.5"/>
        <circle cx="160" cy="60" r="12" fill="rgba(45,70,62,0.08)" stroke="rgba(45,70,62,0.12)" strokeWidth="1"/>
        <circle cx="80" cy="170" r="8" fill="rgba(45,70,62,0.06)" />
        <circle cx="260" cy="50" r="6" fill="rgba(45,70,62,0.06)" />
      </svg>
    </a>
  )
}

export default function Details() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="details" className="py-24 px-4" style={{ background: '#FDFBF7' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-md lg:max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ── Location ── */}
          <div>
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#C9A84C', fontFamily: 'Lato' }}>
                The Venue
              </p>
              <h2 className="font-serif font-light text-3xl mb-2" style={{ color: '#2D463E' }}>
                Location
              </h2>
              <div className="divider-ornament mb-8" style={{ maxWidth: '220px', margin: '0 auto 2rem' }}>
                <span className="text-xs tracking-[0.25em] uppercase" style={{ color: '#6B7B73', fontFamily: 'Lato' }}>
                  where we celebrate
                </span>
              </div>
            </div>

            <div className="relative mb-8 lg:mb-0">
              <MapPlaceholder />
            </div>
          </div>

          {/* ── Timeline ── */}
          <div>
            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#C9A84C', fontFamily: 'Lato' }}>
                Itinerary
              </p>
              <h2 className="font-serif font-light text-3xl mb-2" style={{ color: '#2D463E' }}>
                Timeline
              </h2>
              <div className="divider-ornament mb-8" style={{ maxWidth: '220px', margin: '0 auto 2rem' }}>
                <span className="text-xs tracking-[0.25em] uppercase" style={{ color: '#6B7B73', fontFamily: 'Lato' }}>
                  the evening's program
                </span>
              </div>
            </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute"
            style={{
              left: '28px',
              top: '24px',
              bottom: '24px',
              width: '1px',
              background: 'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.1))',
            }}
          />

          <div className="space-y-8">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.18 }}
                className="flex gap-5"
              >
                {/* Icon bubble */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full z-10"
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, #2D463E 0%, #3D6157 100%)',
                    boxShadow: '0 4px 16px rgba(45,70,62,0.25)',
                    fontSize: '1.2rem',
                    color: '#F5E6BE',
                  }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-serif text-xl font-semibold" style={{ color: '#2D463E' }}>
                      {item.title}
                    </h3>
                    <span
                      className="ml-auto text-xs tracking-wider"
                      style={{ color: '#6B7B73', fontFamily: 'Lato' }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7B73', fontFamily: 'Lato' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
