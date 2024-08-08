import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Style Blog
        <div className={styles.content}>
          <CardList/>
          <Menu/>
        </div>
      </h1>

    </div>
  )
}

export default BlogPage