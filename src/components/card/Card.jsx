import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="Image" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>12.07.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium sed, doloremque...</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card