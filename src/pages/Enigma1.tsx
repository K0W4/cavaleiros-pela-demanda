import { useState } from 'react'
import confetti from 'canvas-confetti'

export default function Enigma1() {
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

    if (normalizedAnswer === 'ACRE') {
      setIsUnlocked(true)
      triggerVictory()
    } else {
      setErrorCount(prev => prev + 1)
    }
  }

  const triggerVictory = () => {
    const duration = 3 * 1000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#8a0303', '#c5a059'],
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#8a0303', '#c5a059'],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  return (
    <div className="min-h-screen bg-templar-stone flex flex-col items-center pt-32 pb-20 px-6">
      <div className="max-w-2xl w-full flex flex-col gap-8 items-center">

        <header className="text-center space-y-4">
          <h1 className="font-medieval text-templar-gold text-4xl sm:text-5xl drop-shadow-md">
            Enigma I
          </h1>
          <h2 className="font-medieval text-templar-parchment/80 text-xl tracking-widest uppercase">
            O Último Bastião
          </h2>
        </header>

        <div className="w-full border-l-2 border-templar-red bg-black/20 p-6 italic text-templar-parchment/70 text-center text-sm sm:text-base mt-4 shadow-inner">
          <p>A chave para desvendar este segredo repousa na origem de tudo.
            <br />
            Lembre-se de quantos cavaleiros juraram proteger os caminhos primeir, fundando a Ordem do Templo.</p>
        </div>

        <div className="w-full bg-black/40 border border-templar-gold/10 rounded-sm p-5 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-templar-gold/30 to-transparent" />
          <p className="font-body text-lg sm:text-xl text-templar-parchment leading-relaxed text-justify break-words tracking-wide">
            Odr j sxrj mx unejwcn n j nbynajwlj orwju wj Cnaaj Bjwcj. Mni jwxb jwcnb mx lxvnçx mx Bnldux GRE, vrwqjb vdajuqjb lnmnajv jx lnalx vdvnudlx, vjaljwmx x orv mn dvj naj mn zdjbn mdinwcxb jwxb. Bxk vnd bxux vjwlqjmx mn bjwpdn, xb Cnvyujarxb pdjamjajv bndb ducrvxb bnpanmxb jwcnb mx orv. Zdnv bxd nd?
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
                O bastião de <strong>Acre</strong> caiu, mas o seu Priorado avança.
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
