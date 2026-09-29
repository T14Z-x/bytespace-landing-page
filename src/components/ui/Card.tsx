import type { CardProps } from '../../types'

export function Card({ children, className = '', style }: CardProps) {
  return <div className={`card ${className}`.trim()} style={style}>{children}</div>
}
