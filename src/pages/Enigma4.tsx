import { useState } from 'react'
import confetti from 'canvas-confetti'

export default function Enigma4() {
  const [answer, setAnswer] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [errorCount, setErrorCount] = useState(0)

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault()

    const normalizedAnswer = answer
      .trim()
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    if (normalizedAnswer === 'CHIPRE') {
      setIsUnlocked(true)
      triggerEpicVictory()
    } else {
      setErrorCount(prev => prev + 1)
    }
  }

  const triggerEpicVictory = () => {
    const duration = 5 * 1000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
        colors: ['#8a0303', '#c5a059', '#ff4500', '#000000'],
      })
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
        colors: ['#8a0303', '#c5a059', '#ff4500', '#000000'],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  return (
    <div className="min-h-screen bg-templar-stone flex flex-col items-center pt-32 pb-20 px-6 relative overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 100%, rgba(138,3,3,0.15) 0%, rgba(26,26,26,1) 60%)',
        }}
      />

      <div className="max-w-2xl w-full flex flex-col gap-8 items-center relative z-10">

        <header className="text-center space-y-4">
          <h1 className="font-medieval text-templar-red text-4xl sm:text-6xl drop-shadow-[0_0_15px_rgba(138,3,3,0.8)]">
            Enigma IV
          </h1>
          <h2 className="font-medieval text-templar-gold/90 text-xl tracking-widest uppercase drop-shadow-md">
            A Provação do Fogo
          </h2>
        </header>

        <div className="w-full border border-templar-red/50 bg-black/40 p-6 sm:p-10 text-center shadow-[0_0_30px_rgba(138,3,3,0.2)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-templar-red to-transparent" />

          <p className="font-body text-xl text-templar-parchment leading-relaxed mb-6">
            O último segredo não reside no mundo digital
            <br />
            O Guardião dos Registros aguarda nas dependências do IV EGOC.
          </p>
          <p className="font-body text-md text-templar-parchment/60 italic">
            Para provar seu valor, diga a ele o caminho percorrido até aqui e esteja pronto para enfrentar a chama.
          </p>
        </div>

        {!isUnlocked ? (
          <form onSubmit={checkAnswer} className="w-full flex flex-col items-center gap-4 mt-8">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Insira a sua resposta"
                className={`w-full bg-black/50 border-b-2 text-center font-medieval text-2xl py-4 px-4 text-templar-red focus:outline-none focus:bg-black/80 transition-all uppercase placeholder:text-templar-parchment/10 placeholder:text-sm placeholder:lowercase ${
                  errorCount > 0
                    ? 'border-red-500 text-red-500 animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.5)]'
                    : 'border-templar-red/30 focus:border-templar-red focus:shadow-[0_0_15px_rgba(138,3,3,0.5)]'
                }`}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="mt-6 px-10 py-4 bg-transparent border-2 border-templar-red text-templar-red font-medieval font-bold uppercase tracking-widest text-sm hover:bg-templar-red hover:text-white transition-all shadow-[0_0_15px_rgba(138,3,3,0.2)] hover:shadow-[0_0_30px_rgba(138,3,3,0.6)]"
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
            <div className="text-templar-gold text-center space-y-4">
              <p className="font-medieval text-4xl text-templar-red drop-shadow-[0_0_15px_rgba(138,3,3,0.8)]">
                A Demanda está Cumprida
              </p>
              <p className="font-body text-xl text-templar-parchment/90">
                A herança da Cavalaria renasce em <strong>Chipre</strong>, nobres guerreiros.
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
