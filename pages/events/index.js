import Link from 'next/link'
import React from 'react'



function EventsPage({data}) {
   
  const eventsTitle = data.map(item=>{
    return (
      
      <Link href={`./events/${item.id}`} >
      <h2>{item.title}</h2>
      <img src ={item.image}></img>
      </Link>
    )
   })

  return (
    <div>
      <h1>Events Page</h1>
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
