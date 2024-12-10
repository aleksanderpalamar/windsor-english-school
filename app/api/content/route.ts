import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/utils/authOptions'

const prisma = new PrismaClient()

export async function GET() {
  const contents = await prisma.content.findMany({
    include: {
      user: true
    }
  })
  return NextResponse.json(contents)
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { page, title, content } = body

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const newContent = await prisma.content.create({
      data: {
        page,
        title,
        content,
        userId: user.id,
        updatedAt: new Date()
      },
      include: {
        user: true
      }
    })

    return NextResponse.json(newContent)
  } catch (error) {
    console.error('Failed to create content:', error)
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    )
  }
}

