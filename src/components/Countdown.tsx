import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WEDDING_DATE = new Date('2025-08-15T18:00:00')

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
        className="countdown-digit flex items-center justify-center"
        style={{ width: '72px', height: '80px' }}
      >
        <span
          className="font-serif font-light leading-none"
          style={{ fontSize: '2.4rem', color: '#2D463E' }}
        >
          {display}
        </span>
      </div>
      <span
        className="text-xs tracking-[0.2em] uppercase"
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
        className="max-w-md mx-auto text-center"
      >
        {/* Section header */}
        <p
          className="font-arabic text-2xl mb-1"
          style={{ color: '#C9A84C', direction: 'rtl' }}
        >
          العد التنازلي
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
        <div className="flex items-start justify-center gap-4 flex-wrap">
          <CountBox value={time.days} label="Days" />
          <div className="font-serif text-3xl mt-3" style={{ color: '#C9A84C' }}>:</div>
          <CountBox value={time.hours} label="Hours" />
          <div className="font-serif text-3xl mt-3" style={{ color: '#C9A84C' }}>:</div>
          <CountBox value={time.minutes} label="Minutes" />
          <div className="font-serif text-3xl mt-3" style={{ color: '#C9A84C' }}>:</div>
          <CountBox value={time.seconds} label="Seconds" />
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
            Friday, 15 August 2025 · 6:00 PM
          </span>
          <span className="text-sm" style={{ color: '#C9A84C' }}>✦</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
