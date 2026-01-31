import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Envelope } from './components/Envelope'
import { Letter } from './components/Letter'
import westCoastBg from './assets/west_coast_bg.png'
import paperBg from './assets/paper.png'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    const audio = new Audio('/audio/rustle.mp3')
    audio.volume = 0.4
    audio.play().catch(e => console.log('Audio playback refused:', e))
  }

  return (
    <main className="relative w-full h-screen bg-[#FDFCF5] overflow-hidden flex items-center justify-center perspective-1000">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${westCoastBg})` }} 
      />
      
      {/* Global Grain/Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0 mix-blend-multiply"
        style={{ backgroundImage: `url(${paperBg})`, backgroundSize: '200px' }} 
      />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <Envelope key="envelope" onOpen={handleOpen} />
        ) : (
          <Letter key="letter" />
        )}
      </AnimatePresence>
    </main>
  )
}
