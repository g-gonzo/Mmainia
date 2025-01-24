import Link from "next/link";
import styles from "./siStyle.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.backcolor2}>
        <div>
          <h1 className={styles.h1}>Welcome to our Sign-In Page!</h1>
        </div>
        <div>
          <h2 className={styles.h2}>Please fill out the following:</h2>
        </div>
        <br></br>
        <h3 className={styles.h3}>Sign-In Information</h3>
        <div className={styles.formblock}>
          <form className={styles.form}>
            <label className={styles.label} for="email">
              Email Address:
            </label>
            <input
              className={styles.input}
              type="text"
              id="email2"
              name="email2"
            />
            <br></br>
            <label className={styles.label} for="password">
              Password:
            </label>
            <input
              className={styles.input}
              type="text"
              id="password"
              name="password"
            />
            <br></br>
            {/*This had a Link around the button and went to http://localhost:3000/shopping/100 demonstrating 'Weak Password' in PPT*/}
            {/*because any email and password would go to the shopping cart, of fake customer; "Weak Password by Social Engineering"*/}
            <button id="myButton" type="button" className={styles.sibutton} >
              <strong>Submit</strong>
            </button>
          </form>
          <h1 className="demo"></h1>
          <div>
            <hr></hr>
            <h3>Don't have an account yet?</h3>
            <Link className={styles.li} href="./signup">
              Click here to Sign-Up for your account.
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
