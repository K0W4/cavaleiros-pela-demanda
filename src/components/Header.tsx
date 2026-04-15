import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Enigma {
  label: string
  releaseDate: Date
  href: string
}

function toBrasiliaDate(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
): Date {
  return new Date(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00-03:00`)
}

const ENIGMAS: Enigma[] = [
  { label: 'Enigma I',   releaseDate: toBrasiliaDate(2026, 4, 18, 10,  0), href: '/enigma-1' },
  { label: 'Enigma II',  releaseDate: toBrasiliaDate(2026, 4, 25,  8,  0), href: '/enigma-2' },
  { label: 'Enigma III', releaseDate: toBrasiliaDate(2026, 4, 25, 12, 30), href: '/enigma-3' },
  { label: 'Enigma IV',  releaseDate: toBrasiliaDate(2026, 4, 25, 15,  0), href: '/enigma-4' },
]

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block mb-0.5 ml-1 opacity-70"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Header() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>

    const syncServerTime = async () => {
      let offset = 0
      try {
        const response = await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' })
        const dateHeader = response.headers.get('date')

        if (dateHeader) {
          offset = new Date(dateHeader).getTime() - Date.now()
        }
      } catch (error) {
        console.warn("Falha ao sincronizar com o servidor.", error)
      }

      const updateTime = () => setCurrentTime(new Date(Date.now() + offset))
      updateTime()
      intervalId = setInterval(updateTime, 1000)
    }

    syncServerTime()

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-templar-gold/20 bg-templar-stone/90 backdrop-blur-md shadow-md">
      <nav className="w-full px-4 py-3 sm:px-8 sm:py-4 grid grid-cols-[1fr_auto_1fr] items-center gap-x-4">

        <Link
          to="/"
          className="font-medieval text-templar-gold text-[10px] sm:text-sm tracking-[0.2em] uppercase select-none justify-self-start hover:text-templar-parchment transition-colors duration-200"
        >
          Cavaleiros Pela Demanda
        </Link>

        <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-4">
          {ENIGMAS.map((enigma) => {
            const isUnlocked = currentTime ? currentTime >= enigma.releaseDate : false

            if (isUnlocked) {
              return (
                <li key={enigma.label}>
                  <Link
                    to={enigma.href}
                    className="relative font-medieval text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-templar-parchment px-2 py-1.5 sm:px-3 rounded transition-all duration-300 hover:text-white hover:bg-templar-red/80 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-templar-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {enigma.label}
                  </Link>
                </li>
              )
            }

            return (
              <li key={enigma.label}>
                <button
                  disabled
                  title={`${enigma.label} — ainda não liberado`}
                  className="font-medieval text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-templar-parchment/30 px-2 py-1.5 opacity-40 cursor-not-allowed select-none transition-opacity duration-300"
                >
                  {enigma.label}
                  <LockIcon />
                </button>
              </li>
            )
          })}
        </ul>

        <div className="justify-self-end">
          <img
            src="/logoDMRS.png"
            alt="Logo Grande Conselho DeMolay RS"
            className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

      </nav>
    </header>
  )
}