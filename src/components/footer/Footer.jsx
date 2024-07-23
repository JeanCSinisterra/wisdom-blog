import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="The Wisdom Harvester" width={50} height={50} />
                    <h1 className={styles.logoText}>The Wisdom Harvester</h1>
                </div>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                    necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                    porro sequi, totam minima consequuntur, aspernatur deleniti vero
                    repellendus dorales.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
                    <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
                    <Image src="/twitter.png" alt="X" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Styles</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">X</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer