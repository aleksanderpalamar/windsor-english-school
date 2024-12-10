import Image from "next/image"

export const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden bg-blue-100 relative rounded-3xl">
            <Image
              src="/assets/illustrations.png"
              alt="About"
              width={500}
              height={600}
              className="absolute z-10 ml-auto rounded-lg h-full w-full object-cover"
              priority
              quality={100}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
            <p className="mb-4 text-justify">
              A Windsor Idiomas, estabelece como método no ensino de inglês o aprendizado de uma forma dinâmica, com alto índice de exclusividade, já que todo aluno desde o seu primeiro dia de curso estará ouvindo, escrevendo, lendo e falando somente em inglês.

              A experiência não é por acaso, pois o curso é elaborado e executado por coordenadores de larga experiência internacional, especialmente na Inglaterra e nos Estados Unidos, onde a língua é ensinada de uma forma exemplar nas melhores escolas.

              A Windsor Idiomas, orgulha-se de não ser apenas mais uma escola no ensino de inglês, mas de ser diferente com métodos próprios, diversificado, dinâmico e instrutivo.
            </p>
            <p className="font-bold text-sm mb-2">Como referência, a Windsor Idiomas, oferece:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Floating Courses Card */}
              <div className="bg-softYellow rounded-xl p-3 shadow-lg z-20">
                <ul className="text-xs text-gray-600">
                  <li className="flex items-center mt-2">
                    Material importado
                  </li>
                  <li className="flex items-center mt-2">
                    Salas com máximo de 12 alunos
                  </li>
                  <li className="flex items-center mt-2">
                    Aulas de conversação
                  </li>
                  <li className="flex items-center mt-2">
                    Gramática
                  </li>
                </ul>
              </div>

              {/* Floating Courses Card */}
              <div className="bg-softGreen rounded-xl p-3 shadow-lg z-20">
                <ul className="text-xs text-gray-600">
                  <li className="flex items-center mt-2">
                    Aulas de pronúncia
                  </li>
                  <li className="flex items-center mt-2">
                    Aulas audiovisuais
                  </li>
                  <li className="flex items-center mt-2">
                    Professores com experiência
                  </li>
                  <li className="flex items-center mt-2">
                    Help sessions - plantão de dúvidas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}