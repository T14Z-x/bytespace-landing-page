export interface Course {
  title: string
  left: number
  top: number
  thumbnail: string
  creator: string
  rating: string
  level: string
  avatarImage: string
  price: string
}

export interface Category {
  name: string
  image: string
  left: number
}

export interface Testimonial {
  name: string
  role: string
  image: string
  left: number
  height: number
  marginTop: number
  quote: string
}

export interface LogoAsset {
  image: string
  left: number
  width: number
}

export interface FooterColumn {
  left: number
  links: string[]
}

import type { CSSProperties } from 'react'

export interface HappyStudentsCardProps {
  style: CSSProperties
  imageTop: number
}

export interface FooterColumnProps {
  left: number
  links: string[]
}

export type AuthMode = 'login' | 'signup'
