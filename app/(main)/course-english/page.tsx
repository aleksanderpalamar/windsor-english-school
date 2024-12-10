import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cardData = [
  [
    {
      title: 'Windsor',
      level: 'Basic I, II, III',
      description: 'Aulas dinâmicas aprendendo a ouvir e falar corretamente, com o curso voltado à conversação, aulas de gramática, pronúncia e audiovisuais.'
    },
    {
      title: 'Windsor',
      level: 'Pre-Intermediário',
      description: 'Aulas dinâmicas aprendendo a ouvir e falar corretamente, com o curso voltado à conversação, aulas de gramática, pronúncia e audiovisuais.'
    },
    {
      title: 'Windsor',
      level: 'Intermediário',
      description: 'O professor com sua larga experiência, estende aos alunos a oportunidade da fluência verbal, com atividades comunicativas que encorajam a criatividade.'
    },
    {
      title: 'Windsor',
      level: 'Avançado',
      description: 'É o estágio onde o aluno já desenvolvido na língua, falando e escrevendo em inglês fará sua reciclagem gramatical, conversação, e o aprimoramento do vocabulário para prestar exames de Cambridge (England).'
    }
  ],
  [
    {
      title: 'Windsor Kids',
      level: 'A partir de 7 anos',
      description: 'Crianças a partir de 7 anos, são alfabetizadas em inglês de maneira descontraida, cantando, brincando e desenvolvendo sua nova língua com rotinas do dia a dia. As noções básicas da gramática são desenvolvidas de uma forma dinâmica e o vocabulário ensinado numa linguagem adequada à idade.'
    },
    {
      title: 'Windsor Teens',
      level: 'A partir de 12 anos à 15 anos',
      description: 'As aulas para adolescentes, são ministradas com a experiência de professores que passam a falar a linguagem deles, dando maior ênfase as 4 habilidades: conversação, escrita, compreensão e leitura.'
    }
  ]
]

export default function CourseEnglish() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Cursos de Inglês</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Inglês para Adultos</h2>
          {cardData[0].map((item, index) => (
            <Card key={index} className="mb-4 overflow-hidden border-none rounded-xl">
              <CardHeader className="relative bg-softBlue flex flex-col">
              <div className="absolute right-0 top-0 w-[128px] h-[128px] bg-primaryBlue rounded-full -translate-y-1/4 translate-x-1/4 hidden lg:block" />
                <CardTitle className="relative">{item.title}</CardTitle>
                <CardDescription className="ml-auto relative">{item.level}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-2">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Inglês para Crianças</h2>
          {cardData[1].map((item, index) => (
            <Card key={index} className="mb-4 overflow-hidden border-none rounded-xl">
              <CardHeader className="relative bg-softYellow flex flex-col">
              <div className="absolute right-0 top-0 w-[128px] h-[128px] bg-warmYellow rounded-full -translate-y-1/4 translate-x-1/4 hidden lg:block" />
                <CardTitle className="relative">{item.title}</CardTitle>
                <CardDescription className="relative ml-auto">{item.level}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 p-2">                
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
          <Card className="mb-4 overflow-hidden border-none rounded-xl">
            <CardContent className="bg-softGreen p-2">
              <p className="text-sm font-bold text-darkGreen">
                KIDS, TEENS BASIC I, II E III, PRÉ-INTERMEDIATE, INTERMEDIATE, UPPER INTERMEDIATE E ADVANCED
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}