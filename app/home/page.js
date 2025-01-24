import Link from "next/link";
import Image from "next/image";
import HmpageShrooms from "../public/images/lpage2.jpg";
import styles from "../rootStyle.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.lpWrap}>
        <Image
          src={HmpageShrooms}
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
      <div className={styles.landingpagetext}>
      <br></br>
      <h1>Welcome to our Home Page!</h1>
      <br></br>
      <h1>To find what you are looking for just select from above:</h1>
      <br></br>
      <h1>(FAQ, Equip2GrowStuff, Equip4Laboratory, Shopping Central, Contact Us, Sign-In)</h1>
      </div>
    </>
  );
}
