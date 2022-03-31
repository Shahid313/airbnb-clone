import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import axios from 'axios'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const MediumCards = [
      {
        "id":"1",
        "title":"Outdoor getaway",
        "img":"/MediumCardsImgs/outdoorgetaway.jpg"
      },{
        "id":"2",
        "title":"Unique stays",
        "img":"/MediumCardsImgs/uniquestays.jpg"
      },{
        "id":"3",
        "title":"Entire Homes",
        "img":"/MediumCardsImgs/entirehomes.jpg"
      },{
        "id":"4",
        "title":"Pet Allowed",
        "img":"/MediumCardsImgs/pethomes.jpg"
      }
]

export default function Home({exploreData}) {
  return (
    <div>
      <Head>
        <title>airbnb</title>
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='font-semibold text-2xl pb-5'>Explore Nearby</h2>
          {/* pulling some data from server-API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map((item) => (
            <SmallCard key={item.id} 
            name={item.name} 
            distance={item.distance} 
            image={item.image}/>
          ))}
          </div>
        </section>

        <section>
          <h2 className='font-semibold text-2xl py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {MediumCards?.map(({id,title,img}) => (
              <MediumCard key={id} title={title} img={img} />
            ))}
          </div>
        </section>

        <LargeCard 
        title="The Greatest Outdoors" 
        image="/img/large_card.jpg"
        description="Whishlists curated by airbbnb"
        buttonText="Get Inspired"/>
      </main>
      <Footer/>
    </div>
  )
}



export async function getStaticProps(){
   const exploreData = await fetch('http://127.0.0.1:5000/get_locations').then(
    res => res.json()
  );

  return{
    props:{
      exploreData:exploreData
    }
  }
}
