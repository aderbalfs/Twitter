import { House, Bell, EnvelopeSimple } from 'phosphor-react'
import logo from '../../assets/logo-twitter.svg'
import manBlack from '../../assets/man-black.png'
import styles from './header.module.scss'

export function Header() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.topbar}>
        <nav>
          <ul>
            <li><House size={24} /> Home</li>
            <li><Bell size={24} /> Notifications</li>
            <li><EnvelopeSimple size={24} /> Messages</li>
          </ul>
        </nav>
        <img src={logo} alt="" />
        <div className={styles.profileNav}>
          <input type="text" placeholder='Search on twitter'/>
          <img src={manBlack} alt="" />
          <button>Tweet</button>
        </div>
      </div>
    </header>
    <div className={styles.banner}>
      <h1>Aderbal Ferreira</h1>
    </div>
    </>
  )
}