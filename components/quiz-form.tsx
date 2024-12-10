'use client'

import { FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { LevelSeal } from "./level-seal"
import { CongratsDialog } from "./congrats-dialog"

interface Question {
  id: number
  text: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "That's David's friend. His name __________ John.",
    options: ["is", "to", "it", "are"]
  },
  {
    id: 2,
    text: "What _________ these colors in English?",
    options: ["are", "to", "it", "is"]
  },
  {
    id: 3,
    text: "I ________ not from the United States.",
    options: ["is", "to be", "am", "are"]
  },
  {
    id: 4,
    text: "Karina is _________ Asia.",
    options: ["in", "to", "on", "from"]
  },
  {
    id: 5,
    text: "Maria isn't Brazilian. She's _________ Mexico.",
    options: ["in", "of", "from", "to"]
  },
  {
    id: 6,
    text: "The chair is _________ the sofa.",
    options: ["to", "in", "from", "of"]
  },
  {
    id: 7,
    text: "My credit cards are _________ my wallet.",
    options: ["from", "in", "to", "on"]
  },
  {
    id: 8,
    text: "My parents _________ downtown.",
    options: ["live", "lives"]
  },
  {
    id: 9,
    text: "My mother _________ glasses.",
    options: ["wear", "wears"]
  },
  {
    id: 10,
    text: "I don't _________ downtown.",
    options: ["live", "lives", "living"]
  },
  {
    id: 11,
    text: "What time _________ it in Chicago now?",
    options: ["is", "to", "it", "are"]
  },
  {
    id: 12,
    text: "What _________ they doing?",
    options: ["are", "to do", "am", "is"]
  },
  {
    id: 13,
    text: "Where _________ he live?",
    options: ["is", "to", "do", "does"]
  },
  {
    id: 14,
    text: "I have breakfast _________ 7:45.",
    options: ["at", "in", "on", "to"]
  },
  {
    id: 15,
    text: "I don't work _________ Saturdays.",
    options: ["in", "on", "at", "to"]
  }
]

export const QuizForm = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [level, setLevel] = useState('')
  const [score, setScore] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const correctAnswers = questions.filter(question => answers[question.id] === question.options[0])
    const newScore = (correctAnswers.length / questions.length) * 100

    let newLevel
    if (newScore >= 95) newLevel = 'C2'
    else if (newScore >= 80) newLevel = 'C1'
    else if (newScore >= 65) newLevel = 'B2'
    else if (newScore >= 50) newLevel = 'B1'
    else if (newScore >= 35) newLevel = 'A2'
    else newLevel = 'A1'

    setLevel(newLevel)
    setScore(newScore)
    setIsDialogOpen(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card className="relative">
          {level && (
            <div >
              <LevelSeal level={level} />
              <Card className="absolute top-0 right-0">
                <CardHeader>
                  <CardTitle>Legenda:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h2 className="mt-8 text-zinc-500">Here&apos;s a breakdown of the scoring:</h2>
                  <p className="text-zinc-500 text-sm">0-34%: A1</p>
                  <p className="text-zinc-500 text-sm">35-49%: A2</p>
                  <p className="text-zinc-500 text-sm">50-64%: B1</p>
                  <p className="text-zinc-500 text-sm">65-79%: B2</p>
                  <p className="text-zinc-500 text-sm">80-94%: C1</p>
                  <p className="text-zinc-500 text-sm">95-100%: C2</p>
                </CardContent>
              </Card>
              <LevelSeal level={level} />
            </div>
          )}
          <CardHeader>
            <CardTitle>Teste - Basic I</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="space-y-2">
                <Label className="text-base">
                  {question.id}. {question.text}
                </Label>
                <RadioGroup
                  onValueChange={(value) =>
                    setAnswers(prev => ({ ...prev, [question.id]: value }))
                  }
                  value={answers[question.id]}
                  className="flex flex-col space-y-1"
                >
                  {question.options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q${question.id}-${option}`} />
                      <Label htmlFor={`q${question.id}-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-fit bg-blue-500 hover:bg-blue-400 text-white">
              Validar teste
            </Button>
          </CardFooter>
        </Card>
      </form>
      {level && (
        <CongratsDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          level={level}
          score={score}
        />
      )}
    </>
  )
}