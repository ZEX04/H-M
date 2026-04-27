import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EnvelopeScreenProps {
  onDone: () => void
}

type Phase = 'sealed' | 'opening' | 'fading'

// Botanical Stroke Props
const STROKE = '#5D7744'
const SW = '0.65'

function Botanicals({ viewBox, clip }: { viewBox: string; clip?: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={viewBox} preserveAspectRatio="xMidYMid slice" style={clip ? { clipPath: clip } : undefined}>
      <defs>
        <filter id="bot-emboss" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0.4" dy="0.6" stdDeviation="0.4" floodColor="#182A0F" floodOpacity="0.85"/>
          <feDropShadow dx="-0.2" dy="-0.4" stdDeviation="0.3" floodColor="#86AA66" floodOpacity="0.5"/>
        </filter>
        
        <g id="poppy">
          <path d="M22,28 Q14,14 22,6 Q28,0 34,8 Q38,2 44,10 Q52,6 50,18 Q56,22 50,30 Q54,40 44,38 Q42,48 32,44 Q18,48 16,36 Q6,34 12,24 Q6,18 14,16 Q12,8 20,12 Q18,18 20,26Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="33" cy="24" r="2.5" fill="none" stroke={STROKE} strokeWidth={SW}/>
          <path d="M26,18 Q29,21 33,20 M34,14 Q33,18 33,20 M40,18 Q37,20 33,20 M38,28 Q35,26 33,26 M32,32 Q32,28 33,26 M25,30 Q28,28 33,26" fill="none" stroke={STROKE} strokeWidth="0.4" strokeLinecap="round"/>
        </g>
        
        <g id="branch">
          <path d="M20,-10 Q12,0 4,10 Q-4,20 -8,36" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round"/>
          <path d="M14,0 Q22,-5 24,4 Q19,5 14,0Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14,0 Q8,-6 6,2 Q10,4 14,0Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5,8 Q13,4 13,12 Q9,14 5,8Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5,8 Q-3,4 -3,12 Q1,14 5,8Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-3,18 Q5,14 5,22 Q1,24 -3,18Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-3,18 Q-11,14 -11,22 Q-7,24 -3,18Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        <g id="leaf-spray">
          <path d="M0,24 Q16,6 36,0 Q30,14 0,24Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0,24 Q14,12 30,6" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round"/>
          <path d="M-2,36 Q14,18 32,12 Q24,28 -2,36Z" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M-2,36 Q12,24 26,18" fill="none" stroke={STROKE} strokeWidth={SW} strokeLinecap="round"/>
        </g>
      </defs>
      
      {/* Stamped Botanicals across the full component */}
      <g filter="url(#bot-emboss)" opacity="0.6">
        <use href="#poppy" transform="translate(10, 15) scale(1.15) rotate(25)" />
        <use href="#branch" transform="translate(-10, 45) scale(1.4) rotate(-20)" />
        <use href="#leaf-spray" transform="translate(30, -5) scale(0.95) rotate(80)" />
        <use href="#poppy" transform="translate(90, 25) scale(1) rotate(-35)" />
        <use href="#branch" transform="translate(105, 5) scale(1.5) rotate(45)" />
        <use href="#leaf-spray" transform="translate(60, 5) scale(1.1) rotate(-160)" />
        <use href="#poppy" transform="translate(95, 65) scale(1.3) rotate(-110)" />
        <use href="#branch" transform="translate(105, 85) scale(1.1) rotate(-50)" />
        <use href="#leaf-spray" transform="translate(80, 50) scale(0.9) rotate(-90)" />
        <use href="#poppy" transform="translate(-5, 80) scale(0.9) rotate(70)" />
        <use href="#leaf-spray" transform="translate(15, 65) scale(1.2) rotate(20)" />
        <use href="#branch" transform="translate(45, 25) scale(1.1) rotate(120)" />
        <use href="#branch" transform="translate(35, 80) scale(1.3) rotate(-15)" />
        <use href="#leaf-spray" transform="translate(65, 90) scale(1) rotate(-30)" />
        <use href="#poppy" transform="translate(55, 100) scale(0.95) rotate(180)" />
      </g>
    </svg>
  )
}

function WaxSeal() {
  // Organic, fully irregular path resembling stamped melted wax
  const blobPath = "M 100, 12 C 130, 8, 165, 20, 180, 50 C 195, 80, 190, 130, 165, 160 C 140, 190, 105, 195, 70, 185 C 35, 175, 12, 140, 15, 105 C 18, 70, 30, 35, 65, 20 C 80, 12, 90, 14, 100, 12 Z";
  
  return (
    <svg width="180" height="180" viewBox="0 0 200 200" style={{ display: 'block' }}>
      <defs>
        <radialGradient id="wax-main" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#E4D3C5" />
          <stop offset="35%" stopColor="#CDB7A3" />
          <stop offset="70%" stopColor="#AB927A" />
          <stop offset="100%" stopColor="#876F5B" />
        </radialGradient>
        
        {/* Generates a massive 3D lift off the paper */}
        <filter id="seal-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="rgba(0,0,0,0.6)" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.4)" />
        </filter>
        
        {/* Recreates true engraved/sunken metallic look for the monogram */}
        <filter id="inner-emboss" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="rgba(50,30,15,0.7)" />
          <feDropShadow dx="-1" dy="-1" stdDeviation="1" floodColor="rgba(255,255,255,0.4)" />
        </filter>
      </defs>
      
      {/* 1. Transparent blob for dropping the outer shadow */}
      <path d={blobPath} fill="transparent" filter="url(#seal-shadow)" />
      
      {/* 2. Main solid waxy body */}
      <path d={blobPath} fill="url(#wax-main)" />
      
      {/* 3. Inner recessed puddle area for authentic depth */}
      <path d={blobPath} transform="scale(0.82) translate(22, 22)" fill="url(#wax-main)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d={blobPath} transform="scale(0.82) translate(22, 22)" fill="transparent" stroke="rgba(0,0,0,0.2)" strokeWidth="2.5" />
      
      {/* 4. Deeply Carved Monogram */}
      <g filter="url(#inner-emboss)" style={{ transform: 'translate(6px, 0px)' }}> {/* Kerning/Centering adjustment */}
        <text 
          x="94" y="115" 
          textAnchor="middle" 
          className="wax-text" 
          fontSize="52" 
          fill="#6F5645"
        >
          L&amp;O
        </text>
        <path d="M65,135 Q94,150 123,135" fill="none" stroke="#6F5645" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M89,143 Q94,137 99,143" fill="none" stroke="#6F5645" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      
      {/* 5. Curved glossy shine to sell the "wax" material */}
      <path d="M 35,50 Q 80,10 120,20 Q 90,30 35,50 Z" fill="rgba(255,255,255,0.25)" filter="blur(2px)" />
    </svg>
  );
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
      {/* Fonts Loader */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&family=Playfair+Display:ital@1&display=swap');
          .wax-text { font-family: 'Playfair Display', serif; font-weight: 500; font-style: italic; }
          .arabic-text { font-family: 'Amiri', serif; font-weight: 700; font-style: italic; }
        `}
      </style>

      {/* Global paper texture applies to the entire container to marry all layers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-50" style={{ mixBlendMode: 'multiply', opacity: 0.25 }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Main Container */}
      <div className="absolute inset-0" style={{ background: '#3F5233' }}>

        {/* ── Envelope Base (Left & Right Flaps Area) ── */}
        <div className="absolute inset-0 z-0">
          <Botanicals viewBox="0 0 100 100" />
        </div>

        {/* ── Bottom Flap Overlapping Sides ── */}
        <div className="absolute inset-0 z-10" style={{ 
          background: '#455A38',
          clipPath: 'polygon(0 100%, 50% 47%, 100% 100%)' 
        }}>
          <Botanicals viewBox="0 0 100 100" />
        </div>

        {/* Bottom Flap Seam Line & Physical Shadows */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
             {/* Deep drop-shadow reaching up onto the side flaps */}
             <path d="M0,100 L50,47 L100,100" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" style={{ filter: 'drop-shadow(0 -4px 5px rgba(0,0,0,0.45))' }} />
             {/* Cut paper light edge */}
             <path d="M0,100 L50,47 L100,100" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" transform="translate(0, 1)" />
          </svg>
        </div>

        {/* ── Top Flap Dropping Shadow Down Onto The Envelope Body ── */}
        {/* Fades out as the top flap rotates open */}
        <motion.div className="absolute top-0 left-0 right-0 z-15 pointer-events-none" style={{ height: '47%' }} animate={{ opacity: isOpening ? 0 : 1 }}>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
             <path d="M0,0 L50,100 L100,0" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
          </svg>
        </motion.div>

        {/* ── Revealing inner dark shadow when opening ── */}
        <motion.div
           className="absolute inset-0 z-15 pointer-events-none"
           style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 45%, transparent 100%)' }}
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
           {/* Solid Background & Clip */}
           <div className="absolute inset-0" style={{
              background: '#4B613D',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
           }}>
              <Botanicals viewBox="0 0 100 47" />
           </div>
           
           {/* Top Flap Crisp Paper Edge */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <path d="M0,0 L50,100 L100,0" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           </svg>
        </motion.div>

        {/* ── Realistic Big Wax Seal ── */}
        <motion.div
          className="absolute z-30"
          style={{
            top: '47%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={isOpening ? { scale: 0, opacity: 0, y: '-70%' } : { scale: 1, opacity: 1, y: '-50%' }}
          transition={{ duration: 0.35, ease: 'easeIn' }}
        >
          <WaxSeal />
        </motion.div>

        {/* ── Elegant Raised Gold Arabic Typography ── */}
        <motion.div
           className="absolute w-full z-30 pointer-events-none flex flex-col items-center justify-start text-center px-4"
           style={{ top: 'calc(47% + 105px)' }}
           animate={isOpening ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
           transition={{ duration: 0.4, delay: isOpening ? 0 : 0.3 }}
        >
          <p className="arabic-text" style={{
            fontSize: 'clamp(1.8rem, 7vw, 2.4rem)',
            color: '#EBDDCA',
            textShadow: '0 2px 6px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.1), 1px 1px 2px rgba(80,50,20,0.5)',
            lineHeight: 1.2
          }}>
            هذه الدعوة
          </p>
          <p className="arabic-text" style={{
            fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
            color: '#D8C3AC',
            marginTop: '0.2rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.1), 1px 1px 1px rgba(80,50,20,0.4)',
            lineHeight: 1.4
          }}>
            خاصة لك
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
