export default function Footer() {
  return (
    <footer
      className="py-12 px-4 text-center"
      style={{
        background: 'linear-gradient(160deg, #1C2B27 0%, #162220 100%)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <p className="font-serif text-xl font-light mb-6" style={{ color: 'rgba(253,251,247,0.8)' }}>
        Mohamed <span style={{ color: '#C9A84C' }}>✦</span> Hind
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
