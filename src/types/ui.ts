import type { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export interface CardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export interface ModalProps {
  title: string
  closeLabel: string
  children: ReactNode
  onClose: () => void
}
