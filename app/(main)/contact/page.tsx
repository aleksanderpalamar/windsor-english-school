import { ContactForm } from "@/components/contact-form";
import { FacebookIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <MailIcon size={100} className="text-blue-500" />
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <Link 
            href="https://www.facebook.com/pages/Windsor-Idiomas/242835865771306?fref=ts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center"
          >
            <FacebookIcon className="text-white w-8 h-8 bg-indigo-500 rounded-full p-1" />
          </Link>
        </div>
        <div className="bg-gray-50 p-4">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}