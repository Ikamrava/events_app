import React from 'react'
import styles from "/styles/Home.module.css"

function AboutUsPage() {
  return (
    <div className={styles.about_textWrapper}>
      <h1 className={styles.about_text}>About us</h1>
      <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2 className={styles.who_weare}>Who we are</h2>
      <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className={styles.smallAbout}>
        <div>
           <h3>Ipsum is simply dummy</h3>
           <p>orem Ipsum is simply dummy 
          text of the printing and typesetting
           industry. Lorem Ipsum has been the 
           industry's standard dummy text 
           ever since the 1500s, when an 
           unknown printer took a galley 
           of type and scrambled it to 
           make a type specimen book. </p>
        </div>
        <div>
         <h3>Ipsum is simply dummy</h3>
         <p>orem Ipsum is simply dummy 
          text of the printing and typesetting
           industry. Lorem Ipsum has been the 
           industry's standard dummy text 
           ever since the 1500s, when an 
           unknown printer took a galley 
           of type and scrambled it to 
           make a type specimen book. 
           </p>
        </div>
        </div>
    
    </div>
  )
}

export default AboutUsPage
