import Link from "next/link";
import Image from "next/image";
import BspageShrooms from "../public/images/banner1.jpg";
import styles from "./bsStyle.module.css";

export default function Page() {
    return (
      <>
      <div className={styles.bsWrap}>
        <Image
          src={BspageShrooms}
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
      <h1 className={styles.h1}>Welcome to Buy-'R'-Stuff! (Because we really do sell stuff!)</h1>
      <h2 className={styles.h2}>
      <Link href="/buystuff/growing">Equipment 2 Grow Stuff</Link>
      </h2>
      <h2 className={styles.h2}>
      <Link href="/buystuff/lab">Equipment 4 Laboratory</Link>
      </h2>
      </>
    );
  }