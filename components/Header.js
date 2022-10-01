/* eslint-disable react/jsx-no-duplicate-props */
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav_ctn}>
        <div className={styles.main}>
          <div>
            <Link href={"/"}>
              <a>
                <div>
                  <p>⌂HOME</p>
                </div>
              </a>
            </Link>
          </div>

          <div>
            <Link href={"/products"}>
              <a>Seeds</a>
            </Link>
          </div>

          <div>
            <Link href={"/contact"}>
              <a>contact us</a>
            </Link>
          </div>
        </div>
        
          <div className="nav-price snipcart-checkout">
            {/* <div>cart</div> */}
            <div className="snipcart-total-price">$0.00</div>
          </div>
  
      </nav>
    </div>
  );
}
