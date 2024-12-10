import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Verificar se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Usuário já existe' }, { status: 400 })
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10)

    // Criar novo usuário
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'Falha ao criar usuário' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Usuário criado com sucesso' }, { status: 201 })
  } catch (error) {
    console.error('Erro ao registrar usuário:', error)
    return NextResponse.json({ error: 'Falha ao registrar usuário' }, { status: 500 })
  }
}
