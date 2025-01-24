import Link from "next/link";
import Image from "next/image";
import shopShrooms from "../public/images/banner3.jpg";
import styles from "./shop.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.bsWrap}>
        <Image
          src={shopShrooms}
          alt="Skillet Mushrooms"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.h1}>
        Welcome to our Shopping Central! - First time buyers, set up an account
        with "Sign-Up".
      </h1>
      <br></br>
      <h1 className={styles.h1}>Returning customers: Just "Sign-In". (Shop away!)</h1>
      <h2 className={styles.h2}>
        <Link href="/shopping/signin">Sign-In</Link>
      </h2>
      <h2 className={styles.h2}>
        <Link href="/shopping/signup">Sign-Up</Link>
      </h2>
    </>
  );
}
