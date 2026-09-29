import type { InputProps } from '../../types'

export function Input({ label, ...props }: InputProps) {
  return <label>{label}<input {...props} /></label>
}
