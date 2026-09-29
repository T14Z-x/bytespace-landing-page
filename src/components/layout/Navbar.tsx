import { navigationLabels } from '../../data/landingData'

export function Navbar() {
  return <nav>
    <a className="a nav on" style={{ left: 615, top: 47 }} href="#top">{navigationLabels.home}</a>
    <a className="a nav" style={{ left: 682, top: 51 }} href="#courses">{navigationLabels.courses}</a>
    <a className="a nav" style={{ left: 764, top: 51 }} href="#creator">{navigationLabels.creators}</a>
    <a className="a nav" style={{ left: 1146, top: 51 }} href="#footer">{navigationLabels.signIn}</a>
    <a className="a nav" style={{ left: 1219, top: 51 }} href="#footer">{navigationLabels.joinUs}</a>
  </nav>
}
