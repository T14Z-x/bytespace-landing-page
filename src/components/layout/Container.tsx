import type { CSSProperties, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Container({ children, className = '', style }: ContainerProps) {
  return <div className={`stage ${className}`.trim()} style={style}>{children}</div>
}
