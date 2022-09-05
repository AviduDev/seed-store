import Image from "next/image";
import styles from "../styles/Popular.module.css";

export default function Popular() {
  return (
    <div className={styles.main}>
      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <div className={styles.ttl}>
          <h3>medicines</h3>
        </div>
      </div>

      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <div className={styles.ttl}>
          <h3>medicines</h3>
        </div>
      </div>

      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <div className={styles.ttl}>
          <h3>medicines</h3>
        </div>
      </div>

      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <div className={styles.ttl}>
          <h3>medicines</h3>
        </div>
      </div>
    </div>
  );
}
