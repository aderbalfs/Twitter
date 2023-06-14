import {
  ThumbsUp,
  ThumbsDown,
  ChatCircle,
  Repeat,
  Heart,
  EnvelopeSimple,
} from "phosphor-react";
import profileImg from "../../assets/man-profile.png";

import styles from "./timeline.module.scss";

export function Timeline() {
  return (
    <section className={styles.container}>
      <nav>
        <div className={styles.navigation}>
          <a href="">Tweets</a>
          <a href="">Tweets and replice</a>
          <a href="">Medias</a>
        </div>

        <div className={styles.likes}>
          <a href="">
            <ThumbsUp size={20} />
          </a>
          <a href="">
            <ThumbsDown size={20} />
          </a>
        </div>
      </nav>

      <ul className={styles.tweets}>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={profileImg} alt="" />
          <div className={styles.info}>
            <section className={styles.title}>
              <strong>Benoît Vrins</strong> 
              <span>@Exibt</span>
              <p>26 janv</p>
            </section>
            <p>
              app @itsmeDigitalID désinstallée puis réinstallé, comment faire
              pour retrouver son compte? Ma banque dit mon token existe déjà #UX
            </p>

            <div className={styles.actions}>
              <a href="">
                <ChatCircle size={20}/> 3
              </a>
              <a href="">
                <Repeat size={20}/> 2
              </a>
              <a href="">
                <Heart size={20}/> 12
              </a>
              <a href="">
                <EnvelopeSimple size={20}/>{" "}
              </a>
            </div>
          </div>
        </li>
        
      </ul>
    </section>
  );
}
