import Link from 'next/link'
import React from 'react'
import styles from "/styles/Home.module.css"




function EventsPage({data}) {
   
  const eventsTitle = data.map(item=>{
    return (
      
      <div>
        <Link className={styles.card_events} href={`./events/${item.id}`} >
          <div className={styles.image_wrapper}>
            <img className={styles.main_page_images} src ={item.image}></img>
          </div>
          <div className={styles.text_wrapper_event}>
            <h2>{item.title}</h2>
          </div>
        </Link>
      </div>
    )
   })

  return (
    <div className={styles.home_body_events}>
      {eventsTitle}
    </div>
  )
}

export default EventsPage


export async function getStaticProps(){
   const {events_categories} = await import("../data/data.json")
   console.log(events_categories)
  
  return{
    props:{
      data:events_categories
    }
  }
}
