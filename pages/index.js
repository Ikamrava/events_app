import Home from '../src/componnents/Home'



export default function MainPage({data}) {

  
  return (
    <>
      <Home data={data}></Home>
    </>
  )
}




export async function getServerSideProps(){
  const {events_categories} = await import("/pages/data/data.json")
  return{
    props:{
      data:events_categories
    }
  }
}


