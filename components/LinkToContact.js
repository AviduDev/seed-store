import styles from "../styles/LinkToContact.module.css";
import Link from "next/link";

export default function LinkToContact() {
  return (
    <div className={styles.main}>
      <div className={styles.ctn}>
        <h2 className={styles.ttl}>
          cannot find what you are loooking for? else?
        </h2>
        <Link href={"/contact"}>
          <button className={styles.btn}>reach us</button>
        </Link>
      </div>
    </div>
  );
}
