import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import EnvelopeScreen from './components/EnvelopeScreen'
import HeroInvitation from './components/HeroInvitation'
import Navbar from './components/Navbar'
import Countdown from './components/Countdown'
import Details from './components/Details'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

export default function App() {
  const [envelopeDone, setEnvelopeDone] = useState(false)
  const [invitationVisible, setInvitationVisible] = useState(false)

  const handleEnvelopeDone = () => {
    setEnvelopeDone(true)
    // Small delay so Hero fades in as envelope fades out (cross-fade overlap)
    setTimeout(() => setInvitationVisible(true), 200)
  }

  return (
    <div style={{ background: '#FDFBF7', minHeight: '100vh' }}>
      {/* ── Envelope screen (overlays everything until opened) ── */}
      <AnimatePresence>
        {!envelopeDone && (
          <EnvelopeScreen onDone={handleEnvelopeDone} />
        )}
      </AnimatePresence>

      {/* ── Main invitation site (fades in when envelope opens) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: invitationVisible ? 1 : 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        style={{ pointerEvents: invitationVisible ? 'auto' : 'none' }}
      >
        <Navbar />
        <main>
          <HeroInvitation visible={invitationVisible} />
          <Countdown />
          <Details />
          <RSVP />
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}
