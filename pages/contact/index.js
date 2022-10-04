import styles from "../../styles/contact.module.css";

export default function Contact() {
  return (
    <div>
      <main className={styles.main}>
        <h1>reach us</h1>
        <div className={styles.para}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt magni
            tenetur laborum neque optio earum fuga maiores facere, quam
            expedita?
          </p>
        </div>
        <div>
          {/* <form action="https://formsubmit.co/your@email.com" method="POST">
                <input type="text" name="name" required>
                <input type="email" name="email" required>
                <button type="submit">Send</button>
            </form> */}
          <form
            className={styles.frm}
            action="https://formsubmit.co/avidu97@gmail.com"
            method="post"
          >
            <input type="text" name="name" required placeholder="Your Name*" />{" "}
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your E-mail*"
              required
            />{" "}
            <br />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Phone"
            />{" "}
            <br />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
            /> <br />{" "}
            <textarea name="message" required placeholder="Your Message*"></textarea>
            <br />
            <button type="submit">Send</button>
            <input
              type="hidden"
              name="_next"
              value="https://seed-store-red.vercel.app/"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </div>
      </main>
    </div>
  );
}
