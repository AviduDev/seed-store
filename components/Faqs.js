import styles from "../styles/Faqs.module.css";

export default function faq() {
  return (
    <div className={styles.main}>
      <div className={styles.ctn}>
        <h3 className={styles.qst}>Question 1</h3>
        <p className={styles.ans}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim?
        </p>
      </div>
      <div className={styles.ctn}>
        <h3 className={styles.qst}>Question 2</h3>
        <p className={styles.ans}>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className={styles.ctn}>
        <h3 className={styles.qst}>Question 3</h3>
        <p className={styles.ans}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nobis
          unde. Harum!
        </p>
      </div>
      <div className={styles.ctn}>
        <h3 className={styles.qst}>Question 4</h3>
        <p className={styles.ans}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.ctn}>
        <h3 className={styles.qst}>Question 5</h3>
        <p className={styles.ans}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
          totam.
        </p>
      </div>
    </div>
  );
}
