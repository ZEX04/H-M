import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WEDDING_DATE = new Date('2026-05-22T17:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = WEDDING_DATE.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

function CountBox({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="countdown-digit flex items-center justify-center w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24"
      >
        <span
          className="font-serif font-light leading-none text-3xl sm:text-4xl md:text-5xl"
          style={{ color: '#2D463E' }}
        >
          {display}
        </span>
      </div>
      <span
        className="text-[10px] sm:text-xs tracking-[0.2em] uppercase"
        style={{ color: '#6B7B73', fontFamily: 'Lato' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="countdown" className="py-24 px-4" style={{ background: '#F5F0E8' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-lg md:max-w-3xl mx-auto text-center"
      >
        {/* Section header */}
        <p
          className="text-xs tracking-[0.25em] uppercase mb-2"
          style={{ color: '#C9A84C', fontFamily: 'Lato' }}
        >
          the wait is almost over
        </p>
        <h2 className="font-serif font-light text-3xl mb-2" style={{ color: '#2D463E' }}>
          Counting Down
        </h2>
        <div className="divider-ornament mb-10" style={{ maxWidth: '240px', margin: '0 auto 2.5rem' }}>
          <span className="text-xs tracking-[0.25em] uppercase" style={{ color: '#6B7B73', fontFamily: 'Lato' }}>
            until the ceremony
          </span>
        </div>

        {/* Timer */}
        <div className="flex items-start justify-center gap-2 sm:gap-4 flex-nowrap overflow-visible">
          <CountBox value={time.days} label="Days" />
          <div className="font-serif text-2xl sm:text-3xl mt-3 sm:mt-5" style={{ color: '#C9A84C' }}>:</div>
          <CountBox value={time.hours} label="Hours" />
          <div className="font-serif text-2xl sm:text-3xl mt-3 sm:mt-5" style={{ color: '#C9A84C' }}>:</div>
          <CountBox value={time.minutes} label="Mins" />
          <div className="font-serif text-2xl sm:text-3xl mt-3 sm:mt-5" style={{ color: '#C9A84C' }}>:</div>
          <CountBox value={time.seconds} label="Secs" />
        </div>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full"
          style={{
            background: 'rgba(45,70,62,0.06)',
            border: '1px solid rgba(201,168,76,0.3)',
          }}
        >
          <span className="text-sm" style={{ color: '#C9A84C' }}>✦</span>
          <span className="font-serif italic text-sm" style={{ color: '#2D463E' }}>
            Friday, 22 May 2026 · 5:00 PM
          </span>
          <span className="text-sm" style={{ color: '#C9A84C' }}>✦</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
