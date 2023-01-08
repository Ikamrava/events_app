import React from 'react'

function EventPage() {
  return (
    <div>
      Ours single event
    </div>
  )
}

export default EventPage

// export async function getStaticPaths(){
// const {allEvents} = await import("/pages/data/data.json")
// const allpaths = allEvents.map(item=>{
//   return {
//         params:{
//           cat:item.city,
//           id: item.id.toString()
//         }
//       }
// })
//   console.log(allpaths)
//   return{
//     paths: allpaths,
//     fallback:false
    
//   }
// }

// export async function getStaticProps(context){
// const {allEvents} = await import("/pages/data/data.json")
// const id = context
// console.log(id)
// const data = allEvents.filter(item=>item.id.toLowerCase()===id)
//   return{
//     props:{data}
    
//   }

// }


