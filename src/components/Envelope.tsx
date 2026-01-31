import { motion } from 'framer-motion'
import sealImg from '../assets/seal.png'

interface EnvelopeProps {
  onOpen: () => void
}

export const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <motion.div 
      className="relative z-10 w-[90%] max-w-lg aspect-[1.6] flex items-center justify-center cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(4px)",
        transition: { duration: 0.6, ease: "easeInOut" } 
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={onOpen}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-[#F2F0E4] shadow-2xl rounded-sm overflow-hidden border-stone-200">
          
          {/* Inner lining / Letter hint */}
          <div className="absolute inset-2 bg-stone-100 shadow-inner" />

          {/* Side Folds - Left */}
          <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#EAE7D6] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]" 
               style={{ 
                 clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                 background: 'linear-gradient(135deg, #F2F0E4 0%, #E6E3D1 100%)'
                }} />
          
          {/* Side Folds - Right */}
          <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#EAE7D6] z-10 shadow-[-2px_0_5px_rgba(0,0,0,0.05)]" 
               style={{ 
                 clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                 background: 'linear-gradient(-135deg, #F2F0E4 0%, #E6E3D1 100%)'
               }} />

          {/* Bottom Fold */}
          <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-[#EBE7D5] z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]"
               style={{ 
                 clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                 background: 'linear-gradient(to top, #EBE7D5 0%, #F5F3E9 100%)'
               }} />

          {/* Top Flap (Closed) */}
          <motion.div 
             className="absolute top-0 left-0 right-0 h-[50%] z-30 origin-top drop-shadow-lg"
             style={{ 
               clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
               background: 'linear-gradient(to bottom, #EBE7D5 50%, #F5F3E9 100%)'
             }}
             initial={{ rotateX: 0 }}
             exit={{ rotateX: 180, zIndex: 0, transition: { duration: 0.4 } }}
          >
             {/* Subtle crease details */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/5 pointer-events-none" />
          </motion.div>
      </div>

      {/* Wax Seal - Centered relative to the container */}
      <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            src={sealImg} 
            alt="Sigill" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
          />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-16 w-74 md:w-100 text-stone-600 font-sans tracking-[0.2em] text-sm text-center uppercase"
      >    
        Roliga nyheter – klicka på brevet för att öppna
      </motion.div>
    </motion.div>
  )
}
