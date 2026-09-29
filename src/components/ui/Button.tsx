import type { ButtonProps } from '../../types'

export function Button({ children, className = '', ...props }: ButtonProps) {
  return <button className={`btn ${className}`.trim()} {...props}>{children}</button>
}
