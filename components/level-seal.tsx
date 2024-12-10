interface LevelSealProps {
  level: string
}

export function LevelSeal({ level }: LevelSealProps) {
  return (
    <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold capitalize">
      {level}
    </div>
  )
}