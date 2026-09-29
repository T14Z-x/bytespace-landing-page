import { asset, heroCards, landingCopy, uiLabels } from '../../data/landingData'
import { Button } from '../ui/Button'
import { HappyStudentsCard } from '../ui/HappyStudentsCard'
import { SearchIcon } from '../ui/Icons'
import { Br } from '../ui/Br'
import { Navbar } from '../layout/Navbar'

export function HeroSection() {
  return <section className="sec hero" id="top">
    <div className="stage" style={{ backgroundImage: `url(${asset('01')})` }}>
      <Navbar />
      <h1 className="a h-hero" style={{ left: 0, width: 1440, top: 170 }}><Br text={landingCopy.heroTitle} /></h1>
      <p className="a hero-sub" style={{ left: 0, width: 1440, top: 376 }}>{landingCopy.heroSubtitle}</p>
      <label className="a search-box" style={{ left: 430, top: 462 }}>
        <span style={{ marginLeft: '27px', display: 'flex' }}><SearchIcon /></span>
        <input type="text" placeholder={uiLabels.searchPlaceholder} aria-label={uiLabels.searchPlaceholder} />
      </label>
      <Button className="a btn" style={{ left: 907, top: 462, width: 103, height: 46 }}>{uiLabels.search}</Button>
      <div className="a card" style={{ left: 403, top: 638, width: 210, height: 72 }}>
        <div style={{ position: 'absolute', left: 17, top: 15, fontSize: '15.5px', lineHeight: '22px', color: '#242528' }}>{heroCards.design}</div>
        <div style={{ position: 'absolute', left: 17, top: 38, fontSize: '11px', lineHeight: '16px', color: '#82868E', whiteSpace: 'nowrap' }}>{heroCards.designMeta}</div>
      </div>
      <div className="a card" style={{ left: 841, top: 650, width: 234, height: 133, borderRadius: '18px' }}>
        <div style={{ position: 'absolute', left: 17, top: 18, fontSize: '13px', lineHeight: '18px', color: '#242528' }}>{heroCards.progress}</div>
        <div style={{ position: 'absolute', left: 17, top: 38, font: '500 52px/64px Poppins,sans-serif', color: '#242528' }}>{heroCards.progressValue}</div>
        <div style={{ position: 'absolute', left: 17, top: 105, width: 200, height: 9, borderRadius: '5px', background: '#F1F2F3' }}><div style={{ width: 112, height: 9, borderRadius: '5px', background: '#D4FB20' }} /></div>
      </div>
      <HappyStudentsCard style={{ left: 327, top: 836, width: 260, height: 123 }} imageTop={60} />
    </div>
  </section>
}
