export default function Home() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-20"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(138,3,3,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 50% 100%, rgba(197,160,89,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
        <img
          src="/logoCPD.png"
          alt=""
          className="w-full max-w-4xl h-auto object-contain opacity-[0.04] sm:opacity-[0.06] select-none"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
        <p className="font-medieval text-templar-gold text-xs tracking-[0.4em] uppercase mb-2 animate-pulse">
          ✦ &nbsp;&nbsp; Ordem da Cavalaria &nbsp;&nbsp; ✦
        </p>

        <h1
          id="hero-title"
          className="font-medieval text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-templar-parchment drop-shadow-[0_2px_24px_rgba(197,160,89,0.25)]"
        >
          Cavaleiros
          <br />
          <span className="text-templar-gold">Pela Demanda</span>
        </h1>

        <div
          className="w-24 h-px bg-gradient-to-r from-transparent via-templar-gold to-transparent"
          aria-hidden="true"
        />

        <p className="font-body text-lg sm:text-xl text-templar-parchment/75 leading-relaxed max-w-xl italic">
          Nobres Cavaleiros, o Gabinete Estadual convoca sua presença. Quatro enigmas guardam
          os segredos da Demanda. Cada um carrega consigo um teste de honra, sabedoria e
          coragem. Apenas os mais dignos revelarão a verdade.
        </p>

        <p className="font-body text-base text-templar-parchment/50 leading-relaxed max-w-lg">
          Cada enigma será liberado em seu tempo.
          <br />
          Quando o cadeado abrir, sua prova estará disponível.
        </p>
      </div>
    </section>
  )
}
