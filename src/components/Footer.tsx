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
      <p
        className="font-arabic text-3xl mb-4"
        style={{ color: 'rgba(201,168,76,0.7)', direction: 'rtl' }}
      >
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </p>

      {/* Names */}
      <p className="font-serif text-xl font-light mb-2" style={{ color: 'rgba(253,251,247,0.8)' }}>
        Layla <span style={{ color: '#C9A84C' }}>✦</span> Omar
      </p>

      {/* Quran verse */}
      <p
        className="font-arabic text-sm mb-1 leading-loose"
        style={{ color: 'rgba(201,168,76,0.6)', direction: 'rtl' }}
      >
        "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا"
      </p>
      <p className="text-xs italic mb-6" style={{ color: 'rgba(253,251,247,0.35)', fontFamily: 'Lato' }}>
        "And of His signs is that He created for you spouses from yourselves." — Quran 30:21
      </p>

      <div className="divider-ornament" style={{ maxWidth: '200px', margin: '0 auto 1rem' }}>
        <span className="text-xs" style={{ color: 'rgba(201,168,76,0.4)' }}>✦</span>
      </div>

      <p className="text-xs" style={{ color: 'rgba(253,251,247,0.25)', fontFamily: 'Lato' }}>
        Friday, 15 August 2025 · Cairo, Egypt
      </p>
    </footer>
  )
}
