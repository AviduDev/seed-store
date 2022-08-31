import Link from "next/link";


export default function Header() {
    return (
        <nav>
            <Link href={"/"}>
                <a>
                    <div>
                        <p>
                            PLANTS<span>☘</span>
                        </p>
                    </div>
                </a>
            </Link>
            <button className="nav-price snipcart-checkout">
                <span>🛒</span>
                <p className="snipcart-total-price">$0.00</p>
            </button>
        </nav>
    )
}