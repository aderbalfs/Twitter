import styles from './sidebar.module.scss'
import { DotsThreeOutlineVertical } from 'phosphor-react'

export function Sidebar() {
  return (
    <section className={styles.sidebarContainer}>
      <div className={styles.content}>
        <ul>
          <li className={styles.active}>
            <span>Tweets</span> 
            <strong>3931</strong>
          </li>
          <li>
            <span> Followings</span> 
            <strong>654</strong>
          </li>
          <li>
            <span>Followers</span> 
            <strong>387</strong>
          </li>
          <li>
            <span>Favorites</span> 
            <strong>265</strong>
          </li>
          <li>
            <span>Lists</span> 
            <strong>8</strong>
          </li>
          <li>
            <span>Moments</span> 
            <strong>0</strong>
          </li>
        </ul>
      </div>
      <div className={styles.actions}>
        <button type="button">Follow</button>
        <DotsThreeOutlineVertical size={20}/>
      </div>
    </section>
  )
}