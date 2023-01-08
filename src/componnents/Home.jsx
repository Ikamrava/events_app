import Link from 'next/link'
import React from 'react'
import styles from '/styles/Home.module.css'


function Home({data}) {
    const eventsTitle = data.map(item=>{
    return (
      <Link href={`./events/${item.id.toLowerCase()}`}>
      <h2>{item.title}</h2>
      <img src ={item.image} className={styles.mainImgs}  alt="Picture of the author"></img>
      <h4>{item.description}</h4>
      </Link>
    )
  })
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {eventsTitle}
      </div>
    </main>
  )
}

export default Home


