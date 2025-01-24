import {Open_Sans} from "next/font/google";
import Link from "next/link";
import styles from "./rootStyle.module.css";

const OpenSans = Open_Sans({
  subsets:["latin"], 
  weights: [400],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={OpenSans.className}>
      <head></head>
      <body className={styles.wrapper}>
      <header className={styles.header}>
      <h1>
      <Link className={styles.homeLink} href="/home">Mushroom Mania !</Link>
      </h1>
      <nav className="container">
        <ul className={styles.container}>
            <li><Link className={styles.li} href="/faq">FAQ</Link></li>
            <li><Link className={styles.li} href="/buystuff/growing">Equip 2 Grow Stuff</Link></li>
            <li><Link className={styles.li} href="/buystuff/lab">Equip 4 Laboratory</Link></li>
            <li><Link className={styles.li} href="/shopping">Shopping Central</Link></li>
            <li><Link className={styles.li} href="/contact">Contact Us</Link></li>
            <li><Link className={styles.li} href="/shopping/signin">Sign-In</Link></li>
        </ul>
      </nav>
      </header>

        {children}
        <div className={styles.push}></div>
        <footer className={styles.footer}>
            <h3>Created in the year of our Lord ! - 2024 g.gonzales - All rights reserverd. &copy; </h3>
        </footer>
      </body>
    </html>
  );
}
