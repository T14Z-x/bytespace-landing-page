interface BrandProps {
  alt: string
}

export function Brand({ alt }: BrandProps) {
  return <img className="a" style={{ left: 118, top: 66 }} src="/images/reference-33.jpg" width="178" height="44" alt={alt} />
}
