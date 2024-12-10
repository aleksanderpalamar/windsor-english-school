import { QuizForm } from "@/components/quiz-form";

export default function Quiz() {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-4">Quiz</h1>
      <p className="text-xl text-zinc-600">Teste os seus conhecimentos</p>
      <QuizForm />
    </div>
  )
}