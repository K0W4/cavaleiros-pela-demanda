import { useEnigma } from '../hooks/useEnigma'

export default function Enigma3() {
  const { answer, setAnswer, isUnlocked, errorCount, checkAnswer } = useEnigma('TUNEL')

  return (
    <div className="min-h-screen bg-templar-stone flex flex-col items-center pt-32 pb-20 px-6">
      <div className="max-w-2xl w-full flex flex-col gap-8 items-center">

        <header className="text-center space-y-4">
          <h1 className="font-medieval text-templar-gold text-4xl sm:text-5xl drop-shadow-md">
            Enigma III
          </h1>
          <h2 className="font-medieval text-templar-parchment/80 text-xl tracking-widest uppercase">
            A Passagem Oculta
          </h2>
        </header>

        <div className="w-full border-l-2 border-templar-red bg-black/20 p-6 italic text-templar-parchment/70 text-center text-sm sm:text-base mt-4 shadow-inner">
          <p>Nem todas as palavras são escritas com letras. Algumas são desenhadas com os ângulos da Cruz.</p>
        </div>

        <div className="w-full bg-[#eaddc5] border-4 border-templar-stone/50 p-4 sm:p-8 shadow-2xl relative flex items-center justify-center min-h-[250px] rounded-sm overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/old-wall.png')" }}
          />
          <img
            src="/templar-cipher.svg"
            alt="Cifra Templária Oculta"
            className="w-full max-w-md drop-shadow-md relative z-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const fallback = document.createElement('p')
              fallback.className = 'text-templar-stone font-medieval text-center'
              fallback.textContent = 'O pergaminho aguarda a tinta... (Adicione templar-cipher.svg na pasta public)'
              e.currentTarget.parentElement?.appendChild(fallback)
            }}
          />
        </div>

        {!isUnlocked ? (
          <form onSubmit={checkAnswer} className="w-full flex flex-col items-center gap-4 mt-4">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Insira a sua resposta"
                className={`w-full bg-black/50 border-b-2 text-center font-medieval text-xl py-3 px-4 text-templar-gold focus:outline-none focus:bg-black/80 transition-all uppercase placeholder:text-templar-parchment/20 placeholder:text-sm placeholder:lowercase ${
                  errorCount > 0
                    ? 'border-red-500 text-red-500 animate-pulse'
                    : 'border-templar-gold/30 focus:border-templar-gold'
                }`}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-templar-red text-white font-medieval uppercase tracking-widest text-sm hover:bg-red-800 transition-colors border border-red-900 shadow-[0_0_15px_rgba(138,3,3,0.3)] hover:shadow-[0_0_25px_rgba(138,3,3,0.6)]"
            >
              Revelar Verdade
            </button>

            {errorCount > 0 && (
              <p key={errorCount} className="text-red-500 font-body italic text-sm animate-bounce [animation-iteration-count:2.5] mt-2">
                Resposta incorreta.
              </p>
            )}
          </form>
        ) : (
          <div className="w-full flex flex-col items-center gap-6 mt-8 animate-fade-in">
            <div className="text-templar-gold text-center space-y-2">
              <p className="font-medieval text-2xl drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]">
                Segredo Desvendado
              </p>
              <p className="font-body text-templar-parchment/80">
                O caminho pelo <strong>Túnel</strong> está aberto para vocês.
              </p>
            </div>

            <div className="mt-4 px-6 py-5 border-2 border-templar-gold bg-black/60 text-templar-gold font-medieval tracking-widest text-center text-sm shadow-[0_0_20px_rgba(197,160,89,0.3)] uppercase">
              <p>Tire um print desta tela e envie ao Coordenador do Projeto para registrar a sua vitória.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
