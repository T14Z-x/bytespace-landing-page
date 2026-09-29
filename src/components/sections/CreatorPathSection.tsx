import { asset, landingCopy, pathChecks, stats } from '../../data/landingData'
import { Br } from '../ui/Br'
import { CheckIcon } from '../ui/Icons'
import { HappyStudentsCard } from '../ui/HappyStudentsCard'

export function CreatorPathSection() {
  return <section className="sec pathsec" id="creator">
    <div className="stage" style={{ height: 1460, backgroundImage: `url(${asset('26')})` }}>
      <h2 className="a h2l path-title" style={{ left: 120, top: 196, width: 600 }}><Br text={landingCopy.pathTitle} /></h2>
      <p className="a pl path-description" style={{ left: 121, top: 340 }}><Br text={landingCopy.pathDescription} /></p>
      <div className="a stats" style={{ left: 120, top: 525 }}><div><b>{stats.students}</b><span>{stats.studentLabel}</span></div><div><b>{stats.courses}</b><span>{stats.courseLabel}</span></div><div><b>{stats.creators}</b><span>{stats.creatorLabel}</span></div></div>
      <h2 className="a h2l creator-title" style={{ left: 741, top: 849, width: 620 }}><Br text={landingCopy.creatorTitle} /></h2>
      <p className="a pl creator-description" style={{ left: 741, top: 994 }}><b>{stats.productName}</b> <Br text={landingCopy.creatorDescription} /></p>
      <ul className="a checks" style={{ left: 743, top: 1086 }}>{pathChecks.map((check) => <li key={check}><CheckIcon />{check}</li>)}</ul>
      <HappyStudentsCard style={{ left: 403, top: 1155, width: 260, height: 125 }} imageTop={62} />
    </div>
  </section>
}
