import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-darkBlue text-zinc-50 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contato</h2>
            <p className="text-zinc-400">
              Av. Antônio C. Costa ,793 - Bela Vista - Osasco - SP
            </p>
            <p className="text-zinc-400">
              (11) 3699-0011 / 11 3682-6681
            </p>
            <p className="text-zinc-400">
              Windsor.atendimento@gmail.com
            </p>
          </div>
        </div>
        <div className="block justify-center mt-6">
          <p className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} Windsor School of language. Todos os direitos reservados.
          </p>
          <div className="mt-4 text-zinc-400 text-sm">
            desenvolvido por 
            <Link 
              href="https://aleksanderpalamar.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline ml-2">
              Aleksander Palamar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}