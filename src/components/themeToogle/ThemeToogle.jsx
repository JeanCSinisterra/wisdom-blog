import React from 'react'
import styles from "./ThemeToogle.module.css"
import Image from 'next/image'

const ThemeToogle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="Dark Theme" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="Light Theme" width={14} height={14} />
    </div>
  )
}

export default ThemeToogle;