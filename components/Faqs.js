import styles from "../styles/Faqs.module.css";
import { htmlFormHTMLAttributes } from "react";

export default function Faqs() {
  return (
    <div>
      <section className={styles.ac_container}>
   
        <div>
          <input id="ac-2" name="accordion-1" type="radio" />
          <label htmlFor="ac-2" className={styles.lbl}><h3  className={styles.ttl}>How we work</h3></label>
          <article className={styles.ac_large}>
            <p className={styles.p}>
              Like you, I used to think the world was this great place where
              everybody lived by the same standards I did, then some kid with a
              nail showed me I was living in his world, a world where chaos
              rules not order, a world where righteousness is not rewarded.
              That's Cesar's world, and if you're not willing to play by his
              rules, then you're gonna have to pay the price.{" "}
            </p>
          </article>
        </div>
        <div>
          <input id="ac-3" name="accordion-1" type="radio" />
          <label htmlFor="ac-3" className={styles.lbl}><h3 className={styles.ttl}>References</h3></label>
          <article className={styles.ac_large}>
            <p>
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              htmlFor murder. After the avalanche, it took us a week to climb
              out. Now, I don't know exactly when we turned on each other, but I
              know that seven of us survived the slide... and only five made it
              out. Now we took an oath, that I'm breaking now. We said we'd say
              it was the snow that killed the other two, but it wasn't. Nature
              is lethal but it doesn't hold a candle to man.{" "}
            </p>
          </article>
        </div>
        <div>
          <input id="ac-4" name="accordion-1" type="radio" />
          <label htmlFor="ac-4" className={styles.lbl}><h3 className={styles.ttl}>Contact us</h3></label>
          <article className={styles.ac_large}>
            <p>
              You see? It's curious. Ted did figure it out - time travel. And
              when we get back, we gonna tell everyone. How it's possible, how
              it's done, what the dangers are. But then why fifty years in the
              future when the spacecraft encounters a black hole does the
              computer call it an 'unknown entry event'? Why don't they know? If
              they don't know, that means we never told anyone. And if we never
              told anyone it means we never made it back. Hence we die down
              here. Just as a matter of deductive logic.{" "}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
