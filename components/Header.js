/* eslint-disable react/jsx-no-duplicate-props */
import Link from "next/link";
import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <nav className={styles.main}>
      <Link href={"/"}>
        <a>
          <div>
            <p>
            ⌂
            </p>
          </div>
        </a>
      </Link>
      <Link href={"/products"}>
        <a>Seeds</a>
      </Link>

    
      <div className="nav-price snipcart-checkout">
        <div>🛒</div>
        <div className="snipcart-total-price">$0.00</div>
      </div>
    </nav>
  );
}
