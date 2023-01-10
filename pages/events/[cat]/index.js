import Link from 'next/link'
import React from 'react'
import styles from "/styles/Home.module.css"



function CategoryPage({data}) {
  console.log(data)
const eventsOnCity = data.map(item=>{
    return (
      <div className={styles.home_body}>
      <Link className={styles.card} href={`./${item.city}/${item.id}`} >
     
      <div className={styles.image_wrapper}>
      <img src ={item.image} className={styles.main_page_images} alt="Picture of the author"></img>
      </div>
       <div className={styles.text_wrapper}>
         <h2>{item.title}</h2>
         <p className={styles.city_name}>{item.city}</p>
         <h4>{item.description}</h4>
      </div>
      
      </Link>
      </div>
    )
  })

  return (
    <div>
      {eventsOnCity}
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
