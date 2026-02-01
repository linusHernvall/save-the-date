import { motion } from 'framer-motion'
import ringsImg from '../assets/rings.png'

export const Letter = () => {
  return (
    <motion.article 
      className="relative w-full max-w-xl h-auto min-h-[550px] aspect-[3/4] bg-[#FDFCF5] shadow-xl md:rounded-sm overflow-hidden flex flex-col items-center justify-center gap-6 py-12 px-6 mx-4"
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
    >
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('/src/assets/paper.png')] bg-[length:200px]" />



        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-0 mt-4 md:mt-8">
            <motion.p 
                className="font-sans text-stone-600 uppercase tracking-[0.25em] text-sm font-light mb-2 md:mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                Save the Date – vi ska gifta oss!
            </motion.p>

            <motion.div 
                className="w-8 h-[1px] bg-navy/20 mt-4 mb-4"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 2, duration: 1 }}
             />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-col items-center"
            >
                
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-navy leading-none">
                    Lisa Kristiansen
                </h1>
                <div className="my-2 md:my-4">
                    <img 
                        src={ringsImg} 
                        alt="Rings" 
                        className="w-16 h-16 md:w-24 md:h-24 object-contain opacity-90 mix-blend-multiply"
                    />
                </div>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-navy leading-none">
                    Linus Hernvall
                </h1>
            </motion.div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 mb-2 md:mb-8">
             <motion.div 
                className="w-8 h-[1px] bg-navy/20"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 2, duration: 1 }}
             />

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="text-center"
             >
                <p className="font-serif text-3xl md:text-4xl text-navy font-semibold tracking-wide mb-2">
                    29 Augusti 2026
                </p>
                <p className="font-sans text-stone-600 tracking-[0.2em] uppercase text-sm">
                    Klädesholmen, Tjörn
                </p>
             </motion.div>
        </div>

        <motion.p 
            className="relative z-10 max-w-md font-sans italic text-center text-stone-600 text-sm tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
        >
            Vi längtar efter att få fira vår dag med er! En formell inbjudan med alla detaljer skickas längre fram.
        </motion.p>
    </motion.article>
  )
}
