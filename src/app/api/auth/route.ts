import { NextRequest, NextResponse } from 'next/server'
import { User } from '@/types/User'

const users: User[] = [
  {
    username: 'jgomez',
    password: 'password123',
    fullName: 'Juan Gómez',
    email: 'jgomez@skytech.com',
  },
  {
    username: 'mlopez',
    password: 'pass456',
    fullName: 'María López',
    email: 'mlopez@skytech.com',
  },
  {
    username: 'cruiz',
    password: 'sky789',
    fullName: 'Carlos Ruiz',
    email: 'cruiz@skytech.com',
  },
]

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  if (!username || !password) {
    return NextResponse.json(
      { valid: false, message: 'Username and password are required' },
      { status: 400 }
    )
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  )

  if (!user) {
    return NextResponse.json(
      { valid: false, message: 'Invalid credentials' },
      { status: 401 }
    )
  }

  const { password: _, ...publicUser } = user
  return NextResponse.json({ valid: true, user: publicUser })
}