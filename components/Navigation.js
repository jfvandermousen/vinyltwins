
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from'./nav.module.scss'
import React from 'react'

export default function Navigation() {
    return (
        <div>
            <div className={styles.topNav}>
                <FontAwesomeIcon icon={faBars} size="2x" className={styles.icon}  />
                <h1>Vinyl Twins</h1>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
            </div>
            <div>
                <input className={styles.searchBar}  type="text"  placeholder="SEARCH" />
    
        </div>
        </div>
    )
}
