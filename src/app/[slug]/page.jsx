import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
// import Comments from '@/components/comments/Comments'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.usernames}>Jean Carlo</span>
                            <span className={styles.date}>08.08.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p className={styles.postContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid voluptate laboriosam veritatis quos dolore repellat harum
                            necessitatibus dignissimos optio aliquam porro soluta veniam fuga,
                            itaque fugiat iusto illum fugit at.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid voluptate laboriosam veritatis quos dolore repellat harum
                            necessitatibus dignissimos optio aliquam porro soluta veniam fuga,
                            itaque fugiat iusto illum fugit at.
                        </p>
                        <p className={styles.postContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid voluptate laboriosam veritatis quos dolore repellat harum
                            necessitatibus dignissimos optio aliquam porro soluta veniam fuga,
                            itaque fugiat iusto illum fugit at.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid voluptate laboriosam veritatis quos dolore repellat harum
                            necessitatibus dignissimos optio aliquam porro soluta veniam fuga,
                            itaque fugiat iusto illum fugit at.
                        </p>
                        <p className={styles.postContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid voluptate laboriosam veritatis quos dolore repellat harum
                            necessitatibus dignissimos optio aliquam porro soluta veniam fuga,
                            itaque fugiat iusto illum fugit at.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquid voluptate laboriosam veritatis quos dolore repellat harum
                            necessitatibus dignissimos optio aliquam porro soluta veniam fuga,
                            itaque fugiat iusto illum fugit at.
                        </p>
                    </div>
                </div>
                <Menu />
                {/* <Comments/> */}
            </div>
        </div>
    )
}

export default SinglePage