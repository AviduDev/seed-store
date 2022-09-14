import styles from "../styles/HowItWorks.module.css";
import { useState } from "react";

export default function HowItWorks(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className={styles.main}>
      <div className={styles.ctn}
        style={{
          width: "100%",
          marginBottom: "2vw",
          lineHeight: "15px",
          borderBottom: "2px solid #252525",
          borderRadius: "15px",
        }}
      >
        <button className={styles.qst}
          style={{
            width: "100%",
            position: "relative",
            textAlign: "left",
            padding: "3vw",
            border: "none",
            background: "transparent",
            outline: "none",
            cursor: "pointer",
            fontFamily: "archivo",
            fontWeight: "900",
            fontSize: "3vh",
            backgroundColor: "#D0FF85",
            color: "#006400",
            borderRadius: "15px",
          }}
          onClick={toggle}
          type="button"
        >
          <h3>{props.title}</h3>
        </button>
        <div className={styles.ans}
          style={{ 
            display: isShowing ? "block" : "none", 
            padding: "3vw",
            fontFamily: "archivo",
            fontWeight: "800",
            fontSize: "2.5vh",
            backgroundColor: "#006400",
            color: "#D0FF85",
            borderRadius: "15px",
        }}
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
      </div>
    </div>
  );
}
