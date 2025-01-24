import Link from "next/link";
import Image from "next/image";
/*import shopShrooms from ".../public/images/banner3.jpg";*/
import styles from "./sc101.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.mainbdy}>
        <h1 className={styles.h1}>
          Welcome to our Shopping Cart! - (Paul Stamets - 101)
        </h1>
        <div className={styles.bdyblock}>
          <div className={styles.blockone}>
            <div className={styles.custinf}>
              <h2>MM Cust ID: 101</h2>
              <h3>NAME: Paul Edward Stamets</h3>
              <h3>Street: 1169 Weird Fungi Lane</h3>
              <h3>City: Seatle</h3>
              <h3>State: Washington</h3>
              <h3>Zip Code: 98373</h3>
              <h3>Credit Card#: 5415277530109901</h3>
              <h3>Email: psmagic@yahoo.com</h3>
              <h3>CP: (253) 564-1123</h3>
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
              <td className={styles.td}>3</td>
              <td className={styles.td}>MT-235-1009</td>
              <td className={styles.td}>24x24x24 Shroom Maker MonoTub</td>
              <td className={styles.td}>$35.00</td>
              <td className={styles.td}>$105.00</td>
            </tr>
            <tr>
              <td className={styles.td}>4</td>
              <td className={styles.td}>FB-495-2300</td>
              <td className={styles.td}>HydroMaster BirdSeed FruitBlock</td>
              <td className={styles.td}>$25.00</td>
              <td className={styles.td}>$100.00</td>
            </tr>
          </table>
          <div>
            <h1>Place Order?</h1>
            <h2>Total: $205.00</h2>
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
