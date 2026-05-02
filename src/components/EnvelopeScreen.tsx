import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EnvelopeScreenProps {
  onDone: () => void
}

type Phase = 'sealed' | 'opening' | 'fading'

// ── Ultra-Realistic DOM Wax Seal ──
function WaxSeal() {
  return (
    <div className="wax-seal" />
  )
}

export default function EnvelopeScreen({ onDone }: EnvelopeScreenProps) {
  const [phase, setPhase] = useState<Phase>('sealed')

  const handleClick = () => {
    if (phase !== 'sealed') return
    setPhase('opening')
    setTimeout(() => setPhase('fading'), 450)
    setTimeout(() => onDone(), 1250)
  }

  const isOpening = phase === 'opening' || phase === 'fading'

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none intro-overlay ${phase === 'fading' ? 'fade-out' : ''}`}
      style={{ minHeight: '100dvh' }}
      onClick={handleClick}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;600&display=swap');

          .intro-overlay {
            background-color: #1a1a1a;
            transition: opacity 0.8s ease-in-out, background-color 0.8s ease-in-out;
          }

          .intro-overlay.fade-out {
            background-color: #ffffff; /* Bright light transition */
            opacity: 0;
            pointer-events: none;
          }

          .luxury-envelope {
            background-color: #1b3324;
            width: 100vw;
            height: 100dvh;
          }

          /* "exceed out side the size" */
          @media (max-aspect-ratio: 4/5) {
            .luxury-envelope {
              width: 150dvh !important; /* Forces PC-like flap angles */
              height: 100dvh !important;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
            }
          }

          .luxury-envelope::before, .flap::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: url('https://www.transparenttextures.com/patterns/textured-paper.png');
            background-repeat: repeat;
            opacity: 0.18;
            pointer-events: none;
            z-index: 2;
          }
          
          .shadow-flap {
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), inset 0 0 15px rgba(0, 0, 0, 0.15);
          }

          .wax-seal {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: min(600px, 75vw) !important;
            height: min(600px, 75vw) !important;
            background-image: url('/assets/wax%20seal.png');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            cursor: pointer;
            pointer-events: auto;
            /* Complex stack for photorealistic shadow depth */
            filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4)) drop-shadow(0 2px 4px rgba(0,0,0,0.25));
          }

          .envelope-text {
            width: 100%;
            text-align: center;
            color: #f4ebd9;
            pointer-events: none;
            padding: 0 20px;
          }

          .envelope-text p {
            font-family: 'Great Vibes', cursive;
            font-size: clamp(32px, 9vw, 56px); /* Bigger! */
            margin-bottom: 8px;
            color: #F5E6BE;
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0,0,0,0.6);
            letter-spacing: 2px;
            line-height: 1.2;
            white-space: normal;
          }

          .envelope-text span {
            font-family: 'Cinzel', serif;
            font-size: clamp(12px, 3.5vw, 18px); /* Bigger! */
            letter-spacing: 6px;
            text-transform: uppercase;
            font-weight: 600;
            color: #C9A84C;
            opacity: 0.95;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
            white-space: normal;
          }

          .golden-flower {
            position: absolute;
            background: linear-gradient(135deg, #C9A84C, #F5E6BE, #C9A84C, #8C6D23);
            mask-image: url('/assets/kollsd-flowers-5718624.png');
            mask-size: cover;
            mask-repeat: no-repeat;
            mask-position: center;
            -webkit-mask-image: url('/assets/kollsd-flowers-5718624.png');
            -webkit-mask-size: cover;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: center;
            pointer-events: none;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
          }

          .mobile-flower-container { display: none; }
          
          .mobile-flower-item {
             position: absolute;
             background: linear-gradient(135deg, #C9A84C, #F5E6BE, #C9A84C, #8C6D23);
             mask-size: contain;
             mask-repeat: no-repeat;
             mask-position: center;
             -webkit-mask-size: contain;
             -webkit-mask-repeat: no-repeat;
             -webkit-mask-position: center;
             pointer-events: none;
             filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
          }

          @media (max-aspect-ratio: 4/5) {
             .desktop-flower { display: none; }
             .mobile-flower-container { display: block; }
          }
        `}
      </style>

      {/* Main Container */}
      <div className="luxury-envelope relative">

        {/* z-index: 1 -> The Back Panel of the envelope (solid dark emerald green). */}
        <div className="absolute inset-0 z-[1] bg-[#1b3324]" />

        {/* z-index: 3 -> The Left and Right Flaps. */}
        <div className="absolute inset-0 z-[3] pointer-events-none">
          {/* Left Flap Wrapper */}
          <div className="absolute inset-0" style={{ filter: 'drop-shadow(8px 0 20px rgba(0,0,0,0.45))' }}>
            <div className="flap absolute top-0 left-0 w-full h-full bg-[#1b3324]" style={{ clipPath: 'polygon(0 0, 50% 47%, 0 100%)' }} />
          </div>
          {/* Right Flap Wrapper */}
          <div className="absolute inset-0" style={{ filter: 'drop-shadow(-8px 0 20px rgba(0,0,0,0.45))' }}>
            <div className="flap absolute top-0 right-0 w-full h-full bg-[#1b3324]" style={{ clipPath: 'polygon(100% 0, 50% 47%, 100% 100%)' }} />
          </div>
        </div>

        {/* z-index: 4 -> The Bottom Flap (so the card stays hidden in the "pocket"). */}
        <div className="absolute inset-0 z-[4] pointer-events-none" style={{ filter: 'drop-shadow(0 -8px 24px rgba(0,0,0,0.5))' }}>
          <div className="flap absolute inset-0 bg-[#1b3324]" style={{ clipPath: 'polygon(0 100%, 50% 47%, 100% 100%)' }} />
        </div>

        {/* Decorative Golden Foil Flowers (Desktop & Mobile) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100dvh] z-[4] pointer-events-none overflow-hidden opacity-90">
          <div className="golden-flower desktop-flower" style={{ width: '100%', height: '100%', top: 0, left: 0 }} />
          
          <div className="mobile-flower-container absolute top-0 left-0 w-full h-full">
            {/* Bottom-Left side */}
            <div className="mobile-flower-item" style={{ 
              maskImage: "url('/assets/3.png')",
              WebkitMaskImage: "url('/assets/3.png')",
              width: '65vw', height: '75vh',
              left: '-10vw', top: '70%',
              transform: 'translateY(-50%)'
            }} />

            {/* Bottom-Right side */}
            <div className="mobile-flower-item" style={{ 
              maskImage: "url('/assets/3.png')",
              WebkitMaskImage: "url('/assets/3.png')",
              width: '65vw', height: '75vh',
              right: '-10vw', top: '70%',
              transform: 'scaleX(-1) translateY(-50%)'
            }} />

            {/* Top-Left side */}
            <div className="mobile-flower-item" style={{ 
              maskImage: "url('/assets/3.png')",
              WebkitMaskImage: "url('/assets/3.png')",
              width: '65vw', height: '75vh',
              left: '-10vw', top: '30%',
              transform: 'scaleY(-1) translateY(50%)'
            }} />

            {/* Top-Right side */}
            <div className="mobile-flower-item" style={{ 
              maskImage: "url('/assets/3.png')",
              WebkitMaskImage: "url('/assets/3.png')",
              width: '65vw', height: '75vh',
              right: '-10vw', top: '30%',
              transform: 'scaleX(-1) scaleY(-1) translateY(50%)'
            }} />
          </div>
        </div>

        {/* z-index: 5 -> The Top Flap (closes over everything). */}
        <div className="absolute top-0 left-0 w-full h-full z-[5] pointer-events-none" style={{ perspective: '1400px' }}>
          <motion.div
            className="absolute top-0 left-0 w-full h-[47%] origin-top"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={isOpening ? {
              rotateX: -40,
              filter: 'drop-shadow(0 40px 50px rgba(0, 0, 0, 0.65))'
            } : {
              rotateX: 0,
              filter: 'drop-shadow(0 12px 36px rgba(0, 0, 0, 0.65))'
            }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Front of Top Flap */}
            <div
              className="flap shadow-flap absolute inset-0 bg-[#1b3324]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                backfaceVisibility: 'hidden'
              }}
            />

            {/* Back of Top Flap (Visible when open) */}
            <div
              className="flap absolute inset-0 bg-[#182d20]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: 'rotateX(180deg)',
                backfaceVisibility: 'hidden'
              }}
            />

            {/* z-index: 6 -> The Wax Seal embedded in the flap. */}
            <div className="absolute bottom-0 w-full flex justify-center pointer-events-none" style={{ transform: 'translateZ(2px)' }}>
              <WaxSeal />
            </div>
          </motion.div>
        </div>

        {/* ── Raised Gold Foil Typography (under seal) ── */}
        <div className="absolute bottom-[16%] left-0 w-full z-[8] pointer-events-none flex justify-center">
          <motion.div
            className="envelope-text"
            animate={isOpening ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: isOpening ? 0 : 0.3 }}
            style={{ width: '100vw' }}
          >
            <p>You are joyfully invited</p>
            <span>to celebrate with us</span>
          </motion.div>
        </div>

      </div>

      {/* No Tap Hint */}

    </div>
  )
}

