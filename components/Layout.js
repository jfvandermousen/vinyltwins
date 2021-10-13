import React from 'react'
import Navigation from './Navigation'
import styles from "./Layout.module.scss"
import NextLink from 'next/link'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Navigation />
            <main>{children}</main>
            <footer className={styles.footer}>@Jf Vandermousen</footer>
        </div>
    )
}
