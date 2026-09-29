import { asset, landingCopy, testimonials } from '../../data/landingData'
import { Br } from '../ui/Br'

export function TestimonialsSection() {
  return <section className="sec testisec">
    <div className="stage" style={{ height: 784, backgroundImage: `url(${asset('29')})` }}>
      <h2 className="a h2l black testimonial-title" style={{ left: 118, top: 114, width: 600 }}><Br text={landingCopy.testimonialTitle} /></h2>
      <p className="a pr testimonial-description" style={{ left: 738, top: 74 }}><Br text={landingCopy.testimonialDescription} /></p>
      {testimonials.map((testimonial) => <figure key={testimonial.name} className={`a tcard testimonial-card-${testimonial.image}`} style={{ left: testimonial.left, top: 291, height: testimonial.height }}>
        <img src={asset(testimonial.image)} width="80" height="80" alt={testimonial.name} />
        <figcaption><b>{testimonial.name}</b><span>{testimonial.role}</span></figcaption>
        <blockquote style={{ marginTop: testimonial.marginTop }}><Br text={`"${testimonial.quote}"`} /></blockquote>
      </figure>)}
    </div>
  </section>
}
