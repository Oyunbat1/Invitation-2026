'use client'

import { useState } from 'react'
import ParticleBackground from './components/ParticleBackground'
import InvitationReveal from './components/InvitationReveal'

export default function Home() {
  const [accelerateSnow, setAccelerateSnow] = useState(false)

  const handleOpenInvitation = () => {
    setAccelerateSnow(true)
    // Optional: Reset acceleration after some time if desired, 
    // but for "festive atmosphere" keeping it faster or just slightly faster might be nice.
    // The prompt says "Snow gently accelerates", implies a transition.
    // My component handles it by changing duration. 

    // We could set a timeout to stop acceleration if we wanted it to be temporary "burst",
    // but "accelerates" usually implies a state change.
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground accelerate={accelerateSnow} />
      <InvitationReveal onOpen={handleOpenInvitation} />
    </main>
  )
}
