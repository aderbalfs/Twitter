import styles from "./tweets.module.scss";
import perfilImg from "../../assets/perfil.png";
import manBlack from '../../assets/man-black.png'
import { Timeline } from "../Timeline/index";
import {
  MapPin,
  Link,
  Clock,
  Baby,
  User,
  Image,
  X,
  UserList,
} from "phosphor-react";

export function Tweets() {
  return (
    <main className={styles.wrapperContainer}>
      <aside className={styles.profile}>
        <img src={manBlack} alt="Aderbal Ferreira" />
        <div className={styles.informations}>
          <h1>Aderbal Ferreira</h1>
          <span>@aderbalfs</span>
        </div>
        <p>
          Web, Design & Rock'n roll Partner/UI Designer @spade_be Musician in
          @dashboxmusic
        </p>
        <ul>
          <li>
            <MapPin size={20} /> Itabaiana, Paraíba
          </li>
          <li className={styles.link}>
            <Link color="#657786" size={20} /> exibit.be
          </li>
          <li>
            <Clock size={20} /> Joined June 2007
          </li>
          <li>
            <Baby size={20} /> Born the 20th of June 1978
          </li>
        </ul>

        <section className={styles.widgetsContainer}>
          <div className={styles.followers}>
            <strong>
              <User color="#657786" size={20} /> 73 followers that you know
            </strong>

            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className={styles.photos}>
            <strong>
              <Image color="#657786" size={20} /> 266 Photos and videos
            </strong>

            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
      </aside>
        <Timeline />
      <aside className={styles.widgets}>
        <div className={styles.widgetFollow}>
          <div className={styles.title}>
            <strong>Who to follow</strong>
            <a href="">Refresh</a>
            <a href="">View all</a>
          </div>
          <ul>
            <li>
              <div className={styles.info}>
                <img src={perfilImg} alt="" />
                <section>
                  <h1>
                    Spade <p> @spade_be</p>
                  </h1>
                  <button className={styles.btnFollow}>Follow</button>
                </section>
                <a href="">
                  <X size={10} color="#9c9c9a" />
                </a>
              </div>
            </li>
            <li>
              <div className={styles.info}>
                <img src={perfilImg} alt="" />
                <section className={styles.medioName}>
                  <h1>
                    Julien Brasseur <p> @brasul</p>
                  </h1>
                  <button className={styles.btnFollow}>Follow</button>
                </section>
                <a href="">
                  <X size={10} color="#9c9c9a" />
                </a>
              </div>
            </li>
            <li>
              <div className={styles.info}>
                <img src={perfilImg} alt="" />
                <section className={styles.bigName}>
                  <h1>
                    Denis Balencourt <p> @quinze</p>
                  </h1>
                  <button className={styles.btnFollow}>Follow</button>
                </section>
                <a href="">
                  <X size={10} color="#9c9c9a" />
                </a>
              </div>
            </li>
          </ul>
          <div className={styles.moreFollow}>
            <a href="">
              {" "}
              <UserList size={18} />
            </a>
            <p>Find friends</p>
          </div>
        </div>
      </aside>
    </main>
  );
}
