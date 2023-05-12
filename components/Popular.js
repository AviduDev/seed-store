import Image from "next/image";
import styles from "../styles/Popular.module.css";
import Link from "next/link";

export default function Popular() {
  return (
    <div className={styles.main}>
      <div className={styles.ctn}>
        <div className={styles.img}>
          <Image
            className={styles.ctimg}
            src="https://res.cloudinary.com/avidu/image/upload/v1683872543/pexels-kenneth-3020635_v1ciij.jpg"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <Link className={styles.lin} href="/categories/medicines">
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
            className={styles.ctimg}
            src="https://res.cloudinary.com/avidu/image/upload/v1683872543/pexels-pixabay-53494_auit1o.jpg"
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
            className={styles.ctimg}
            src="https://res.cloudinary.com/avidu/image/upload/v1683872543/pexels-rov-camato-699963_iqlvfj.jpg"
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
            className={styles.ctimg}
            src="https://res.cloudinary.com/avidu/image/upload/v1683872543/pexels-sharon-hoo-6349701_qeato7.jpg"
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
