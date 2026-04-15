export default function Footer() {
  return (
    <footer
      className="border-t border-templar-gold/25 py-10 px-4 sm:px-6 bg-templar-stone"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

        <div
          className="w-16 h-px bg-gradient-to-r from-transparent via-templar-red to-transparent"
          aria-hidden="true"
        />

        <div className="w-full flex flex-col items-center gap-8 sm:grid sm:grid-cols-[auto_1fr_auto] sm:justify-items-center text-center">

          <div className="order-1 sm:order-2 flex flex-col items-center gap-1">
            <p className="font-medieval text-[10px] sm:text-xs tracking-[0.25em] uppercase text-templar-gold/70">
              Grande Conselho do Estado do Rio Grande do Sul da Ordem DeMolay
            </p>
            <p className="font-body text-xs sm:text-sm text-templar-parchment/40 tracking-wider mt-1">
              Gabinete Estadual - Chama da Juventude
            </p>
            <p className="font-body text-[10px] sm:text-xs text-templar-parchment/25 mt-3 italic">
              "Pela glória de Deus e seu domínio."
            </p>
          </div>

          <div className="order-2 flex flex-row items-center justify-center gap-8 sm:contents">
            <img
              src="/logoGCE.png"
              alt="Logo Grande Conselho Estadual DeMolay RS"
              className="h-14 sm:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 sm:order-1"
            />
            <img
              src="/logoGE.png"
              alt="Logo Gabinete Estadual - Chama da Juventude"
              className="h-14 sm:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 sm:order-3"
            />
          </div>

        </div>
      </div>
    </footer>
  )
}
