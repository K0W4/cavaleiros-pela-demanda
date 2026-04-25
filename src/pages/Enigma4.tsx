import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { triggerVictory } from '../utils/confetti'

export default function Enigma4() {
  const { answer } = useParams()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    if (answer) {
      const normalized = answer
        .trim()
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')

      if (normalized === 'CHIPRE') {
        setIsUnlocked(true)
        triggerVictory(true)
      }
    }
  }, [answer])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-templar-stone flex flex-col items-center pt-32 pb-20 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(138,3,3,0.1) 0%, rgba(26,26,26,1) 80%)',
        }}
      />

      <div className="max-w-2xl w-full flex flex-col gap-8 items-center relative z-10 text-center">
        <header className="space-y-4">
          <h1 className="font-medieval text-templar-red text-4xl sm:text-6xl drop-shadow-[0_0_15px_rgba(138,3,3,0.8)]">
            Enigma IV
          </h1>
          <h2 className="font-medieval text-templar-gold/90 text-xl tracking-widest uppercase">
            A Harmonia da Cadência
          </h2>
        </header>

        {!isUnlocked ? (
          <>
            <div className="w-full border border-templar-gold/20 bg-black/40 p-8 rounded-sm shadow-2xl space-y-6">
              <p className="font-body text-xl text-templar-parchment leading-relaxed italic">
                "A fúria do mundo deu lugar ao sussurro do oceano. O Guardião não usa mais palavras; ele fala através da calmaria da viagem. Ouça o que as águas revelam e encontre a verdade."              </p>

              <div className="w-12 h-px bg-templar-gold/30 mx-auto" />

              <p className="font-body text-sm text-templar-parchment/60">
                A resposta é o próprio destino.
                <br />
                Com a resposta em mente, guie seus passos e reescreva o endereço por onde o seu caminho agora passa.              </p>

              <div className="pt-4">
                <button
                  onClick={toggleAudio}
                  className={`group relative p-6 rounded-full border-2 transition-all duration-500 ${
                    isPlaying
                      ? 'border-templar-red bg-templar-red/10 animate-pulse shadow-[0_0_20px_rgba(138,3,3,0.4)]'
                      : 'border-templar-gold/40 hover:border-templar-gold bg-black/20'
                  }`}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-templar-red">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-templar-gold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  )}
                </button>
                <p className="mt-4 font-medieval text-[10px] tracking-[0.3em] uppercase text-templar-gold/40">
                  {isPlaying ? "As onds embalam a verdade..." : "Ouvir Melodia"}
                </p>
              </div>
            </div>

            <audio ref={audioRef} src="/enigma4-audio.mp3" loop />
          </>
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
              <p>Tira um print desta tela e envia ao Coordenador do Projeto para registar a tua vitória final!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
