import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1662271407/pexels-lukas-942732-removebg-preview_vtf87q.png"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <div>
          <h1 className={styles.hero_h1}>ALL THE PLANTS AND SEEDS YOU NEED!</h1>
        </div>
        <div className={styles.btns}>
          <button className={styles.btn}>REACH US</button>
          <button className={styles.btn}>SHOP SEEDS</button>
        </div>
      </div>
      {/* <div className={styles.hero_p_ctn}>
        <p className={styles.hero_p}>
          shop <span className={styles.txt_hlt}>seeds</span> and dried{" "}
          <span className={styles.txt_hlt}>parts</span> such as{" "}
          <span className={styles.txt_hlt}>roots</span>,{" "}
          <span className={styles.txt_hlt}>leaves</span>,{" "}
          <span className={styles.txt_hlt}>fruits</span> of
          <span className={styles.txt_hlt}>Vegetables</span>,{" "}
          <span className={styles.txt_hlt}>flowers</span>, and home use{" "}
          <span className={styles.txt_hlt}>medicine</span> plants.
        </p>
      </div> */}
    </div>
  );
}
