import type { NextPage } from 'next'
import Head from 'next/head'
import ProductCard from '../components/productCard'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Нямушка</title>
        <meta name="description" content="Сказочное явство для котиков" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div className=" bg-[url('../assets/background.png')]">
        <div className="bg-black/20 bg-gradient-to-b from-black/50 to-black/10 flex flex-col items-center justify-center h-auto lg:h-screen">
          <h1 className="text-6xl text-center mt-auto md:mt-24 lg:mt-0 text-white mb-5">Ты сегодня покормил кота?</h1>
          <div className="flex flex-row flex-wrap gap-x-20 gap-y-10 justify-center">
            <ProductCard cardDisabled={true}></ProductCard>
            <ProductCard cardDisabled={false}></ProductCard>
            <ProductCard cardDisabled={false}></ProductCard>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
