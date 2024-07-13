import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToogle from "../themeToogle/ThemeToogle";
import AuthLinks from "../authLinks/AuthLinks";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/twitter.png" alt="twitter" width={24} height={24} />
      </div>
      <div className={styles.logo}>The Wizdom Harvester</div>
      <div className={styles.links}>
        <ThemeToogle/>
        <Link href="">Homepage</Link>
        <Link href="">Contact</Link>
        <Link href="">About</Link>
        <AuthLinks/>  
      </div>
    </div>
  );
};

export default NavBar;
