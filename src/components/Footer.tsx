export default function Footer() {
  return (
    <footer
      className="py-12 px-4 text-center"
      style={{
        background: 'linear-gradient(160deg, #1C2B27 0%, #162220 100%)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* Bismillah */}
      <div className="w-full mb-4">
        <p
          className="font-arabic text-3xl text-center"
          style={{ color: 'rgba(201,168,76,0.7)' }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
      </div>

      {/* Names (Perfectly Centered Star via Grid) */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-2 font-serif text-xl font-light w-full max-w-[320px] mx-auto" style={{ color: 'rgba(253,251,247,0.8)' }}>
        <div className="text-right">Mohamed</div>
        <div style={{ color: '#C9A84C' }}>✦</div>
        <div className="text-left">Hind</div>
      </div>

      {/* Quran verse */}
      <div className="w-full mb-1">
        <p
          className="font-arabic text-sm leading-loose text-center"
          style={{ color: 'rgba(201,168,76,0.6)' }}
        >
          "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا"
        </p>
      </div>
      <p className="text-xs italic mb-6" style={{ color: 'rgba(253,251,247,0.35)', fontFamily: 'Lato' }}>
        "And of His signs is that He created for you spouses from yourselves." — Quran 30:21
      </p>

      <div className="divider-ornament" style={{ maxWidth: '200px', margin: '0 auto 1rem' }}>
        <span className="text-xs" style={{ color: 'rgba(201,168,76,0.4)' }}>✦</span>
      </div>

      <p className="text-xs" style={{ color: 'rgba(253,251,247,0.25)', fontFamily: 'Lato' }}>
        Friday, 22 May 2026 · Cairo, Egypt
      </p>
    </footer>
  )
}
