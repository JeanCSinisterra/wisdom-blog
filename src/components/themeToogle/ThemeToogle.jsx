"use client";

import React, { useContext } from 'react'
import styles from "./themeToogle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToogle = () => {
  const { theme, toggle } = useContext(ThemeContext)
  console.log(theme);

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
    }>
      <Image src="/moon.png" alt="Dark Theme" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="Light Theme" width={14} height={14} />
    </div>
  )
}

export default ThemeToogle;