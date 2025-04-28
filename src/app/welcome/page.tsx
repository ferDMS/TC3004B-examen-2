'use client'

import { useContext } from 'react'
import { UserContext } from '@/context/UserContext'
import { UserPublic } from '@/types/User'

export default function WelcomePage() {
  const { user } = useContext(UserContext)

  const fullName = user?.fullName || 'Invitado'

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-20">
      <h1 className="text-6xl font-extrabold text-gray-900 text-center leading-tight">
        ¡Hola, {fullName}!<br />
        Bienvenido al portal de <span className="text-blue-600">SkyTech</span>.
      </h1>
      {/* Aquí irá el contenido principal de la página */}
    </main>
  )
}