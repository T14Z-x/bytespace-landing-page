import { footerColumns, landingCopy, uiLabels } from '../../data/landingData'
import type { FooterColumnProps } from '../../types'
import { Brand } from './Brand'
import { Button } from '../ui/Button'

function FooterColumn({ left, links }: FooterColumnProps) {
  return <ul className="a fcol" style={{ left, top: 111 }}>
    {links.map((label) => <li key={label}><a href="#top">{label}</a></li>)}
  </ul>
}

export function Footer() {
  return <footer className="sec foot" id="footer">
    <div className="stage" style={{ height: 525 }}>
      <Brand alt={uiLabels.byteSpaceAlt} />
      <p className="a fnews" style={{ left: 120, top: 125 }}>{landingCopy.newsletterDescription}</p>
      <input className="a femail" style={{ left: 120, top: 191 }} type="email" placeholder={uiLabels.emailPlaceholder} aria-label={uiLabels.emailLabel} />
      <Button className="a btn" style={{ left: 520, top: 191, width: 104, height: 46 }}>{uiLabels.search}</Button>
      <p className="a fsmall" style={{ left: 120, top: 267 }}>{landingCopy.newsletterConsent}</p>
      {footerColumns.map((column) => <FooterColumn key={column.left} {...column} />)}
      <div className="a footer-rule" style={{ left: 120, top: 434, width: 1200, height: 1, background: '#DCDDE0' }} />
      <p className="a fcopy" style={{ left: 120, top: 458 }}>{uiLabels.copyright}</p>
      <div className="a flegal" style={{ right: 120, top: 458 }}>
        <a href="#footer">{uiLabels.privacy}</a><a href="#footer">{uiLabels.terms}</a><a href="#footer">{uiLabels.cookies}</a>
      </div>
    </div>
  </footer>
}

