import React from 'react'
import Image from 'next/image'
import styles from "/styles/Home.module.css"



function Header() {
  return (
    
    
      <header className={styles.header}>
        <div className={styles.topNav}>
          <Image src={"/images/logo.jpg"}  width = {150} height={50} alt="logo" />
          <nav >
            <img></img>
            <ul className={styles.ul}>
              <li><a href='./'>Home</a></li>
              <li><a href='./events'>Events</a></li>
              <li><a href='./about-us'>AboutUs</a></li>
            </ul>
          </nav>
          </div>
          <p className={styles.title}>Title</p>
        </header>
   
  )
}

export default Header
