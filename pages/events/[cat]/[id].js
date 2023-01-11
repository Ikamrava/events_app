import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import styles from '/styles/Home.module.css'

function EventPage({data}) {

  const inputEmail = useRef();
  const router = useRouter()


  async function emailsubmit(e){
    e.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router ?.query.id
    try{
      const response = await fetch("/api/emailRegistration" , {
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email:emailValue,eventId})
      })
      if(!response.ok)throw new Error(response.status)
      const data = await response.json()
      

    }catch(e){
      console.log(e)
    }


  }


  return (
    <div className={styles.singleEventWrapper}>
      <h2>{data.title}</h2>
      <p>{data.city}</p>
      <img src ={data.image} className={styles.singleEventPhoto}  alt="Picture of the author"></img>
      <h4>{data.description}</h4>
      <form onSubmit={emailsubmit} className= {styles.form}>
          <div className={styles.inputWrapper}>
          <label className={styles.label}>Register for the Event!</label>
          <input ref ={inputEmail}type="email" placeholder='Input Your Email'></input>
          </div>
          <button>Submit</button>
      </form>
     
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


