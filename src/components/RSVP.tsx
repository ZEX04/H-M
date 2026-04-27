import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Attendance = 'yes' | 'no' | ''

export default function RSVP() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !attendance) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section
      id="rsvp"
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #2D463E 0%, #1C2B27 60%, #162220 100%)',
      }}
    >
      {/* Background ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-8 text-6xl opacity-5 font-arabic" style={{ color: '#C9A84C' }}>
          ❋
        </div>
        <div className="absolute bottom-12 left-6 text-5xl opacity-5 font-arabic" style={{ color: '#C9A84C' }}>
          ✦
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.3) 40px, rgba(201,168,76,0.3) 41px)',
          }}
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-sm mx-auto relative z-10"
      >
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="font-arabic text-2xl mb-1" style={{ color: '#C9A84C', direction: 'rtl' }}>
            التأكيد
          </p>
          <h2 className="font-serif font-light text-4xl mb-2" style={{ color: '#FDFBF7' }}>
            RSVP
          </h2>
          <div
            className="divider-ornament mb-2"
            style={{ maxWidth: '220px', margin: '0 auto' }}
          >
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(253,251,247,0.5)', fontFamily: 'Lato' }}>
              kindly reply by August 1st
            </span>
          </div>
        </div>

        {/* Glass card */}
        <div
          className="glass rounded-3xl p-7 relative"
          style={{
            background: 'rgba(253,251,247,0.07)',
            border: '1px solid rgba(201,168,76,0.25)',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
          }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name field */}
                <div>
                  <label
                    htmlFor="rsvp-name"
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: 'rgba(253,251,247,0.6)', fontFamily: 'Lato' }}
                  >
                    Your Name
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="form-input"
                    style={{
                      background: 'rgba(253,251,247,0.1)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      color: '#FDFBF7',
                    }}
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label
                    className="block text-xs tracking-widest uppercase mb-3"
                    style={{ color: 'rgba(253,251,247,0.6)', fontFamily: 'Lato' }}
                  >
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'yes', label: 'Joyfully Yes', icon: '✦' },
                      { value: 'no', label: 'Regretfully No', icon: '—' },
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setAttendance(opt.value as Attendance)}
                        className="py-3 px-4 rounded-xl text-sm transition-all duration-300 flex flex-col items-center gap-1"
                        style={{
                          background: attendance === opt.value
                            ? 'rgba(201,168,76,0.25)'
                            : 'rgba(253,251,247,0.07)',
                          border: attendance === opt.value
                            ? '1px solid rgba(201,168,76,0.7)'
                            : '1px solid rgba(253,251,247,0.15)',
                          color: attendance === opt.value ? '#F5E6BE' : 'rgba(253,251,247,0.6)',
                          fontFamily: 'Lato',
                          transform: attendance === opt.value ? 'scale(1.02)' : 'scale(1)',
                        }}
                      >
                        <span style={{ fontSize: '1rem', color: '#C9A84C' }}>{opt.icon}</span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={!name.trim() || !attendance || loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-serif text-lg tracking-wide transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: name.trim() && attendance
                      ? 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)'
                      : 'rgba(201,168,76,0.3)',
                    backgroundSize: '200% auto',
                    color: name.trim() && attendance ? '#1C2B27' : 'rgba(253,251,247,0.3)',
                    border: 'none',
                    cursor: name.trim() && attendance ? 'pointer' : 'not-allowed',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600,
                    boxShadow: name.trim() && attendance
                      ? '0 4px 20px rgba(201,168,76,0.35)'
                      : 'none',
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        style={{ display: 'inline-block' }}
                      >
                        ✦
                      </motion.span>
                      Sending...
                    </span>
                  ) : (
                    'Send My RSVP'
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, type: 'spring', damping: 20 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="text-5xl mb-4 gold-shimmer"
                  style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
                >
                  ✦
                </motion.div>
                <h3 className="font-serif text-2xl mb-2" style={{ color: '#F5E6BE' }}>
                  {attendance === 'yes' ? 'We\'ll see you there!' : 'We\'ll miss you!'}
                </h3>
                <p
                  className="font-arabic text-lg mb-3"
                  style={{ color: '#C9A84C', direction: 'rtl' }}
                >
                  {attendance === 'yes' ? 'بارك الله فيكم' : 'شكراً لكم'}
                </p>
                <p className="text-sm" style={{ color: 'rgba(253,251,247,0.55)', fontFamily: 'Lato' }}>
                  Thank you, {name.split(' ')[0]}. Your RSVP has been received.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
