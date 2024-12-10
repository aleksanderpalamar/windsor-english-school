import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cardData = [
  [
    {
      title: 'Windsor',
      level: 'Basic I, II',
      description: 'O aluno aprende a comunicar-se com situações do dia a dia progressivamente. Incorpora a gramática automaticamente com exercícios orais, escritos e auditivos.'
    },
    {
      title: 'Windsor',
      level: 'Intermediário I, II',
      description: 'O aluno reforça a aprendizagem comunicativa e auditiva, conhecendo textos literários de grandes escritores espanhóis e latino americanos, adquirindo novas estruturas orais e escritas com situações de acordo com a realidade.'
    },
    {
      title: 'Windsor',
      level: 'Avançado I, II',
      description: 'Nesta etapa, o aluno além de aprimorar a pronúncia dos diálogos do básico I e II e do intermediário I e II, aumenta seu vocabulário com a linguagem escrita com temas de autores espanhóis e de latino americanos. Aprende a comunicar-se com situações reais que se produzem na rua, incorporando as estruturas gramaticais com exercícios e atividades dos novos elementos.'
    }
  ],
]

export default function CourseSpanish() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Cursos de Espanhol</h1>
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-20">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Espanhol para Adultos</h2>
          {cardData[0].map((item, index) => (
            <Card key={index} className="mb-4 overflow-hidden border-none rounded-xl">
              <CardHeader className="relative bg-softYellow flex flex-col">
                <div className="absolute right-0 top-0 w-[128px] h-[128px] bg-warmYellow rounded-full -translate-y-1/4 translate-x-1/4 hidden lg:block" />
                <CardTitle className="relative text-vibrantRed">{item.title}</CardTitle>
                <CardDescription className="relative ml-auto">{item.level}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-2">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}