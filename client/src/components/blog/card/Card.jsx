import { Link } from 'react-router-dom'
import styles from '../Blog.module.css'
import { DateConverter } from '../../../utils/DateConverter'


export default function Card({
    post
}){
    return(
        <>
            <div className={styles["card"]}>
    <div className={styles["card__header"]}>
      <img
        src={post.image}
        alt="card__image"
        className={styles["card__image"]}
      />
    </div>
    <div className={styles["card__body"]}>
      <span className = {styles["tag tag-blue"]}>{post.category}</span>
      <h4>{post.title}</h4>
      <p>
        {post.content}
      </p>
    </div>
    <div className={styles["card__footer"]}>
      <div className={styles["user"]}>
        <img
          src="https://i.pravatar.cc/40?img=1"
          alt="user__image"
          className={styles["user__image"]}
        />
        <div className={styles["user__info"]}>
          <h5>Jane Doe</h5>
          <small>{DateConverter(post.createdAt)}</small>
        </div>
      </div>
    </div>
    <Link to={`/fitzone/blog-details/${post._id}`} className="inline-block m-4 text-primary font-semibold hover:underline"> Read More →</Link>
  </div>
        </>
    )
}