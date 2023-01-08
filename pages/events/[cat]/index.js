import Link from 'next/link'
import React from 'react'
import styles from '/styles/Home.module.css'


function CategoryPage({data}) {
  console.log(data)
const eventsOnCity = data.map(item=>{
    return (
      <Link href={`./${item.city}/${item.id}`} >
      <h2>{item.title}</h2>
      <p>{item.city}</p>
      <img src ={item.image} className={styles.mainImgs} alt="Picture of the author"></img>
      <h4>{item.description}</h4>
      </Link>
    )
  })

  return (
    <div>
      <h1>Events bsed on cities</h1>
      {eventsOnCity}
      <a href='/events/london/ev1'>ev1</a>
    </div>
  )
}

export default CategoryPage

export async function getStaticPaths(){
const {events_categories} = await import("/pages/data/data.json")
const allpaths = events_categories.map(item=>{
  return {
        params:{
          cat: item.id.toString()
        }
      }
})
  console.log(allpaths)
  return{
    paths: allpaths,
    fallback:false
    
  }

}


export async function getStaticProps(context){
const {allEvents} = await import("/pages/data/data.json")
const id = context.params.cat
const data = allEvents.filter(item=>item.city.toLowerCase()===id)
  return{
    props:{data}
    
  }

}
