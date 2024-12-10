'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Loader } from "lucide-react"

interface Content {
  id: string
  page: string
  title: string
  content: string
  userId: string
  createdAt: string
  updatedAt: string
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [contents, setContents] = useState([])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])


  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetch('/api/content')
        const data = await response.json()
        setContents(data)
      } catch (error) {
        console.error('Failed to fetch contents:', error)
      }
    }
    fetchContents()
  }, [])

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">
          <Loader className="animate-spin mr-2" />
          Carregando...
        </h1>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-8">
        Olá, {session?.user?.email}! Bem-vindo ao seu painel de controle.
      </p>
      <ul>
        {contents.map((content: Content) => (
          <li key={content.id} className="mb-2">
            <span className="font-bold">{content.page}:</span> {content.title}
          </li>
        ))}
      </ul>
      <button
        onClick={() => router.push('/admin/content/new')}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark mt-4"
      >
        Adicionar Novo Conteúdo
      </button>
    </div>
  )
}