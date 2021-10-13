
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from'./nav.module.scss'
import React from 'react'

export default function Navigation() {
    return (
        <div>
            <div className={styles.topNav}>
                <FontAwesomeIcon icon={faBars} size="3x" />
                <h1>VinylTwins</h1>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div>
                <input className={styles.searchBar}  type="text"  placeholder="SEARCH" />
    
        </div>
        </div>
    )
}
