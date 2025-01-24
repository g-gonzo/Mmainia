import Link from "next/link";
import Image from "next/image";
/*import shopShrooms from ".../public/images/banner3.jpg";*/
import styles from "./sc99.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.mainbdy}>
        <h1 className={styles.h1}>
          Welcome to our Shopping Cart! - (Alice Liddell - 99)
        </h1>
        <div className={styles.bdyblock}>
          <div className={styles.blockone}>
            <div className={styles.custinf}>
              <h2>MM Cust ID: 99</h2>
              <h3>NAME: Alice Pleasance Liddell</h3>
              <h3>Street: 1029 Fantasy Fancy Circle</h3>
              <h3>City: Tallahassee</h3>
              <h3>State: Florida</h3>
              <h3>Zip Code: 32306</h3>
              <h3>Credit Card#: 5541213482826125</h3>
              <h3>Email: aliddell@gmail.com</h3>
              <h3>CP: (386) 469-2323</h3>
            </div>
          </div>
          <table className={styles.table}>
            <tr>
              <th className={styles.th}>Quantity</th>
              <th className={styles.th}>Part Number</th>
              <th className={styles.th}>Description</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}>Total</th>
            </tr>
            <tr>
              <td className={styles.td}>12</td>
              <td className={styles.td}>PD-101-2500</td>
              <td className={styles.td}>90mm LME Agar Plates</td>
              <td className={styles.td}>$5.00</td>
              <td className={styles.td}>$60.00</td>
            </tr>
            <tr>
              <td className={styles.td}>2</td>
              <td className={styles.td}>MS-500-2000</td>
              <td className={styles.td}>Liquid Spore Cubensis</td>
              <td className={styles.td}>$25.00</td>
              <td className={styles.td}>$50.00</td>
            </tr>
          </table>
          <div>
            <h1>Place Order?</h1>
            <h2>Total: $110.00</h2>
            <br></br>
            <button>Proceed to Checkout</button>
            <br></br>
            <br></br>
            <br></br>
            <Link href="/shopping">Go back to Shopping?</Link>
          </div>
        </div>
      </div>
    </>
  );
}
