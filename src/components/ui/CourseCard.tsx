import { asset, uiLabels } from '../../data/landingData'
import type { Course } from '../../types'
import { LevelIcon, StarIcon } from './Icons'

export function CourseCard({ course }: { course: Course }) {
  return <article className={`a course course-card-${course.thumbnail}`} style={{ left: course.left, top: course.top }}>
    <img className="thumb" src={asset(course.thumbnail)} alt={course.title} width="342" height="196" />
    <h3 className="ctitle">{course.title}</h3>
    <div className="rating">{course.rating} <StarIcon /></div>
    <div className="by">by <a href="#creator">{course.creator}</a></div>
    <div className="level"><LevelIcon /><span>{course.level}</span></div>
    <img className="cav" src={asset(course.avatarImage)} width="134" height="42" alt={uiLabels.avatarAlt} />
    <div className="price">{course.price}<small>{uiLabels.lifetime}</small></div>
  </article>
}
