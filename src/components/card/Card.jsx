import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="Image" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>12.07.2024</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
            </div>
        </div>
    )
}

export default Card