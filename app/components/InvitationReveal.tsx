'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Countdown from './Countdown'
import { Sparkles, Calendar, MapPin } from 'lucide-react'

interface InvitationRevealProps {
    onOpen: () => void
}

export default function InvitationReveal({ onOpen }: InvitationRevealProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
        onOpen()
    }

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="button-container"
                        exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <button
                            onClick={handleOpen}
                            className="relative px-8 py-4 bg-slate-900/80 border border-yellow-500/50 text-yellow-100 rounded-full text-lg font-playfair tracking-widest hover:bg-yellow-500/10 hover:scale-105 transition-all duration-300 group shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] backdrop-blur-sm"
                        >
                            <span className="flex items-center gap-2">
                                Open Invitation <Sparkles className="w-4 h-4 text-yellow-500 group-hover:rotate-12 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="invitation-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="max-w-3xl w-full"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-2"
                        >
                            <h2 className="text-yellow-500/80 text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-4 mt-12">Эрхэм хүндэт 'xxx' -ны хамт олон та бүхнийг хэзээ ч мартагдашгүй 'шинэ жилийн цэнгүүнд хүрэлцэн ирэхийг урьж байна.'</h2>
                            <h1 className="text-4xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 mb-1 drop-shadow-lg">
                                Welcome 2026
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <Countdown />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="mt-12 flex flex-col md:flex-row gap-2 justify-center items-center text-slate-300"
                        >
                            <div className="flex flex-col items-center gap-2 p-4 bg-slate-800/30 rounded-xl border border-white/5 backdrop-blur-sm w-48">
                                <Calendar className="w-6 h-6 text-yellow-500 mb-2" />
                                <span className="font-sans text-sm tracking-wide">Dec 31, 2025</span>
                                <span className="font-playfair text-lg text-white">20:00 PM</span>
                            </div>

                            <div className="h-px w-12 bg-white/10 md:hidden" />

                            <div className="flex flex-col items-center gap-2 p-4 bg-slate-800/30 rounded-xl border border-white/5 backdrop-blur-sm w-48">
                                <MapPin className="w-6 h-6 text-yellow-500 mb-2" />
                                <span className="font-sans text-sm tracking-wide">KFC</span>
                                <span className="font-playfair text-lg text-white">Улаанбаатар,MN</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 1 }}
                            className="mt-8 text-slate-400 text-sm font-sans tracking-wide"
                        >
                            <p>Dress Code: Black Tie & Sparkle</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
