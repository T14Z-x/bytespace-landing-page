import { Footer } from '../components/layout/Footer'
import { CTASection } from '../components/sections/CTASection'
import { CreatorPathSection } from '../components/sections/CreatorPathSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { HeroSection } from '../components/sections/HeroSection'
import { PartnersSection } from '../components/sections/PartnersSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'

export function LandingPage() {
  return <div className="page"><HeroSection /><PartnersSection /><FeaturesSection /><CreatorPathSection /><CTASection /><TestimonialsSection /><Footer /></div>
}
