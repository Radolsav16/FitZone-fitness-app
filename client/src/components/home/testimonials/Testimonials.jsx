import '../../../../css/testimonials.css'
import { useTestmonials } from '../../../api/testimonialApi'
import {Link} from 'react-router'

export default function Testimonials(){
  const { testimonials} = useTestmonials()
    return(
        <>
         <section className="testimonials">
      <h2 className="testimonial-title">What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t) => (
          <Link to={`/fitzone/profile/${t.author?._id}`}  key={t._id}>
          <div className="testimonial-card">
            <img src={t.author?.imageUrl} alt={t.author?.name} className="testimonial-image" />
            <p className="testimonial-quote">"{t.testimonial}"</p>
            <h3 className="testimonial-name">{t.author?.name}</h3>
          </div>
          </Link>
        ))}
      </div>
    </section>
        
        </>
    )
}