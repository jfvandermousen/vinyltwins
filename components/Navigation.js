
import { faBars, faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from'./nav.module.scss'
import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div>
            <div className={styles.topNav}>
                <FontAwesomeIcon icon={faBars} size="2x" className={styles.icon}  />
                
                <Link href="/">
                <h1>Vinyl Twins</h1>
                </Link>
                <FontAwesomeIcon icon={faCartShopping}className={styles.searchIcon} />
            </div>
            <div>
                <input className={styles.searchBar}  type="text"  placeholder="SEARCH" />
    
        </div>
        </div>
    )
}
