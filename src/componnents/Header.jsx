import React from 'react'
import styles from '/styles/Home.module.css'

function Header() {
  return (
    
      <header>
          <nav className={styles.nav}>
            <img></img>
            <a href='./'>Home</a>
            <a href='./events'>Events</a>
            <a href='./about-us'>AboutUs</a>
          </nav>
        </header>
   
  )
}

export default Header
