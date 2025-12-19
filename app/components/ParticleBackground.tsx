'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ParticleBackgroundProps {
    accelerate: boolean
}

export default function ParticleBackground({ accelerate }: ParticleBackgroundProps) {
    const [snowflakes, setSnowflakes] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([])
    const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

    useEffect(() => {
        // Generate snowflakes
        const snow = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 10,
        }))
        setSnowflakes(snow)

        // Generate stars
        const starArray = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 2,
        }))
        setStars(starArray)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Stars */}
            {stars.map((star) => (
                <motion.div
                    key={`star-${star.id}`}
                    className="absolute rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Snowflakes */}
            {snowflakes.map((flake) => (
                <motion.div
                    key={`snow-${flake.id}`}
                    className="absolute bg-white/80 rounded-full blur-[1px]"
                    style={{
                        left: `${flake.x}%`,
                        width: 3,
                        height: 3,
                    }}
                    initial={{ top: -10 }}
                    animate={{
                        top: '120%',
                    }}
                    transition={{
                        duration: accelerate ? flake.duration / 5 : flake.duration, // Accelerate when triggered
                        repeat: Infinity,
                        delay: flake.delay,
                        ease: "linear",
                        // When accelerating, we want immediate effect, but framer motion handles prop updates smoothly usually.
                        // However, changing duration mid-animation can be tricky.
                        // A simpler approach for acceleration might be needed if this feels janky.
                    }}
                />
            ))}
        </div>
    )
}
