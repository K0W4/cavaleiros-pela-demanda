import { useState, type SyntheticEvent } from 'react'
import { triggerVictory } from '../utils/confetti'

export function useEnigma(expectedAnswer: string, isEpic = false) {
  const [answer, setAnswer] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [errorCount, setErrorCount] = useState(0)

  const checkAnswer = (e: SyntheticEvent | { preventDefault: () => void }) => {
    e.preventDefault()

    const normalizedAnswer = answer
      .trim()
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    if (normalizedAnswer === expectedAnswer) {
      setIsUnlocked(true)
      triggerVictory(isEpic)
    } else {
      setErrorCount((prev) => prev + 1)
    }
  }

  return {
    answer,
    setAnswer,
    isUnlocked,
    errorCount,
    checkAnswer,
  }
}
