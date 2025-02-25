import { Link } from 'react-router-dom'
import styles from '../Blog.module.css'


export default function Card(){
    return(
        <>
            <div className={styles["card"]}>
    <div className={styles["card__header"]}>
      <img
        src="https://th.bing.com/th/id/OIP.GdKcwSiy3_z4Y9dCCJM8ugHaE7?rs=1&pid=ImgDetMain"
        alt="card__image"
        className={styles["card__image"]}
      />
    </div>
    <div className={styles["card__body"]}>
      <span className = {styles["tag tag-blue"]}>Technology</span>
      <h4>What's new in 2022 Tech</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque
        quidem!
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
          <small>2h ago</small>
        </div>
        <Link to={"/details"} className='view-details-btn'>View Details</Link>
      </div>
    </div>
  </div>
        </>
    )
}