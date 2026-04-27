import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EnvelopeScreenProps {
  onDone: () => void
}

type Phase = 'sealed' | 'opening' | 'fading'

// ── Highly realistic Botanical Embossing ──
// By matching the stroke color perfectly to the local background and heavily applying bevel shading,
// the SVG completely transforms from "lines on paper" to "thick 3D embossed paper fibers".
function Botanicals({ viewBox, clip, bg }: { viewBox: string; clip?: string; bg: string }) {
  const SW = "2.5" // Thicked to create an intense pressed bevel effect

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={viewBox} preserveAspectRatio="xMidYMid slice" style={clip ? { clipPath: clip } : undefined}>
      <defs>
        {/* Advanced 3D Bevel Filter */}
        <filter id="bot-emboss" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur"/>
          
          {/* Dark recessed shadow */}
          <feOffset dx="1.5" dy="2" in="blur" result="shadowOffset"/>
          <feFlood floodColor="#182610" floodOpacity="0.85"/>
          <feComposite operator="in" in2="shadowOffset" result="shadow"/>
          
          {/* Bright outer lip highlight */}
          <feOffset dx="-1" dy="-1" in="blur" result="highlightOffset"/>
          <feFlood floodColor="#90B573" floodOpacity="0.6"/>
          <feComposite operator="in" in2="highlightOffset" result="highlight"/>
          
          <feMerge>
            <feMergeNode in="shadow"/>
            <feMergeNode in="highlight"/>
            {/* The source graphic perfectly matches the BG, so it vanishes, leaving ONLY the 3D relief! */}
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* We simplify and thicken the botanical paths to sell the "thick paper fold" effect */}
        <g id="poppy">
          <path d="M22,28 Q14,14 22,6 Q28,0 34,8 Q38,2 44,10 Q52,6 50,18 Q56,22 50,30 Q54,40 44,38 Q42,48 32,44 Q18,48 16,36 Q6,34 12,24 Q6,18 14,16 Q12,8 20,12 Q18,18 20,26Z" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="33" cy="24" r="3.5" fill="none" stroke={bg} strokeWidth={SW}/>
          <path d="M26,18 Q29,21 33,20 M34,14 Q33,18 33,20 M40,18 Q37,20 33,20 M38,28 Q35,26 33,26 M32,32 Q32,28 33,26 M25,30 Q28,28 33,26" fill="none" stroke={bg} strokeWidth="1" strokeLinecap="round"/>
        </g>
        
        <g id="branch">
          <path d="M20,-10 Q12,0 4,10 Q-4,20 -8,36" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round"/>
          <path d="M14,0 Q22,-5 24,4 Q19,5 14,0Z" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5,8 Q13,4 13,12 Q9,14 5,8Z" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-3,18 Q5,14 5,22 Q1,24 -3,18Z" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        <g id="leaf-spray">
          <path d="M0,24 Q16,6 36,0 Q30,14 0,24Z" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0,24 Q14,12 30,6" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round"/>
          <path d="M-2,36 Q14,18 32,12 Q24,28 -2,36Z" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-2,36 Q12,24 26,18" fill="none" stroke={bg} strokeWidth={SW} strokeLinecap="round"/>
        </g>
      </defs>
      
      {/* Heavy stamping pattern over the entire component space */}
      <g filter="url(#bot-emboss)" opacity="0.8">
        <use href="#poppy" transform="translate(15, 20) scale(1.3) rotate(25)" />
        <use href="#branch" transform="translate(-10, 50) scale(1.6) rotate(-20)" />
        <use href="#leaf-spray" transform="translate(35, -5) scale(1.1) rotate(80)" />
        
        <use href="#poppy" transform="translate(95, 25) scale(1.2) rotate(-35)" />
        <use href="#branch" transform="translate(115, 10) scale(1.7) rotate(45)" />
        
        <use href="#poppy" transform="translate(100, 75) scale(1.4) rotate(-110)" />
        <use href="#branch" transform="translate(110, 95) scale(1.3) rotate(-50)" />
        <use href="#leaf-spray" transform="translate(85, 55) scale(1) rotate(-90)" />

        <use href="#poppy" transform="translate(-5, 90) scale(1.1) rotate(70)" />
        <use href="#leaf-spray" transform="translate(15, 75) scale(1.4) rotate(20)" />
        
        <use href="#branch" transform="translate(50, 30) scale(1.3) rotate(120)" />
        <use href="#branch" transform="translate(40, 90) scale(1.5) rotate(-15)" />
        <use href="#leaf-spray" transform="translate(70, 100) scale(1.1) rotate(-30)" />
      </g>
    </svg>
  )
}

// ── Ultra-Realistic DOM Wax Seal ──
function WaxSeal() {
  return (
    <div className="relative flex items-center justify-center pointer-events-none" style={{
      width: '160px', height: '160px',
      // The organic, melted outer wax edge using a heavily rounded asymmetrical shape
      borderRadius: '52% 48% 46% 54% / 54% 45% 55% 46%',
      // Realistic diffuse wax lighting reflection
      background: 'radial-gradient(circle at 30% 30%, #E8D5CA 0%, #BBA291 40%, #907664 80%, #685042 100%)',
      // Multi-layer drop shadow for intense thickness & gloss
      boxShadow: `
        0 15px 25px rgba(0,0,0,0.6), 
        inset 0 10px 15px rgba(255,255,255,0.5), 
        inset 0 -15px 25px rgba(0,0,0,0.5), 
        inset 10px 0 20px rgba(255,255,255,0.2)
      `
    }}>
      {/* Inner Pressed Puddle (stamped area) */}
      <div className="absolute flex items-center justify-center" style={{
        top: '15px', bottom: '15px', left: '15px', right: '15px',
        borderRadius: '48% 52% 51% 49% / 49% 51% 48% 52%',
        background: 'radial-gradient(circle at 45% 40%, #C7AC9B 0%, #A28471 50%, #7D5F4D 100%)',
        // Inset shadows make it look physically pushed-in by the stamp ring
        boxShadow: `
          inset 0 8px 12px rgba(0,0,0,0.5), 
          inset 0 -6px 10px rgba(255,255,255,0.2), 
          0 2px 4px rgba(255,255,255,0.4)
        `
      }}>
        {/* Raised metallic monogram using a perfect text-shadow bevel */}
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: '44px',
          color: '#B69A89',
          letterSpacing: '0.05em',
          textShadow: '2px 2px 3px rgba(0,0,0,0.7), -1px -1px 2px rgba(255,255,255,0.6)',
          zIndex: 10
        }}>
          M&amp;H
        </span>
      </div>
    </div>
  )
}

export default function EnvelopeScreen({ onDone }: EnvelopeScreenProps) {
  const [phase, setPhase] = useState<Phase>('sealed')

  const handleClick = () => {
    if (phase !== 'sealed') return
    setPhase('opening')
    setTimeout(() => setPhase('fading'), 900)
    setTimeout(() => onDone(), 1700)
  }

  const isOpening = phase === 'opening' || phase === 'fading'

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden cursor-pointer select-none"
      style={{ background: '#2E3D24', minHeight: '100dvh' }}
      onClick={handleClick}
      animate={phase === 'fading' ? { opacity: 0 } : { opacity: 1 }}
      transition={phase === 'fading' ? { duration: 0.8, ease: 'easeInOut' } : {}}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&display=swap');
          .english-display { font-family: 'Playfair Display', serif; font-weight: 600; font-style: italic; }
        `}
      </style>

      {/* ── Global Textured Paper Grain Overlay ── */}
      {/* This dramatically binds the visual elements together with a rich physical finish */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-50 opacity-40 mix-blend-color-burn">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.35 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Main Container */}
      <div className="absolute inset-0" style={{ background: '#3A4B2F' }}>

        {/* ── Left / Right Envelope Base Flaps ── */}
        <div className="absolute inset-0 z-0 bg-[#3A4B2F]">
          <Botanicals viewBox="0 0 100 100" bg="#3A4B2F" />
        </div>

        {/* ── Bottom Flap (Folds upwards, intersecting exactly center) ── */}
        <div className="absolute inset-0 z-10" style={{ 
          background: '#415335',
          clipPath: 'polygon(0 100%, 50% 47%, 100% 100%)' 
        }}>
          <Botanicals viewBox="0 0 100 100" bg="#415335" />
        </div>

        {/* Thick, heavily shadowed bottom flap paper edge */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
             <path d="M0,100 L50,47 L100,100" fill="none" stroke="rgba(0,0,0,0.85)" strokeWidth="2" vectorEffect="non-scaling-stroke" style={{ filter: 'drop-shadow(0 -5px 8px rgba(0,0,0,0.65))' }} />
             <path d="M0,100 L50,47 L100,100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" vectorEffect="non-scaling-stroke" transform="translate(0, 1.5)" />
          </svg>
        </div>

        {/* ── Top Flap Shadow Overlay ── */}
        <motion.div className="absolute top-0 left-0 right-0 z-15 pointer-events-none" style={{ height: '47%' }} animate={{ opacity: isOpening ? 0 : 1 }}>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
             <path d="M0,0 L50,100 L100,0" fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.8))' }} />
          </svg>
        </motion.div>

        {/* Inner envelope darkness when open */}
        <motion.div
           className="absolute inset-0 z-15 pointer-events-none"
           style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 45%, transparent 100%)' }}
           initial={{ opacity: 0 }}
           animate={{ opacity: isOpening ? 1 : 0 }}
           transition={{ delay: 0.1, duration: 0.6 }}
        />

        {/* ── Top Flap (Dynamic Opening) ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-20"
          style={{ height: '47%', transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
          animate={isOpening ? { rotateX: -175 } : { rotateX: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
           <div className="absolute inset-0 bg-[#475C3B]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
              <Botanicals viewBox="0 0 100 47" bg="#475C3B" />
           </div>
           
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <path d="M0,0 L50,100 L100,0" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           </svg>
        </motion.div>

        {/* ── Realistic Big Wax Seal ── */}
        <motion.div
          className="absolute z-30"
          style={{ top: '47%', left: '50%', x: '-50%', y: '-50%' }}
          animate={isOpening ? { scale: 0, opacity: 0, y: '-70%' } : { scale: 1, opacity: 1, y: '-50%' }}
          transition={{ duration: 0.35, ease: 'easeIn' }}
        >
          <WaxSeal />
        </motion.div>

        {/* ── Raised Gold Arabic Foil Typography ── */}
        <motion.div
           className="absolute w-full z-30 pointer-events-none flex flex-col items-center justify-start text-center px-4"
           style={{ top: 'calc(47% + 95px)' }}
           animate={isOpening ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
           transition={{ duration: 0.4, delay: isOpening ? 0 : 0.3 }}
        >
          <p className="english-display" style={{
            fontSize: 'clamp(1.2rem, 5vw, 1.6rem)',
            color: '#EBDDCA',
            letterSpacing: '0.05em',
            textShadow: '1px 1px 0 rgba(255,255,255,0.2), -1px -1px 0 rgba(100,60,30,0.6), 2px 4px 6px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.4)',
            lineHeight: 1.2
          }}>
            You are joyfully invited
          </p>
          <p className="english-display" style={{
            fontSize: 'clamp(0.9rem, 3.5vw, 1.2rem)',
            color: '#D8C3AC',
            marginTop: '0.4rem',
            letterSpacing: '0.1em',
            textTransform: 'lowercase',
            textShadow: '1px 1px 0 rgba(255,255,255,0.15), -1px -1px 0 rgba(100,60,30,0.5), 2px 3px 6px rgba(0,0,0,0.7)',
            lineHeight: 1.4
          }}>
            to celebrate with us
          </p>
        </motion.div>

        {/* ── Subtle Tap Hint ── */}
        <AnimatePresence>
          {phase === 'sealed' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-1.5"
              style={{ zIndex: 5 }}
            >
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4v18M7 15l7 7 7-7" stroke="rgba(230,220,200,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <p style={{
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(230,220,200,0.4)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}>
                tap to open
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
