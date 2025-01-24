import Link from "next/link";
import styles from "./cont.module.css"; 

export default function Page() {
    return (
      <>
      <div className={styles.backcolor4}>
      <h1 className={styles.h1}>Contact Page! (Please shoot us a message!)</h1>
      <br></br>
      <h3 className={styles.h3}>Sign-In Information</h3>
      <form className={styles.fillbox}>
      <label className={styles.label} for="cufirstname">First Name:</label>
      <input className={styles.input} type="text" id="cufirstname" name="cufirstname"/><br></br>
      <label className={styles.label} for="culastname">Last Name:</label>
      <input className={styles.input} type="text" id="culastname" name="culastname"/><br></br>
      <label className={styles.label} for="email">Email Address:</label>
      <input className={styles.input} type="text" id="email3" name="email3"/><br></br>
      <label className={styles.label} for="password">Phone Number:</label>
      <input className={styles.input} type="text" id="phone2" name="phone2"/><br></br>
      <label className={styles.label} for="textarea"><b>Message:</b></label>
      <br></br>
      <textarea className={styles.textarea}></textarea><br></br>
      <button className={styles.conbutton} type="button" ><strong>Submit</strong>
      </button>
      </form>
      </div>
      </>
    );
  }