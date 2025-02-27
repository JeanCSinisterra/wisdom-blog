import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={ `${styles.category} ${styles.style}`}>
            <Image 
              src="/style.png" 
              alt="category" 
              width={32} 
              height={32} 
              className={styles.image} /> 
              Style
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
            <Image
              src="/food.png"
              alt="category"
              width={32}
              height={32}
              className={styles.image} />
            Food
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
            <Image
              src="/travel.png"
              alt="category"
              width={32}
              height={32}
              className={styles.image} />
            Travel
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`}>
            <Image
              src="/culture.png"
              alt="category"
              width={32}
              height={32}
              className={styles.image} />
            Culture
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
            <Image
              src="/coding.png"
              alt="category"
              width={32}
              height={32}
              className={styles.image} />
            Coding
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
            <Image
              src="/fashion.png"
              alt="category"
              width={32}
              height={32}
              className={styles.image} />
            Fashion
          </Link>
        </div>
      </div>
  )
}

export default CategoryList