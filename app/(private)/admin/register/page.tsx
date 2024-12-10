'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        router.push('/admin/login')
      } else {
        const data = await response.json()
        setError(data.error || 'Falha ao registrar. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao registrar:', error)
      setError('Ocorreu um erro. Tente novamente mais tarde.')
    }
  }

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h1 className="text-3xl font-bold mb-4">Registrar</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
          Registrar
        </button>
      </form>
      <p className="mt-4">
        Já tem uma conta? <Link href="/admin/login" className="text-primary hover:underline">Faça login</Link>
      </p>
    </div>
  )
}

