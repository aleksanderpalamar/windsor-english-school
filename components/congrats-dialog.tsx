import { LevelSeal } from "./level-seal"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"

interface CongratsDialogProps {
  isOpen: boolean
  level: string
  score: number
  onClose: () => void
}

export function CongratsDialog({ isOpen, onClose, level, score }: CongratsDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Parabéns!</DialogTitle>
          <DialogDescription>
            Você completou o teste de nivelamento.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <LevelSeal level={level} />
          <p className="text-center">
            Seu nível de inglês é <strong>{level}</strong>
          </p>
          <p className="text-center">
            Sua pontuação: <strong>{score.toFixed(2)}%</strong>
          </p>
        </div>
        <Button 
          onClick={onClose} 
          className="w-fit bg-vibrantRed hover:bg-softRed focus:ring-2 focus:ring-offset-2 focus:ring-vibrantRed text-white">
            Fechar
        </Button>
      </DialogContent>
    </Dialog>
  )
}