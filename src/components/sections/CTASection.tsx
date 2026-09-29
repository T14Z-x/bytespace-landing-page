import { asset, landingCopy, uiLabels } from '../../data/landingData'
import { Button } from '../ui/Button'
import { Br } from '../ui/Br'

export function CTASection() {
  return <section className="sec ctasec">
    <div className="stage" style={{ height: 488, backgroundImage: `url(${asset('28')})` }}>
      <h2 className="a h2c white" style={{ left: 0, width: 1440, top: 84 }}><Br text={landingCopy.ctaTitle} /></h2>
      <p className="a pc white" style={{ left: 0, width: 1440, top: 232 }}><Br text={landingCopy.ctaDescription} /></p>
      <Button className="a btn" style={{ left: 634, top: 358, width: 172, height: 46 }}>{uiLabels.joinCreator}</Button>
    </div>
  </section>
}
