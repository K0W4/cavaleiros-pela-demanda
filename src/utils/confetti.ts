import confetti from 'canvas-confetti'

export function triggerVictory(isEpic = false) {
  const duration = (isEpic ? 5 : 3) * 1000
  const end = Date.now() + duration
  const colors = isEpic ? ['#8a0303', '#c5a059', '#ff4500', '#000000'] : ['#8a0303', '#c5a059']
  const particleCount = isEpic ? 8 : 5
  const spread = isEpic ? 80 : 55

  const frame = () => {
    confetti({
      particleCount,
      angle: 60,
      spread,
      origin: { x: 0 },
      colors,
    })
    confetti({
      particleCount,
      angle: 120,
      spread,
      origin: { x: 1 },
      colors,
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }
  
  frame()
}
