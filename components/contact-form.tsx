"use client"

import { Send } from 'lucide-react'
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormValues } from "../schemas/contact-form-schema"
import { useState } from "react"

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      
      // Adiciona campos básicos
      formData.append('nome', data.nome)
      formData.append('email', data.email)
      formData.append('telefone', data.telefone)
      formData.append('celular', data.celular)
      formData.append('assunto', data.assunto)
      formData.append('mensagem', data.mensagem)
      
      // Adiciona arquivo se existir
      if (data.attachment) {
        formData.append('attachment', data.attachment)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Falha ao enviar formulário')
      }

      reset()
      alert('Mensagem enviada com sucesso!')
    } catch (error) {
      console.error('Erro:', error)
      alert('Falha ao enviar mensagem. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <Input
          {...register("nome")}
          type="text"
          id="nome"
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.nome && (
          <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          {...register("email")}
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <Input
            {...register("telefone")}
            type="tel"
            id="telefone"
            className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors.telefone && (
            <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="celular" className="block text-sm font-medium text-gray-700">
            Celular
          </label>
          <Input
            {...register("celular")}
            type="tel"
            id="celular"
            className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors.celular && (
            <p className="mt-1 text-sm text-red-600">{errors.celular.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="assunto" className="block text-sm font-medium text-gray-700">
          Assunto
        </label>
        <Input
          {...register("assunto")}
          type="text"
          id="assunto"
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.assunto && (
          <p className="mt-1 text-sm text-red-600">{errors.assunto.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <Textarea
          {...register("mensagem")}
          id="mensagem"
          rows={4}
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-none"
        />
        {errors.mensagem && (
          <p className="mt-1 text-sm text-red-600">{errors.mensagem.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">
          Anexo (opcional)
        </label>
        <Input
          {...register("attachment")}
          type="file"
          id="attachment"
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {errors.attachment && (
          <p className="mt-1 text-sm text-red-600">
            {errors.attachment.message}
          </p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit ml-auto flex justify-center items-center px-4 py-2 
                border border-transparent rounded-md shadow-sm text-sm font-medium 
                text-white bg-blue-500 hover:bg-blue-400 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          <Send className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  )
}