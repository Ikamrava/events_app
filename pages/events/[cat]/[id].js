import React from 'react'
import styles from '/styles/Home.module.css'

function EventPage({data}) {

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.city}</p>
      <img src ={data.image}  alt="Picture of the author"></img>
      <h4>{data.description}</h4>
    </div>
  )
}

export default EventPage

export async function getStaticPaths(){
const {allEvents} = await import("/pages/data/data.json")
const allpaths = allEvents.map(item=>{
  return {
        params:{
          cat:item.city,
          id: item.id.toString()
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
const id = context.params.id
console.log(context)

const data = allEvents.find(item=>item.id===id)
console.log(data)
  return{
    props:{data}
    
  }

}


