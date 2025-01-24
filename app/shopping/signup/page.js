import Link from "next/link";
import styles from "./suStyle.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.backcolor3}>
        <h1 className={styles.h1}>Welcome to Sign-Up Page!</h1>
        <br></br>
        <h2 className={styles.h2}>Please fill out the following:</h2>
        <br></br>
        <h3 className={styles.h3}>Personal Information</h3>
        <div className={styles.fillbox}>
          <form className={styles.fo}>
            <label className={styles.label} for="fname">
              MM Cust ID:
            </label>
            <input className={styles.input} type="text" id="cid" name="cid" />
            <br></br>
            <label className={styles.label} for="fname">
              First name:
            </label>
            <input
              className={styles.input}
              type="text"
              id="fname"
              name="fname"
            />
            <br></br>
            <label className={styles.label} for="lname">
              Last name:
            </label>
            <input
              className={styles.input}
              type="text"
              id="lname"
              name="lname"
            />
            <br></br>
            <label className={styles.label} for="lname">
              Home Address:
            </label>
            <input
              className={styles.input}
              type="text"
              id="haddress"
              address="haddress"
            />
            <br></br>
            <label className={styles.label} for="lname">
              City:
            </label>
            <input
              className={styles.input}
              type="text"
              id="city"
              address="city"
            />
            <br></br>
            <label className={styles.label} for="lname">
              State:
            </label>
            <input
              className={styles.input}
              type="text"
              id="state"
              address="state"
            />
            <br></br>
            <label className={styles.label} for="lname">
              Zip Code:
            </label>
            <input
              className={styles.input}
              type="text"
              id="zip"
              address="zip"
            />
            <br></br>
            <label className={styles.label} for="lname">
              Email Address:
            </label>
            <input
              className={styles.input}
              type="text"
              id="email1"
              address="email1"
            />
            <br></br>
            <label className={styles.label} for="lname">
              Phone Number:
            </label>
            <input
              className={styles.input}
              type="text"
              id="phone"
              address="phone"
            />
            <br></br>
            <button type="button" className={styles.subutton}>
              <strong>Submit</strong>
            </button>
          </form>
          <div>
            <hr></hr>
            <h3>Back to Sign-In:</h3>
            <Link className={styles.li} href="/shopping/signin">
              Click here to go back to Sign-In.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
