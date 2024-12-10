'use client'

import { FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { LevelSeal } from "./level-seal"
import { CongratsDialog } from "./congrats-dialog"
import { cn } from "@/lib/utils"
import { questions } from "@/data/questions"

export const QuizForm = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [level, setLevel] = useState('')
  const [score, setScore] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  if (isDialogOpen) {
    return <CongratsDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} level={level} score={score} />
  }

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
                    <div key={option} className={cn(
                      `flex items-center space-x-2 bg-softBlue p-4 rounded-md`,
                      answers[question.id] === option && "text-vibrantRed"
                    )}>
                      <RadioGroupItem 
                        value={option} 
                        id={`q${question.id}-${option}`}
                        checked={answers[question.id] === option}
                        className={cn(
                          `w-4 h-4`,
                          answers[question.id] === option && "bg-vibrantRed"
                        )}
                      />
                      <Label htmlFor={`q${question.id}-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-fit bg-primaryBlue hover:bg-darkBlue text-white">
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