import { happyStudents, asset } from '../../data/landingData'
import type { HappyStudentsCardProps } from '../../types'
import { StarIcon } from './Icons'

export function HappyStudentsCard({ style, imageTop }: HappyStudentsCardProps) {
  return <div className="a card" style={style}>
    <div style={{ position: 'absolute', left: 17, top: 15, fontSize: '15.5px', lineHeight: '22px', color: '#242528' }}>{happyStudents.title}</div>
    <div style={{ position: 'absolute', left: 17, top: 36, fontSize: '12px', lineHeight: '16px', color: '#242528' }}>
      {happyStudents.rating} <span style={{ color: '#82868E', fontSize: '11px' }}>{happyStudents.count}</span> <StarIcon color="#D4FB20" size={14} />
    </div>
    <img style={{ position: 'absolute', left: 15, top: imageTop }} width="238" height="54" src={asset('02')} alt={happyStudents.title} />
  </div>
}
