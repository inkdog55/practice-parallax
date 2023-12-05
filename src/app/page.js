import { prefix } from "../../config/config";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section
        className={`${styles.scene} ${styles.one}`}
        style={{ backgroundImage: `url(${prefix}/img/heic0910e.jpg)` }}
      >
        <header>
          <h1>Lorem ipsum dolor sit amet.</h1> Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Totam suscipit sint ab beatae nihi
        </header>
      </section>
      <section
        className={`${styles.scene} ${styles.two}`}
        style={{ backgroundImage: `url(${prefix}/img/heic1501a.jpg)` }}
      >
        <header>
          <h1>Lorem ipsum dolor sit amet.</h1> Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Totam suscipit sint ab beatae nihi
        </header>
      </section>
      <section
        className={`${styles.scene} ${styles.three}`}
        style={{ backgroundImage: `url(${prefix}/img/heic1608a.jpg)` }}
      >
        <header>
          <h1>Lorem ipsum dolor sit amet.</h1> Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Totam suscipit sint ab beatae nihi
        </header>
      </section>
    </>
  );
}
