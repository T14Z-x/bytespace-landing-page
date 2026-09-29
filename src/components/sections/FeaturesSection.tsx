import { useState } from 'react'
import { asset, categories, chipRows, courses, landingCopy, uiLabels } from '../../data/landingData'
import { Category, Course } from '../../types'
import { Button } from '../ui/Button'
import { CourseCard } from '../ui/CourseCard'
import { Br } from '../ui/Br'

function CategoryCard({ category }: { category: Category }) {
  return <a className={`a cat category-card category-card-${category.image}`} href="#courses" style={{ left: category.left, top: 1608 }}>
    <img src={asset(category.image)} width="64" height="64" alt={category.name} />
    <span>{category.name}</span>
  </a>
}

function TopicRow({ row, activeTopic, onSelect, rowIndex }: { row: string[]; activeTopic: string; onSelect: (topic: string) => void; rowIndex: number }) {
  return <div className={`chiprow topic-row-${rowIndex}`} style={{ top: 295 + rowIndex * 64 }}>
    {row.map((label) => <Button key={label} className={`chip${activeTopic === label ? ' on' : ''}`} onClick={() => onSelect(label)}>{label}</Button>)}
    {rowIndex === 2 && <a className="more" href="#courses">{uiLabels.more}</a>}
  </div>
}

export function FeaturesSection() {
  const [activeTopic, setActiveTopic] = useState('Featured')
  const visibleCourses: Course[] = activeTopic === 'Featured' ? courses : courses.filter((course) => course.title.toLowerCase().includes(activeTopic.toLowerCase()) || activeTopic === course.level)

  return <section className="sec discover" id="courses">
    <div className="stage" style={{ height: 1895 }}>
      <h2 className="a h2c features-section-title" style={{ left: 0, width: 1440, top: 73 }}><Br text={landingCopy.featuresTitle} /></h2>
      <p className="a pc features-section-description" style={{ left: 0, width: 1440, top: 196 }}><Br text={landingCopy.courseDescription} /></p>
      {chipRows.map((row, index) => <TopicRow key={`row-${index}`} row={row} rowIndex={index} activeTopic={activeTopic} onSelect={setActiveTopic} />)}
      {visibleCourses.map((course) => <CourseCard key={course.title} course={course} />)}
      <h2 className="a h2c category-section-title" style={{ left: 0, width: 1440, top: 1423, fontSize: 35, lineHeight: '42px' }}>{landingCopy.categoryTitle}</h2>
      <p className="a pc category-section-description" style={{ left: 0, width: 1440, top: 1483 }}><Br text={landingCopy.categoryDescription} /></p>
      <div className="category-grid-mobile">{categories.map((category) => <CategoryCard key={category.name} category={category} />)}</div>
    </div>
  </section>
}
