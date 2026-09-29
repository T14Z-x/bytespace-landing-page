import { asset, logos, uiLabels } from '../../data/landingData'

export function PartnersSection() {
  return <section className="sec logos">
    <div className="stage" style={{ height: 201 }}>
      {logos.map((logo) => <img key={logo.image} className="a" style={{ left: logo.left, top: 72 }} width={logo.width} height="56" src={asset(logo.image)} alt={uiLabels.logoAlt} />)}
    </div>
  </section>
}
