import Image from "next/image";
import styles from "../styles/Popular.module.css";
import Link from "next/link";

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
        <Link href="/categories/medicines">
          <a>
            <div className={styles.ttl}>
              <h3>medicines</h3>
            </div>
          </a>
        </Link>
      </div>

      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <Link href="/categories/foods">
          <a>
            <div className={styles.ttl}>
              <h3>foods</h3>
            </div>
          </a>
        </Link>
      </div>

      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <Link href="/categories/flowers">
          <a>
            <div className={styles.ttl}>
              <h3>flowers</h3>
            </div>
          </a>
        </Link>
      </div>

      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <Link href="/categories/others">
          <a>
            <div className={styles.ttl}>
              <h3>others</h3>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
