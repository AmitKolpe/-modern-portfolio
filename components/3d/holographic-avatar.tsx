"use client"

import { motion } from "framer-motion"

export default function HolographicAvatar() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Holographic Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-purple-400/40"
      />

      {/* Avatar Container */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute inset-4 rounded-full glass-morphism flex items-center justify-center overflow-hidden"
      >
        {/* Replace /avatar.jpg with your actual photo */}
        <div className="w-full h-full bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full flex items-center justify-center">
          <img
            src="/avatar.jpg"
            alt="Amit Kolpe"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = "none"
              const fallback = target.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = "flex"
            }}
          />
          <div className="text-4xl hidden">👨‍💻</div>
        </div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl animate-pulse" />
    </div>
  )
}
