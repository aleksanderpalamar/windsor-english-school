import Image from "next/image"

interface PhotoFrameProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const PhotoFrame = ({ 
  src, 
  alt, 
  width = 400, 
  height = 500, 
  className
}: PhotoFrameProps) => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-2xl opacity-20"
        style={{
          background: 'radial-gradient(circle at bottom right, #FFC0CB, transparent 70%)',
          transform: 'translate(10%, 10%)',
        }}
      />
      <div
        className={`relative overflow-hidden ${className}`}
        style={{
          width,
          height,
          borderRadius: '24px',
          clipPath: 'path("M 0 0 L 100% 0 L 100% 85% C 95% 85%, 90% 100%, 85% 100% L 0 100% L 0 0")',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
        />
      </div>
    </div>
  )
}