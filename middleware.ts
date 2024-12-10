import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define as rotas que devem ser protegidas
  const protectedPaths = ['/admin/dashboard', '/admin/content']
  const isPathProtected = protectedPaths.some((pp) => path.startsWith(pp))

  if (isPathProtected) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

    if (!token) {
      const url = new URL('/admin/login', request.url)
      url.searchParams.set('callbackUrl', encodeURI(request.url))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// Configurar os caminhos para os quais o middleware deve ser executado
export const config = {
  matcher: ['/admin/:path*']
}