import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { Envelope } from './components/Envelope'
import { Letter } from './components/Letter'
import westCoastBg from './assets/west_coast_bg.png'
import paperBg from './assets/paper.png'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const bgAudioRef = useRef<HTMLAudioElement | null>(null)

  const handleOpen = () => {
    setIsOpen(true)
    if (isAudioEnabled) {
      const audio = new Audio('/audio/rustle.mp3')
      audio.volume = 0.2
      audio.play().catch(e => console.log('Audio playback refused:', e))
    }
  }

  useEffect(() => {
    if (!bgAudioRef.current) {
      bgAudioRef.current = new Audio('/audio/seagulls_waves.mp3')
      bgAudioRef.current.loop = true
      bgAudioRef.current.volume = 0.2
    }

    const audio = bgAudioRef.current

    if (isOpen && isAudioEnabled) {
      audio.play().catch(e => console.log('Audio playback refused:', e))
    } else {
      audio.pause()
    }
  }, [isOpen, isAudioEnabled])

  return (
    <main className="relative w-full h-screen bg-[#FDFCF5] overflow-hidden flex items-center justify-center perspective-1000">
      {/* Audio Toggle */}
      <button 
        onClick={() => setIsAudioEnabled(!isAudioEnabled)}
        className="absolute top-4 right-4 z-50 p-3 text-stone-600/80 hover:text-stone-800 transition-colors bg-white/50 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md hover:bg-white/80 cursor-pointer"
        aria-label={isAudioEnabled ? 'Mute audio' : 'Enable audio'}
      >
        {isAudioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

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
