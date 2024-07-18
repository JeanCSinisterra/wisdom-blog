"use client";

import React, { useContext } from 'react'
import styles from "./themeToogle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToogle = () => {
  const {theme ,toggle} = useContext(ThemeContext)
  console.log(theme);

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="Dark Theme" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="Light Theme" width={14} height={14} />
    </div>
  )
}

export default ThemeToogle;