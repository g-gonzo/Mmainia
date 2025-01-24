import Link from "next/link";
import styles from "./adStyle.module.css";

export default function Page() {
  return (
    <>
      <div id="mainContainer" className={styles.mainContainer}>
        <header className={styles.header}>
          <h1>M Mainia - ADMIN CENTER</h1>
        </header>

        <div id="navbox" className={styles.navbox}>
          <nav className={styles.navbox}>
            <ul>
              <li>
                <Link href="#">Overview</Link>
              </li>
              <li>
                <Link href="#">Identity Providers</Link>
              </li>
              <li>
                <Link href="#">Users</Link>
              </li>
              <li>
                <Link href="#">User Attributes</Link>
              </li>
              <li>
                <Link href="#">Employees</Link>
              </li>
              <li>
                <Link href="#">Roles</Link>
              </li>
            </ul>
          </nav>

          <section id="cicenter" className={styles.cicenter}>
            <h3>Customer Information Center</h3>
            <div className={styles.cicenter}>
              <button>New Customer</button>
              <button>Edit Customer</button>
              <button>Delete Customer</button>
              <section>
                <input type="text" placeholder="Search.." />
                <button>
                  <i></i>Search
                </button>
              </section>
            </div>
          </section>

          <section>
            <form className={styles.form}>
              <label>MM Cust ID:</label>
              <input type="text" id="cid" name="cid" />

              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname" />

              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname" />

              <label>Home Address:</label>
              <input type="text" id="haddress" address="haddress" />

              <label className={styles.label} for="lname">
                City:
              </label>
              <input
                className={styles.input}
                type="text"
                id="city"
                address="city"
              />

              <label className={styles.label} for="lname">
                State:
              </label>
              <input
                className={styles.input}
                type="text"
                id="state"
                address="state"
              />

              <label className={styles.label} for="lname">
                Zip Code:
              </label>
              <input
                className={styles.input}
                type="text"
                id="zip"
                address="zip"
              />

              <label className={styles.label} for="lname">
                Email Address:
              </label>
              <input
                className={styles.input}
                type="text"
                id="email1"
                address="email1"
              />

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
          </section>
        </div>

        <section>
          <table id="table" className={styles.table}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">CID</th>
                <th scope="col">Email</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Status</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>001</td>
                <td>m1condor@gmail.com</td>
                <td>Marcus</td>
                <td>Daniels</td>
                <td>PENDING</td>
                <td>PO#101963-49 BO</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>002</td>
                <td>arielmm@yahoo.com</td>
                <td>Ariel</td>
                <td>Jacobs</td>
                <td>PAID</td>
                <td>NULL</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>003</td>
                <td>lilliemunster@yahoo.com</td>
                <td>Lillian</td>
                <td>Munster</td>
                <td>PAID</td>
                <td>NULL</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>004</td>
                <td>huntdogs@hotmail.com</td>
                <td>Thornton</td>
                <td>Crosby</td>
                <td>PENDING</td>
                <td>NULL</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>005</td>
                <td>luckysuzzie@hotmail.com</td>
                <td>Susan</td>
                <td>Donovan</td>
                <td>PENDING</td>
                <td>NULL</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>006</td>
                <td>peggiecv109@mailsac.com</td>
                <td>Peggy</td>
                <td>Clarksville</td>
                <td>PAID</td>
                <td>NULL</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>007</td>
                <td>tommytone987@gmail.com</td>
                <td>Thomas</td>
                <td>Theirfelder</td>
                <td>PAID</td>
                <td>NULL</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>008</td>
                <td>clssancho@yahoo.com</td>
                <td>Carlos</td>
                <td>Sanchez</td>
                <td>PENDING</td>
                <td>PO#110593-60 BO</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>009</td>
                <td>robmarshal@mayco.com</td>
                <td>Robert</td>
                <td>Marshal</td>
                <td>PENDING</td>
                <td>PO#211965-52 BO</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>010</td>
                <td>sandylee99@gmail.com</td>
                <td>Sandra</td>
                <td>Newton</td>
                <td>PAID</td>
                <td>NULL</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
