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
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('celular', data.celular)
      formData.append('subject', data.subject)
      formData.append('message', data.message)
      
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
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <Input
          {...register("name")}
          type="text"
          id="name"
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-vibrantRed">{errors.name.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-darkGray">
            Email
          </label>
          <Input
            {...register("email")}
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-vibrantRed">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-darkGray">
            Phone:
          </label>
          <Input
            {...register("phone")}
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-vibrantRed">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="celular" className="block text-sm font-medium text-darkGray">
            Celular:
          </label>
          <Input
            {...register("celular")}
            type="tel"
            id="celular"
            className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-vibrantRed">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-darkGray">
          Subject
        </label>
        <Input
          {...register("subject")}
          type="text"
          id="subject"
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-vibrantRed">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-darkGray">
          Message
        </label>
        <Textarea
          {...register("message")}
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-vibrantRed">{errors.message.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-darkGray">
          Attachment (optional)
        </label>
        <Input
          {...register("attachment")}
          type="file"
          id="attachment"
          className="mt-1 block w-full rounded-md bg-zinc-100 border-zinc-300 shadow-sm 
                focus:border-primaryBlue focus:ring focus:ring-primaryBlue focus:ring-opacity-50"
        />
        {errors.attachment && (
          <p className="mt-1 text-sm text-vibrantRed">
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
                text-white bg-primaryBlue hover:bg-darkBlue focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-primaryBlue
                disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          <Send className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  )
}