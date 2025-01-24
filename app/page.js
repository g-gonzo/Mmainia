import Link from "next/link";
import Image from "next/image";
import LpageShrooms from "./public/images/lpage1.webp";
import styles from "./rootStyle.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.lpWrap}>
        <Image
          src={LpageShrooms}
          alt="Many Mushrooms"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div id="landingpagetext">
        <h1 className={styles.landingpagetext}>Welcome to Mushroom Mania !</h1>
        <br></br>
        <h1>
          <Link className={styles.landingpagetext} href="/home">
            Click here! - And follow the rabbit down the hole... 2 Mushroom Mainia!
          </Link>
        </h1>
        <br></br>
        <h2 className={styles.landingpagetext}>
          Where spores, fungi, and weird un-explainable stuff collect. Join us to share
          knowledge & wisdom about gourmet eatable fungus.{" "}
        </h2>
      </div>
      <br></br>
    </>
  );
}
