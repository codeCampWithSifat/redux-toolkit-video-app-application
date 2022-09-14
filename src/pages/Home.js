import React from 'react'
import VideoGrid from '../components/grid/VideoGrid'
import Navbar from '../components/navbar/Navbar'
import Tags from '../components/tags/Tags'
import Footer from '../components/uri/Footer'
import Pagination from '../components/uri/Pagination'


const Home = () => {
  return (
    <>
      <Navbar />
      <Tags/>
      <VideoGrid/>
      <Pagination/>
      <Footer/>
    </>
  )
}

export default Home
