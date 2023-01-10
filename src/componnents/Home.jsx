import Link from 'next/link'
import React from 'react'
import styles from "/styles/Home.module.css"



function Home({data}) {
    const eventsTitle = data.map(item=>{
    return (
      <div className={styles.home_body}>
        
        <Link className={styles.card} href={`./events/${item.id.toLowerCase()}`}>
          <div className={styles.image_wrapper}>
             <img className={styles.main_page_images} src ={item.image}   alt="Picture of the author"></img>
          </div>
          <div className={styles.text_wrapper}>
            <h2>{item.title}</h2>
            <h4>{item.description}</h4>
          </div>
        </Link>
      </div>
    )
  })
  return (
    <main >
        {eventsTitle}
      </main>
  )
}

export default Home


