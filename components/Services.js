import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <div>
      <h2>WHAT YOU GET</h2>
      <div className={styles.srv_ctn}>
        <div className={styles.srv_ttl}>
          <h3 className={styles.title}>SEEDS</h3>
        </div>
        <div className={styles.srv_p}>
          <p>
            variety of seeds from different categories with high germination
            percentage. Some seeds may restricted import in to your country
          </p>
        </div>
      </div>

      <div className={styles.srv_ctn}>
        <div className={styles.srv_ttl}>
          <h3 className={styles.title}>fruits</h3>
        </div>
        <div className={styles.srv_p}>
          <p>
            variety of seeds from different categories with high germination
            percentage. Some seeds may restricted import in to your country
          </p>
        </div>
      </div>

      <div className={styles.srv_ctn}>
        <div className={styles.srv_ttl}>
          <h3 className={styles.title}>roots</h3>
        </div>
        <div className={styles.srv_p}>
          <p>
            variety of seeds from different categories with high germination
            percentage. Some seeds may restricted import in to your country
          </p>
        </div>
      </div>

      <div className={styles.srv_ctn}>
        <div className={styles.srv_ttl}>
          <h3 className={styles.title}>leave</h3>
        </div>
        <div className={styles.srv_p}>
          <p>
            variety of seeds from different categories with high germination
            percentage. Some seeds may restricted import in to your country
          </p>
        </div>
      </div>
    </div>
  );
}
